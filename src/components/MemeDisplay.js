import React from 'react';
import Styles from '../styles/MemeDisplay.module.css';
const MemeDisplay = (props) => {
    return (
        <div>
            {props.memeUrl &&
                <div className={Styles.memeDisplay}>
                    <img className={Styles.img} src={props.memeUrl || 'https://via.placeholder.com/512x512'} alt="AI Generated meme" />
                </div>
            }
        </div>
    )
}

export default MemeDisplay