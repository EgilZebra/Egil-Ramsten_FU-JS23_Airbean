import { useNavigate } from 'react-router-dom'
import './navpopup.scss'
import { useState } from 'react'

const Navpopup = () => {
    const GoToPage: Function = useNavigate()
    const [navState, setNavState] = useState({btnIcon: '=', navtoggle: ' hide', btnActive: '' });
    const showNav = () => {
        if (navState.btnIcon == '=' ) {
            setNavState({btnIcon: 'X', navtoggle: '', btnActive: ' btn-active' })
        } else {
            setNavState({btnIcon: '=', navtoggle: ' hide', btnActive: '' })
        }
    }
    return (
        <nav className="nav--wrapper">
            <div>
                <button className={`nav--button${navState.btnActive}`} onClick={showNav}>{navState.btnIcon}</button>
            </div>
            <div className={`nav--options-wrapper${navState.navtoggle}`}>
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