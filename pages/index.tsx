import type { NextPage } from 'next'
import { Head } from '../components/Head/Head'
import { Neck } from '../components/neck'
import Image from 'next/image'
import styles from '../styles/canvas.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Avatar } from '../components/Avatar'
import { Body } from '../components/Body'
import { Legs } from '../components/Leg'

const Home: NextPage = () => {
  const state = useSelector((state:RootState) => state.demo)
  return (
    <div className={styles.canvas}>
        <Avatar>
          <Head />
          <Neck />
          <Body />
          <Legs />
        </Avatar>
    </div>
  )
}

export default Home
