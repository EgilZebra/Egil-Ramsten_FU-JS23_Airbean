import { useNavigate, useRouteError } from "react-router-dom"
import Header from "../../components/Header/Header"
import Footer from "../../components/footer/Footer"
import './errorpage.scss'

const ErrorPage = () => {

    const error: any = useRouteError();
    const GoToPage = useNavigate();
    console.log(error);

    return (
        <div className="error--wrapper">
            <Header />
            <div className="error--top">
                <h1 className="error--headline">Error!</h1>
                <div className="error--status-wrapper">
                    <h1 className="error--status">- {error.status} -</h1>
                    <h1 className="error--status-text">{error.statusText}</h1>
                </div>
            </div>
            <div className="error--bottom">
                <p className="error--text">Det ser ut som vi har stött på ett litet problem.</p>
                <p className="error--text">Vill du ta dig tillbaka till hemsidan?</p>
                <button className="error--home-btn" onClick={() => GoToPage('/')}>Ta mig hem!</button>
            </div>
            <Footer />
        </div>
    )
}

export default ErrorPage