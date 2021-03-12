import React,{Component} from "react";
import styles from "./footer.module.css";
import ChatDisplay from "../ChatDisplay/ChatDisplay";
import Emoji from "../Emojis/Emoji";

class Footer extends Component{

  constructor(props){
    super(props)
    this.chat=React.createRef()
  }

  state={
    show:false,
    emojiShow:false,
    popup:false,
    layer:true,
    msg:""
  }

  chatDisplay=()=>{
    this.setState({show:true, layer:true})
  }
  emojiDisplay=()=>{
    this.setState({emojiShow:true})
  }

  PopupHandler=(e)=>{
    const message=this.chat.current.state.message
    e.preventDefault()
    this.setState({popup:true, layer:false, msg:message});
    setTimeout(()=>{
      this.setState({popup:false})
    },5000)
    
  }
  closeLayer=()=>{
    this.setState({layer:false})
  }
  emojiClose=()=>{
    this.setState({emojiShow:false})
  }

  render(){

    return(
      <>
  
    <div className={styles.contain}>
      {this.state.popup ? 
    <div className={styles.popupMsg}>
      <p>{this.state.msg}</p>
    </div>
    :null
  }
      <video>
          <source src="./viewer1.mp4"/>
      </video>
      <div className={styles.icon}>

     <div><i className="fa fa-video-camera" ></i></div> 

     <div><i className="fa fa-microphone"></i></div> 
     
     <div ><i onClick={this.chatDisplay} className="fa fa-sticky-note" style={{zIndex:"500"}}></i></div> 
     
     <div><i onClick={this.emojiDisplay} className="fa fa-reddit" ></i></div> 
      
      </div>
  </div>
  {this.state.show && this.state.layer ? <ChatDisplay messagePopupHandler={this.PopupHandler} ref={this.chat} id="chat" closeHandler={this.closeLayer}/> : null}
  {this.state.emojiShow ? <Emoji closeEmojiHandler={this.emojiClose}/> : null}
      </>
    )
  }
}

export default Footer;