import React, {Component} from 'react';
import style from './live.module.css';

class liveView extends Component{
    render(){ 
        
    return(
<>

<div className={style.live}>
    <div className={style.line}>
        <div className={style.red}>
        <i className="fa fa-eye"></i>
            <h4>LIVE</h4>
        </div>
        
        <p>{ this.props.count}</p>
    </div>
    <div className={style.image}>
    <img src="/live.jpg" alt="image" className={style.graph}/>
    </div>
    <h5>{Math.imul(8.17,this.props.count)}MB</h5>
    <small>airBytes</small>
    
</div>
</> 
        )
    }
}

export default liveView;