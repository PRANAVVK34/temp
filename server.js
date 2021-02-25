const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')


const dev=process.env.NODE_ENV!='production'
const nextApp= next({dev})
const nextHandler= nextApp.getRequestHandler()


var connectCounter=0
io.on("connection",(socket)=>{
  
        connectCounter++
        console.log("connection on",connectCounter)
  
        io.emit('counter', connectCounter);


    socket.on("disconnect",()=>{
  
        connectCounter--;
        console.log("disconnect",connectCounter)
        io.emit('counter', connectCounter);

        
    })

})


nextApp.prepare().then(()=>{
    app.get('*',(req,res)=>{
        return nextHandler(req,res)
    })
    
})

server.listen(4000,(err)=>{
    if(err) throw err
    console.log("server started");
})







