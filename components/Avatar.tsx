import React, { ReactNode } from 'react'
import styles from "../styles/avatar.module.css"

export const Avatar: React.FC<{ children:ReactNode }> = ({ children }) => {
  return (
    <div className={styles.avatar}>
        { children }
    </div>
  )
}
