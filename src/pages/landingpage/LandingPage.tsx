import './landingpage.scss'
import ProfilePopup from '../../components/profilepopup/ProfilePopup';
import { useState } from 'react';

const  LandingPage = () => {
    const [toggle, setToggle] = useState(['hidden', '0'])

    const toggleLogin = () => {
        setToggle(['', '3'])
    }
    
    return (
        <> 
            <div className="landingpage--wrapper">
                <div style={{zIndex: toggle[1]}} className={`landingpage--login ${toggle[0]}`}>
                    <ProfilePopup />
                </div>
                <figure className='landingpage--leaf landingpage--leaf-left'></figure>
                <figure className='landingpage--leaf landingpage--leaf-right'></figure>
                <figure onClick={toggleLogin} className="landingpage--figure">
                    <img className="landingpage--img" src='src/assets/images/AirbeanLogo.svg' alt="Airebean Logo" />
                </figure>
                <h1 className="landingpage--headline">AIR BEAN</h1>
                <h2 className="landingpage--sub-headline">DRONEDELIVERED COFFEE</h2>
            </div>
        </>
    )
}

export default LandingPage