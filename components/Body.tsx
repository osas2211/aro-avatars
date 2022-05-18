import React from 'react'
import styles from "../styles/body.module.css"

export const Body = () => {
  return (
    <>
        <div className={styles.body}>
            <div className={styles.shoulder}></div>
            <div className={styles.shoulder}></div>
            <div className={styles.muscle}></div>
            <div className={styles.muscle}></div>
            <div className={styles.arm}></div>
            <div className={styles.arm}></div>
            <div className={styles.fingers}></div>
            <div className={styles.fingers}></div>
        </div>
    </>
  )
}
