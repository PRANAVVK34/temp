import React,{Component} from "react";
import styles from "./Emoji.module.css";
class Emoji extends Component{

  render(){
    return(
     <div className={styles.emoji}>
        <i className="fa fa-window-close" onClick={this.props.closeEmojiHandler}></i>
     <ul>
         <li className={styles.singleEmoji}>
         <img src="/emoji.jpg"/>
         </li>
         <li className={styles.singleEmoji}>
         <img src="/emoji.jpg"/>
         </li>
         <li className={styles.singleEmoji}>
         <img src="/emoji.jpg"/>
         </li>
         <li className={styles.singleEmoji}>
         <img src="/emoji.jpg"/>
         </li>
         <li className={styles.singleEmoji}>
         <img src="/emoji.jpg"/>
         </li>
         <li className={styles.singleEmoji}>
         <img src="/emoji.jpg"/>
         </li>
         <li className={styles.singleEmoji}>
         <img src="/emoji.jpg"/>
         </li>
         <li className={styles.singleEmoji}>
         <img src="/emoji.jpg"/>
         </li>
         <li className={styles.singleEmoji}>
         <img src="/emoji.jpg"/>
         </li>
         <li className={styles.singleEmoji}>
         <img src="/emoji.jpg"/>
         </li>
        
     </ul>
     </div>
    )
  }
}

export default Emoji;