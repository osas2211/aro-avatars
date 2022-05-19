import React, { useRef, MutableRefObject } from 'react'
import styles from "../styles/btn.module.css"
import domtoimage from "dom-to-image";

export const DownloadAndShare = () => {
    const downloadBtn:MutableRefObject<HTMLButtonElement | any> = useRef()

    const onDownload = ()=>{
    let node: any = document.querySelector('#canvas');
    domtoimage.toPng(node)
        .then(function (dataUrl) {
            let anchor = document.createElement("a");
            
            // created temporary anchor tag for download.
            anchor.setAttribute("href", dataUrl);
            anchor.setAttribute("download", "aro-avatar.png")
            anchor.click()
            anchor.remove()
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
    }
  return (
    <div className={styles.download_share}>
        <h3>Download and Share</h3>
        <div><button className={styles.button} ref={downloadBtn} onClick={onDownload}>Download Avatar</button></div>
        <div><button className={styles.button} disabled>Share(disabled)</button></div>
    </div>
  )
}
