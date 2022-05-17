import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const Home: NextPage = () => {
  const state = useSelector((state:RootState) => state.demo)
  return (
    <div className={styles.container}>
      <p>
        { state.state }
      </p>
    </div>
  )
}

export default Home
