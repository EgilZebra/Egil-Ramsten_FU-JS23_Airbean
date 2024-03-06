import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cartpopup.scss'

const CartPopup = () => {
    const GoToPage: Function = useNavigate()
    const [navBtn, setNavBtn] = useState('=')
    const [toggle, setToggle] = useState(' hide');
    const showNav = () => {
        if (toggle == ' hide' && navBtn == '=') {
            setToggle('');  
            setNavBtn('X');
        } else {
            setToggle(' hide');
            setNavBtn('=');
        }
    }
    return (
        <nav className="cart--wrapper">
            <div>
                <button className='cart--button' onClick={showNav}>{navBtn}</button>
            </div>
            <div className={`cart--options-wrapper${toggle}`}>
                
            </div>
        </nav>
    )
} 

export default CartPopup