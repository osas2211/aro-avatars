import React from 'react'
import styles from "../styles/leg.module.css"

export const Legs = () => {
  return (
    <>
      <div className={styles.belt}></div>
      <div className={styles.trouser}></div>
      <div className={styles.trouser}></div>
      <div className={styles.leg}>
        <div className={styles.shoe}></div>
      </div>
      <div className={styles.leg}>
        <div className={styles.shoe}></div>
      </div>
    </>
  )
}
