import React, { Component } from 'react';
import Head from 'next/head';
import styles from '../style/style.module.css';
import VideoPage from '../components/Home/video-bgd/video';
import Label from '../components/Home/volcano-label/label';
import Time from '../components/Home/time/time';
import LiveView from '../components/Home/live-view/live-view';
import Logo from '../components/Home/logo/logo';
import Nav from '../components/Home/navigation/nav';
import Form from '../components/Home/form/form';
import io from 'socket.io-client';



class Home extends Component {

  constructor(props){

        super(props);

        this.state = {
          count: "",
          click: false,
          city: ""
        }
        
    }


  componentDidMount() {

    //url parse to assign city name to pages
    var root = window.document.location.href
    var urls = root.substring(root.lastIndexOf('/') + 1)
    this.setState({ city: urls })
    //socket connection client side
    var socket = io()

    socket.emit("room", (window.document.location.href))

    socket.on("livecount", (value) => {
      this.setState({ count: value })
    })
  }
  clickHandler = () => {
    this.setState({ click: true })
  }

  render() {

    return (

      <>
        <Head>
          <title>volcano</title>
          <link rel="stylesheet" href="https://candyfonts.com/wp-data/2018/10/26/11538/HELR45W.ttf" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
        </Head>

        <div className={styles.container}>


          <div className={styles.top}>
            <Label name={this.state.city} />
            <LiveView count={this.state.count} />
          </div>

        <div className={styles.middle}>
          <div className={styles.form}>
            {this.state.click ? <Form /> : null}
          </div>

          <div className={styles.nav} onClick={this.clickHandler}>
            <Nav />
          </div>
        </div>

        <div className={styles.bottom}>

          <div className={styles.time}>
            <Time tName={this.state.city} />
           </div>

          <div className={styles.logo}>
            <Logo />
          </div>
          
        </div>

        <div className={styles.video}>
          <VideoPage value={this.state.city} />
        </div>
        </div>

      </>
    )
  }
}



export default Home