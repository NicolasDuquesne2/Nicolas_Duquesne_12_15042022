import { Link } from "react-router-dom"
import { useFetch } from '../../utils/fetch'
import Footer from "../../componants/Footer"
import './home.scss'

function Home() {

    let users = []
    let usersDatas = []

    users.push(useFetch("http://localhost:3000/user/12"))
    users.push(useFetch("http://localhost:3000/user/18"))

    users.forEach((user) => {
        if (user.error) {
            alert('Erreur de chargement de données')
        }

        if ( ! user.isLoading) {
            usersDatas.push(user.data)
        }
    })

    return (
        <div className="wrapper">
            <Footer />
            <div className="home">
                <ul className="home__links">
                    {usersDatas.map((userData, index) => (
                        <Link
                            key={`link-${index}`} 
                            to={`/user/${userData.data.id}`} 
                        >{`${userData.data.userInfos.firstName} ${userData.data.userInfos.lastName}`}</Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Home