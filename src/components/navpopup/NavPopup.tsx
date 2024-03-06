import { useNavigate } from 'react-router-dom'
import './navpopup.scss'
import { useState } from 'react'

const Navpopup = () => {
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
        <nav className="nav--wrapper">
            <div>
                <button className='nav--button' onClick={showNav}>{navBtn}</button>
            </div>
            <div className={`nav--options-wrapper${toggle}`}>
                <h1 className='nav--headline' onClick={(() => GoToPage('/menu'))}>Meny</h1>
                <figure className="nav--line"></figure>
                <h1 className='nav--headline' onClick={(() => GoToPage('/about'))}>Vårt kaffe</h1>
                <figure className="nav--line" ></figure>
                <h1 className='nav--headline' onClick={(() => GoToPage('/profile'))}>Min profil</h1>
                <figure className="nav--line"></figure>
                <h1 className='nav--headline' onClick={(() => GoToPage('/orderstatus'))}>Orderstatus</h1>
            </div>
        </nav>
    )
} 

export default Navpopup