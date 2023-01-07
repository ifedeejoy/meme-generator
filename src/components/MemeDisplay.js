import React from 'react';
import { saveAs } from 'file-saver';
import Styles from '../styles/MemeDisplay.module.css';
const MemeDisplay = (props) => {
    const downloadImage = (url) => {
        saveAs(url, Date.now() + ".png")
    }

    return (
        <div>
            <div className={Styles.memeDisplay}>
                {props.memeUrl.map((url, index) => {
                    return (
                        <div key={Math.random()} className={Styles.images}>
                            <img key={index} className={Styles.img} src={url.url} alt="AI Generated meme" />
                            <button key={Math.random()} className={Styles.btn} onClick={() => downloadImage(url.url)}>Download Image</button>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default MemeDisplay