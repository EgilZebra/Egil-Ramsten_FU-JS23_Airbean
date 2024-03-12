import Header from "../../components/Header/Header"
import { OrderHistory } from "../../components/orderhistory/OrderHistory"
import './profilepage.scss'

const ProfilePage = () => {
    return (
        <div className="profile--wrapper">
            <Header />
            <div className="profile--wrapper-top">
                <figure className="profile--image">
                    <img src="src/assets/images/ProfileIcon.svg" alt="" />
                </figure>
                <h1 className="profile--name">Namn Namnsson</h1>
                <p className="profile--mail">namn.namnsson@e-post.se</p>
            </div>
            <div className="profile--history">
                <OrderHistory />
            </div>
        </div>
    )
}

export default ProfilePage