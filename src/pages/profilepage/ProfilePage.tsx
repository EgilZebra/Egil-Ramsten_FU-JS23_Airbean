import Header from "../../components/Header/Header"

const ProfilePage = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <figure>
                    <img src="src/assets/images/ProfileIcon.svg" alt="" />
                </figure>
                <h1>namn namnsson</h1>
                <p>namn.namnsson@e-post.se</p>
            </div>
            <div>
                <p>Orderhistoryik</p>
            </div>
        </>
    )
}

export default ProfilePage