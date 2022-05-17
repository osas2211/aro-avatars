import React from 'react'
import styles from "../../styles/head_styles/head.module.css"
import { Ear } from './Ear'
import { Eye } from './Eye'
import { Hair } from './Hair'
import { Mouth } from './Mouth'
import { Nose } from './Nose'

export const Head = () => {
  return (
    <div className={`${styles.head} ${styles.hair}`}>
        <Ear />
        <Ear />
        <Eye />
        <Eye />
        <Nose />
        <Mouth />
    </div>
  )
}
