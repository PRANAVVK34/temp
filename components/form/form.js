import React, {Component} from 'react';
import styles from './form.module.css';
import {video} from '../VideoGirlTimeDureations';
import {times} from '../VideoGirlTimeDureations';
import {duration} from '../VideoGirlTimeDureations';


class Form extends Component{
    constructor(props){
        super(props)
        this.videoPlay=React.createRef();
    this.state={
            name:"",
            email:"",
            mobile:"",
         
    }
    
    }

    handle=()=>{
        const viewers={
                 name:this.state.name,
                 email:this.state.email,
                 mobile:this.state.mobile,
                }

        try{
            fetch("http://localhost:3000/api/form-submit",
            {
                method: "POST",
                
                headers: {
                    "Accept":"application/json",
                    "content-type":"application/json"
                },
                body: JSON.stringify(viewers)
        })
       
        }
        catch (error){
            console.log(error)
        }
            }

    componentDidMount(){
       let v=this.videoPlay.current
        setTimeout(()=>{
            v.pause()
        },duration[0])
    }

    eventChangeHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
            
        })
        
    }
    focusHandler=()=>{
        let name=this.state.name.trim()
        let nameVideo=this.videoPlay.current
        if(name.length===""||name.length<=3){
            nameVideo.currentTime=times[0]
            
            nameVideo.play()
        }
        setTimeout(()=>{
            nameVideo.pause()
        },duration[1])
    }


    focusOutHandler=()=>{
        let email=this.state.email.trim()
        let mailformat=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let emailVideo=this.videoPlay.current

        if(email.length===""||email.length<6||!email.match(mailformat)){
            emailVideo.currentTime=times[1]
            
            emailVideo.play()
        }
        setTimeout(()=>{
            emailVideo.pause()
        },duration[2])
        
    }
   
    fOutHandler=()=>{
        let mobile=this.state.mobile.trim()
        let mobileVideo=this.videoPlay.current
        if(mobile.length!==10){
            mobileVideo.currentTime=times[2]
            
            mobileVideo.play()
        }
        setTimeout(()=>{
            mobileVideo.pause()
        },duration[3])
        
    }

    sumbitHandler=(event)=>{

        let NAME=this.state.name
        let EMAIL=this.state.email
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let Mobile=this.state.mobile
        if(NAME.length<=3||EMAIL.length<6||!EMAIL.match(mailformat)||Mobile.length!=10){

            return event.preventDefault();
           
        }
        
    }

 render(){

     return(
        <>
        <div className={styles.forms}>
           <form action="/api/form-submit" method="POST"  id="form" className={styles.form} onSubmit={this.handle}>
           <input type="text"  
           name="name" 
           id="name" 
            className={styles.formcontrol}
           placeholder="Name"
           value={this.state.name}
           onChange={this.eventChangeHandler} onBlur={this.focusHandler}>
           </input>
           <input type="text"  
           name="email" 
           id="email" 
          className={styles.formcontrol}
           placeholder="Email"
           value={this.state.email}
           onChange={this.eventChangeHandler} onBlur={this.focusOutHandler}>
           </input>
           <input type="number" 
           name="mobile" 
           id="mobile" 
          className={styles.formcontrol}
           placeholder="Mobile Number"
           value={this.state.description}
           onChange={this.eventChangeHandler} onBlur={this.fOutHandler}>
           </input>
           <input type="submit" className={styles.submit} onClick={this.sumbitHandler}/>
           </form>
        
       </div>
      
       <div className={styles.vdo}>
        <video  
        className={styles.video}
        autoPlay
        muted 
        ref={this.videoPlay}>
        <source src={video}/>
        </video>

        </div>
    </>
     )
 }
} 


export default Form;

