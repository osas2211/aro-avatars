import type { NextPage } from 'next'
import { Head as AvatarHead } from '../components/Head/Head'
import { Neck } from '../components/neck'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/canvas.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Avatar } from '../components/Avatar'
import { Body } from '../components/Body'
import { Legs } from '../components/Leg'
import Options from '../components/Options/Options'
import { Hat } from '../components/Hat'
import { DownloadAndShare } from '../components/downloadAndShare'

const Home: NextPage = () => {
  // Tweaking of State is via css values
  
  const state = useSelector((state:RootState) => state.demo)
  return (
    <>
    <Head>
      <title>Aro Avatars</title>
    </Head>
      <header>
        <h2>Aro <span style={{color: "#FCDC4D"}}>Avatars</span></h2>
      </header>
      <div className='playground'>
        <div className={styles.canvas} id={"canvas"}>
            <Avatar>
              <Hat />
              <AvatarHead />
              <Neck />
              <Body />
              <Legs />
            </Avatar>
        </div>
        <Options />
        <DownloadAndShare />
      </div>
    </>
  )
}

export default Home
