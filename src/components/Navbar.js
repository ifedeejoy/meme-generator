import Styles from '../styles/Navbar.module.css'
import Logo from '../images/TrollFace.png'
const Navbar = () => {
    return (
        <div className={Styles.navbar}>
            <div className={Styles.logoSection}>
                <img src={Logo} alt='troll face'></img>
                <h1>DALL-E Meme Generator</h1>
            </div>
            <h4>React Course - Project 3</h4>
        </div>
    )
}

export default Navbar