import React from 'react';
import style from './time.module.css';
import moment from 'moment';
const time=()=>{
return(

    <div className={style.time}>
        <h1>BERLIN</h1>
        <time><span>Local Time</span> {moment().format("h:mm A")}</time>
    </div>
)
}
export default time;