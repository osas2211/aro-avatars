import type { NextPage } from 'next'
import { Head } from '../components/Head/Head'
import { Neck } from '../components/neck'
import Image from 'next/image'
import styles from '../styles/canvas.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Body } from '../components/Body'

const Home: NextPage = () => {
  const state = useSelector((state:RootState) => state.demo)
  return (
    <div className={styles.canvas}>
        <Body>
          <Head />
          <Neck />
        </Body>
    </div>
  )
}

export default Home
