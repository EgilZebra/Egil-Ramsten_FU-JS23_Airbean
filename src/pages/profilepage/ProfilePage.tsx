import Header from "../../components/Header/Header"
import { OrderHistory } from "../../components/orderhistory/OrderHistory"
import './profilepage.scss'
import { useCurrentUser } from "../../assets/data/States";
import { user } from "../../assets/data/Types";

const ProfilePage = () => {
    const user: user = useCurrentUser((state) => state)
    return (
        <div className="profile--wrapper">
            <Header />
            <div className="profile--content-wrapper">
                <div className="profile--wrapper-top">
                    <figure className="profile--image">
                        <img src="src/assets/images/ProfileIcon.svg" alt="" />
                    </figure>
                    <h1 className="profile--name">{user.username ? user.username : 'Gäst'}</h1>
                    <p className="profile--mail">{user.password ? user.password : ''}</p>
                </div>
                <div className="profile--history">
                    <OrderHistory />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage