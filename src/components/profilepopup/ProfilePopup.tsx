import { useState } from 'react'
import './profilepopup.scss'
import { CreateUser } from '../../functions/CreateUser'
import { useCurrentUser } from '../../assets/data/States';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../../functions/LoginUser';
import { user } from '../../assets/data/Types';

const ProfilePopup = () => {

    const [userName, setUserName] = useState('')
    const [userMail, setUserMail] = useState('')
    const setCurrentUser = useCurrentUser((state) => state.setCurrentUser)
    const GoToPage = useNavigate()
    const [toggleValues, setToggleValues] = useState(['','hide'])

    const sendUser = async() => {
        const login: user = {'username': userName, 'password': userMail}
        const createRes = await CreateUser(login)
        if (createRes.success) {
            const loginRes = await LoginUser(login)
            if (loginRes.success) {
                setCurrentUser(login)
                sessionStorage.setItem('userToken', loginRes.token)
                GoToPage('/menu')
            } else {
                alert(loginRes.message)
            }
        } else {
            alert(createRes.message)
        }
    }
    const loginUser = async() => {
        const login = {'username': userName, 'password': userMail};
        const loginRes = await LoginUser(login);
        if (loginRes.success) {
            setCurrentUser(login)
            sessionStorage.setItem('userToken', loginRes.token)
            GoToPage('/menu') 
        } else {
            alert('omöjligt att logga in med användaren')
        }
    }

    const Toggle = () => {
        setToggleValues(['hide', ''])
    }

    const GuestLogin = () => {
        setCurrentUser({username: 'Gäst', password: ''})
        GoToPage('/menu')
    }

    return (
        <div className='signin--background'>
            <div className={`signin--wrapper ${toggleValues[1]}`}>
                <div className='signin--top-wrapper'>
                    <figure className='signin--image'>
                        <img src="src/assets/images/AirbeanLogoSmall.svg" alt="Airbean logo" />
                    </figure>
                    <h1 className='signin--headline'>Välkommen till AirBean-familjen!</h1>
                    <h1 className='signin--lead'>Genom att skapa ett konto nedanför kan du spara och se din historik.</h1>
                </div>
                <div className='signin--bottom-wrapper'>
                <div className='signin--name-wrapper'>
                    <p className='signin--name-headline'>Namn</p>
                    <input 
                    className='signin--name-form' 
                    type='text'
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    />
                </div>
                <div className='signin--mail-wrapper'>
                    <p className='signin--mail-headline'>Epost</p>
                    <input 
                    className='signin--mail-form' 
                    type='text'
                    value={userMail}
                    onChange={e => setUserMail(e.target.value)}
                    />
                </div>
                <p className='signin--check'><input type='radio'/> GDPR ok!</p>
                </div>
                <div className='signin--btn-wrapper'>
                    <button onClick={sendUser} className='signin--btn-login'>Create!</button>
                    <button onClick={loginUser} className='signin--btn-login'>Log in!</button>
                </div>
            </div>
            <div className={`signin--wrapper ${toggleValues[0]}`}>
                <div className='signin--top-wrapper'>
                    <figure className='signin--image'>
                        <img src="src/assets/images/AirbeanLogoSmall.svg" alt="Airbean logo" />
                    </figure>
                    <h1 className='signin--headline'>Välkommen!!</h1>
                    <h1 className='signin--lead'>Vill du fortsätta som gäst eller logga in?</h1>
                </div>
                <div className='signin--btn-wrapper'>
                    <button onClick={GuestLogin} className='signin--btn-choose'>Gäst!</button>
                    <button onClick={Toggle} className='signin--btn-choose'>Log in!</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePopup