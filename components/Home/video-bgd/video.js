import React, {Component} from 'react';
import style from './video.module.css';
import {videoBerlin} from '../VideoGirlTimeDureations';
import {video} from '../VideoGirlTimeDureations';
class VideoPage extends Component{
    render(){
        console.log(this.props.value);
        return(
            <div className={style.fullscreen_bg}>
            <video autoPlay muted loop>
                <source src={(this.props.value=="Berlin") ? video : videoBerlin}/>
            </video>
           
        </div>
        )
    }
}
  
  export default VideoPage

