import React from 'react'
import styles from "../styles/btn.module.css"

export const DownloadAndShare = () => {
  return (
    <div className={styles.download_share}>
        <h3>Download and Share</h3>
        <div><button className={styles.button}>Download Avatar</button></div>
        <div><button className={styles.button}>Share Avatar</button></div>
    </div>
  )
}
