import React, { Component } from 'react';
import Head from 'next/head';
import TopVideo from '../components/Youtube/TopVideo/TopVideo';
import Viewers from '../components/Youtube/OnlineViewers/onlineViewers';
import Footer from '../components/Youtube/footer/footer';
import styles from "../style/youtube.module.css";

class Youtube extends Component{
    render(){
        return(
        <>

        <Head>
          <title>volcano</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
        </Head>

            <div className={styles.layer}>

            <div className={styles.display}>

            <TopVideo/>

            <div className={styles.viewer}>
            <Viewers/>
            <Viewers/>
            <Viewers/>
            <Viewers/>
            
            </div>

            </div>

            <div className={styles.footer}>
            <Footer/>
            </div>

            </div>

        </>
        )
    }
}
export default Youtube;