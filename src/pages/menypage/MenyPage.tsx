import Header from "../../components/Header/Header"
import { Coffee } from "../../components/coffeitem/Coffee"
import Footer from "../../components/footer/Footer"
import './menypage.scss'

const MenyPage = () => {
    return (
        <div className="menu--wrapper">
            <Header />
            <div className="menu--main-wrapper">
                <h1 className="menu--headline">Meny</h1>
                <Coffee />
            </div>
            <Footer />
        </div>
    )
}

export default MenyPage