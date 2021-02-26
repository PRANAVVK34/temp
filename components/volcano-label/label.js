import React from 'react';
import Link from 'next/link';
import style from './label.module.css';
const label=(props)=>{
    return(
        <div className={style.label}>
            <h3>
            <Link href="/">
                <a>http://volcano.live/<br/>
               <span>*{(props.name)?props.name:"kochi"}</span>|</a>
            </Link>
            </h3>
            <p>by:
                <span> Radisson</span></p>
        </div>
    )

}
export default label;