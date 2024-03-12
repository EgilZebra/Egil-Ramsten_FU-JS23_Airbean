import './profilepopup.scss'

const ProfilePopup = () => {
    return (
        <div className='signin--wrapper'>
            <figure className='signin--image'>
                <img src="src/assets/images/AirbeanLogoSmall.svg" alt="Airbean logo" />
            </figure>
            <h1 className='signin--headline'>Välkommen till AirBean-familjen!</h1>
            <h1 className='signin--lead'>Genom att skapa ett konto nedanför kan du spara och se din historik.</h1>
            <div className='signin--name-wrapper'>
                <p className='signin--name-headline'>Namn</p>
                <form className='signin--name-form' action=""></form>
            </div>
            <div className='signin--mail-wrapper'>
                <p className='signin--mail-headline'>Epost</p>
                <form className='signin--mail-form' action=""></form>
            </div>
            <p>GDPR checkbox</p>
            <button className='signin--btn'>Brew me a cup!</button>
        </div>
    )
}

export default ProfilePopup