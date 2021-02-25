import React, {Component} from 'react';
import styles from '../style/style.module.css';
import Head from 'next/head';
import VideoPage from '../components/video-bgd/video';
import Label from '../components/volcano-label/label';
import Time from '../components/time/time';
import LiveView from '../components/live-view/live-view';
import Logo from '../components/logo/logo';
import Nav from '../components/navigation/nav';
import io from 'socket.io-client';


var socket= io()
class HomePage extends Component{
    state={
        count:""
    }

    componentDidMount(){
        socket.on("counter",data=>{
         console.log(data);
         this.setState({count:data})
        })
    }
    render(){
        return(
            <>
            <Head>
            <title>volcano</title>
                <link rel="stylesheet" href="https://candyfonts.com/wp-data/2018/10/26/11538/HELR45W.ttf"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
            </Head>
            <div className={styles.container}>
                
                <div className={styles.top}>
                <Label/>
                <LiveView count={this.state.count}/>
                </div>
                <div className={styles.nav}>
                <Nav/>
                </div>
                <div className={styles.bottom}>
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
    }
   
  
  export default HomePage
