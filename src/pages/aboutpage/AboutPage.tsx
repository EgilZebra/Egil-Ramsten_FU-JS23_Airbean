import Header from "../../components/Header/Header"
import Footer from "../../components/footer/Footer"
import { aboutlead, aboutTextOne, aboutTextTwo } from "../../assets/data/aboutText"
import './aboutpage.scss'

const AboutPage = () => {
    return (
        <div className="about--wrapper">
            <Header />
            <div className="about--text-wrapper">
                <h1 className="about--headline">Vårt kaffe</h1>
                <p className="about--lead">{aboutlead}</p>
                <p className="about--text">{aboutTextOne}</p>
                <p className="about--text">{aboutTextTwo}</p>
            </div>
            <div className="about--byline">
                <figure className="about--image">
                    <img src="src/assets/images/EvaCortado.svg" alt="" />
                </figure>                    
                <h1 className="about--name">Eva Cortado</h1>
                <h1 className="about--title">VD & Grundare</h1>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage 