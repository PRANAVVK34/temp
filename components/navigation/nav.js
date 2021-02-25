import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './nav.module.css';
const navigation=()=>{
    return(
        <div className={style.nav}>
            <h3 >
            <Link href="/navigation">
                <Image src="/nav.png" width="180" height="40" ></Image>
            </Link>
            </h3>
        </div>
    )

}
export default navigation;