import React, { useState } from 'react';
import { memeMaker } from '../libs/meme-generator';
import Styles from '../styles/MemeForm.module.css'
import MemeDisplay from './MemeDisplay';

const MemeForm = () => {
    const [userPrompt, setUserPrompt] = useState('')
    const [imageQuantity, setImageQuantity] = useState('')
    const [memeUrl, setMemeUrl] = useState('')
    const [loading, setLoading] = useState(false)

    const generateMeme = (userPrompt) => {
        memeMaker(userPrompt, imageQuantity).then((url) => {
            setMemeUrl(url)
            setLoading(false);
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        generateMeme(userPrompt)
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className={Styles.form}>
                <div className={Styles.inputGroup}>
                    <input className={Styles.inputField} value={userPrompt} onChange={(event) => setUserPrompt(event.target.value)} type="text" placeholder="Enter your prompt" />
                    <input type='number' className={`${Styles.inputField} ${Styles.quantityInput}`} value={imageQuantity} onChange={(event) => setImageQuantity(event.target.value)} placeholder="How many images do you want?" />
                </div>

                <button type='submit' className={Styles.btn}>Generate Meme</button>
            </form>
            {loading && <p>Generating meme...</p>}
            {memeUrl.length > 1 && <MemeDisplay memeUrl={memeUrl} />}
        </div>
    )
}

export default MemeForm;