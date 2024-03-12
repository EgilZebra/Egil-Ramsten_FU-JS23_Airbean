import { useNavigate } from 'react-router-dom'
import './landingpage.scss'

const  LandingPage = () => {

    const GoToPage = useNavigate();
    

    return (
        <> 
            <div className="landingpage--wrapper">
                <figure className='landingpage--leaf landingpage--leaf-left'></figure>
                <figure className='landingpage--leaf landingpage--leaf-right'></figure>
                <figure onClick={() => GoToPage('/menu')} className="landingpage--figure">
                    <img className="landingpage--img" src='src/assets/images/AirbeanLogo.svg' alt="Airebean Logo" />
                </figure>
                <h1 className="landingpage--headline">AIR BEAN</h1>
                <h2 className="landingpage--sub-headline">DRONEDELIVERED COFFEE</h2>
            </div>
        </>
    )
}

export default LandingPage