import React from 'react';
import Image from 'next/image';
import style from './nav.module.css';
const navigation=()=>{
    return(
        <div className={style.nav}>
                <Image src="/nav.png" width="180" height="40" ></Image>
        </div>
    )

}
export default navigation;