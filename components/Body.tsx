import React, { ReactNode } from 'react'
import styles from "../styles/body.module.css"

export const Body: React.FC<{ children:ReactNode }> = ({ children }) => {
  return (
    <div className={styles.body}>
        { children }
    </div>
  )
}
