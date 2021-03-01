import React from 'react';
import Head from 'next/head';
import styles from '../style/style.module.css';
import { useRouter } from 'next/router';
import VideoPage from '../components/video-bgd/video';
import Label from '../components/volcano-label/label';
import Time from '../components/time/time';
import LiveView from '../components/live-view/live-view';
import Logo from '../components/logo/logo';
import Nav from '../components/navigation/nav';

const Comment = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  return (
    <>
          <Head>
            <title>volcano</title>
                <link rel="stylesheet" href="https://candyfonts.com/wp-data/2018/10/26/11538/HELR45W.ttf"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
          </Head>
      <div className={styles.container}>
                
                <div className={styles.top}>
                <Label name={slug.join('/')}/>
                <LiveView/>
                </div>
                <div className={styles.nav}>
                <Nav/>
                </div>
                <div className={styles.bottom}>
                <Time tName={slug.join('/')}/>
                <Logo/>
                </div>
                <VideoPage/>
            </div>
        
    </>
  )
}

export default Comment
