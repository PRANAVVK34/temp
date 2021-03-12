import React,{Component} from "react";
import styles from "./OnlineViewers.module.css";
class Viewers extends Component{

    state={
        show:false
    }

    sidebarHandler=()=>{
        this.setState(prevState=>({show:!prevState.show}))
    }

    render(){

    return(
    <div className={styles.main}>
      <ul>
          <li className={styles.viewers}>

              <video onClick={this.sidebarHandler}>
                  <source src="./viewer1.mp4"/>    
              </video>

              <div className={styles.sidebar} style={{display : this.state.show ? "block" : "none"}}>

                <div className={styles.icons}>
                <i className="fa fa-volume-up"></i>
                <i className="fa fa-eye-slash"></i>
                </div>
                
                </div>
                <p>Aruna vaidyan</p>
          </li>
      </ul>

  </div>
        )
    }
}

export default Viewers;