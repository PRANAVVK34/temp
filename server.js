const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')
const bodyParser= require('body-parser')
const formData= require('./models/formData')
const initDB= require('./helpers/initDB')


const dev=process.env.NODE_ENV!='production'
const nextApp= next({dev})
const nextHandler= nextApp.getRequestHandler()

// index connection
var connectCounter=0

   io.of("/").on("connection",(socket)=>{
    connectCounter++
    // console.log("connection on",connectCounter)

    io.emit('counter', connectCounter);

    socket.on("disconnect",()=>{ 
    connectCounter--;
    // console.log("disconnect",connectCounter)
    io.emit('counter', connectCounter);
  
})

})

//url connections

const roomCount= new Array()
io.on("connection",(socket)=>{
    var root= socket.request.headers.referer
    var room = root.substring(root.lastIndexOf('/') + 1) ;
    roomCount[room] ? roomCount[room]++ : roomCount[room]=1
    console.log("nav-connect" , roomCount[room],room)
    io.emit("nav-counter",roomCount[room],room)

    
    socket.on("disconnect",()=>{ 
        var root= socket.request.headers.referer
        var room = root.substring(root.lastIndexOf('/') + 1) ;
        roomCount[room]--
        console.log("nav-disconnect" , roomCount[room],room)
        io.emit("nav-counter",roomCount[room],room)
      
    })
   
})

initDB()
nextApp.prepare().then(()=>{

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

   app.post('/server',async(req,res)=>{
       console.log(req.body);
       await formData.insertMany(req.body)
       res.redirect('/')
   })

    app.get('*',(req,res)=>{
        return nextHandler(req,res)
    })
    
})

server.listen(4000,(err)=>{
    if(err) throw err
    console.log("server started");
})







