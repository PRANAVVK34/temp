import React, {Component} from 'react';
import style from './live.module.css';

class liveView extends Component{
    render(){
       
        return(
<>

<div className={style.live}>
    <div className={style.line}>
        <div className={style.red}>
        <i class="fa fa-eye"></i>
            <h4>LIVE</h4>
        </div>
        
        <p>20k</p>
    </div>
    <div className={style.image}>
    <img src="/live.jpg" alt="image" className={style.graph}/>
    </div>
    <h5>21458.87 MB</h5>
    <small>airBytes</small>
    
</div>
</> 
        )
    }
}

export default liveView;