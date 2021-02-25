import React from 'react';
import styles from '../style/navigationStyle.module.css';
import Form from '../components/form/form';
import VideoPage from '../components/video-bgd/video';
import Label from '../components/volcano-label/label';
import Time from '../components/time/time';
import LiveView from '../components/live-view/live-view';
import Logo from '../components/logo/logo';
import Nav from '../components/navigation/nav';
import Head from 'next/head';
function Navigation() {
    return (
<>
<Head>
    <title>volcano-Form</title>
        <link rel="stylesheet" href="https://candyfonts.com/wp-data/2018/10/26/11538/HELR45W.ttf"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
    </Head>
<div className={styles.navContainer}>
      
        <div className={styles.navTop}>
        <Label/>
        <LiveView/>
        </div>
        <div className={styles.form}>
          <Form/>
        </div>
        <div className={styles.navImage}>
        <Nav/>
        </div>
        <div className={styles.navBottom}>
        <Time/>
        <Logo/>
        </div>
        <VideoPage/>
    </div>
    <style jsx global>{`
    body{
        font-family: helvetica;
        
        background-color: black;
        margin:0;
        padding:0;
        box-sizing: border-box;
       
}
`}
    </style>

</>
    ) 
  }
  
  export default Navigation