import Header from "../../components/Header/Header"
import Footer from "../../components/footer/Footer"

const AboutPage = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <h1>Vårt kaffe</h1>
                <p>text</p>
                <p>mindre text</p>
            </div>
            <div>
                <figure>
                    <img src="src/assets/images/EvaCortado.svg" alt="" />
                </figure>                    
                <h1>Eva Cortado</h1>
                <h1>VD & Grundare</h1>
            </div>
            <Footer />
        </>
    )
}

export default AboutPage 