import React from 'react';
import { saveAs } from 'file-saver';
import Styles from '../styles/MemeDisplay.module.css';
const MemeDisplay = (props) => {
    const downloadImage = () => {
        saveAs(props.memeUrl, Date.now() + ".png")
    }
    return (
        <div>
            {props.memeUrl &&
                <div className={Styles.memeDisplay}>
                    <img className={Styles.img} src={props.memeUrl || 'https://via.placeholder.com/512x512'} alt="AI Generated meme" />
                    <button className={Styles.btn} onClick={downloadImage}>Download Image</button>
                </div>
            }
        </div>
    )
}

export default MemeDisplay