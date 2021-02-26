import React, { useEffect, useState } from 'react';
import style from './time.module.css';
const Time=(props)=>{
    var [date,setDate] = useState(new Date());
    useEffect(()=>{
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
       
    })
    return(
        <div className={style.time}>
        <h1>{(props.tName) ? props.tName : "kochi"}</h1>
        <time><span>Local Time</span> {date.toLocaleTimeString([],{hour:'2-digit', minute: '2-digit'})}</time>
        </div>
    )
} 
   
    
export default Time;