import React from 'react';
import style from './video.module.css';
function videoPage() {
    return (
    <div className={style.fullscreen_bg}>
        <video autoPlay muted loop>
            <source src="/video.mp4"/>
        </video>
       
    </div>
    
    )
  }
  
  export default videoPage