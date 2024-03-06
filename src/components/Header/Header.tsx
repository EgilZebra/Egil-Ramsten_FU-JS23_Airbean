import CartPopup from '../cartpopup/CartPopup'
import Navpopup from '../navpopup/NavPopup'
import './header.scss'

const Header = () => {
    return (
           <div className="header--wrapper">
                <figure className="header--img"></figure>
                <Navpopup />
                <CartPopup />
            </div>
    )
}

export default Header