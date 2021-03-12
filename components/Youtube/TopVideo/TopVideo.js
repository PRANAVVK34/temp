import React, {Component} from "react";
import styles from "./TopVideo.module.css";
class TopVideo extends Component{
  constructor(props){
    super(props)

  }

  state={
    show:false,
    showSearch:false,
    search:""
  }

  // to show the labels and labels
  change=()=>{
    this.setState(prevState=>({show:!prevState.show, showSearch:false}))
  }

  //shows the input field
  showsearchHandler=()=>{
    this.setState(prevState=>({showSearch:!prevState.showSearch, show:!prevState.show}))
  }

  eventHandler=(e)=>{
    this.setState({search:e.target.value})
  }



  render(){

    

    return(


  <div className={styles.topvideo}>

     {/* input field on top of video  */}
    { this.state.showSearch ? <input onChange={this.eventHandler} type="text" placeholder="Enter URL here" className={styles.input}/> :null }

      {/* videotop labels and icons */}
      { this.state.show ?
    <div>

    <p>Asianet News Live - Election Result 
      <span className={styles.edit} onClick={this.showsearchHandler}>
      <i className="fa fa-edit"></i>
      </span>
    </p>
    </div>
    :null

      }

      {/* top video */}
  <video onClick={this.change}>
      <source src="./camera.mp4"></source>
  </video>

      {/* pause button */}
  <div style={{display : this.state.show || 
        this.state.showSearch  ? "block" : "none"}} className={styles.pause}>
  <i className="fa fa-pause"></i>
  </div>

   {/* bottom video time adjusting bar */}
  <div style={{display : this.state.show || 
        this.state.showSearch ? "block" : "none"}} className={styles.changeTime}>
          <div className={styles.round}></div>
 
  </div>


  </div>

  
    )
  }
}

export default TopVideo;