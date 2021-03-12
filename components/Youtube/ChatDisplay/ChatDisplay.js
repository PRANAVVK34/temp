import React,{Component} from "react";
import styles from "./ChatDisplay.module.css";
class ChatDisplay extends Component{

  state={
    message:"",
    placeHolder:true
  }

  eventHandler=(e)=>{
    var text = e.target.value
    this.setState({message:text})
  }
  hide=()=>{
    this.setState({placeHolder:false})
  }

  render(){
    return(
      <>
     <div className={styles.chat}>
       <form onSubmit={this.props.messagePopupHandler}>
         {this.state.placeHolder ? <p>Type something to <br/> send a flash chat<br/>|</p> : null} 
         <input type="text" onChange={this.eventHandler} onClick={this.hide}/>
         <input type="button" className={styles.submit}/>
        </form>
        <i className="fa fa-window-close" onClick={this.props.closeHandler}></i>
     </div>
     </>
    )
  }
}

export default ChatDisplay;