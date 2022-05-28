//@ts-check

import React from "react"
import { Link } from "react-router-dom"
import { useFetch } from '../../utils/fetch'
import Footer from "../../componants/Footer"
import { useDataProvider } from '../../utils/DataProvider'
import './home.scss'
import Error from "../Error"

/**
 * 
 * @module Home
 */


/**
 * Home function renders Home page
 * @returns {React.ReactComponentElement}
 */
function Home() {


    /**
     * users is an array witch takes all fetches
     * @type {Array}
     * @alias module:Home.users
     */
    let users = []

    /**
     * usersDatas get fetch datas if nor error nor loading are catch during the fetch action
     * @type {Array}
     * @alias module:Home.usersDatas
     */
    let usersDatas = []
    let errors = []

    users.push(useFetch("http://localhost:3000/user/12"))
    users.push(useFetch("http://localhost:3000/user/18"))
    
    /*
    const alpha = useDataProvider({source: "api", component: "Home"})

    if (typeof(alpha) != 'undefined') {
        console.log("module Home")
        console.log(alpha)
    }*/

    users.forEach((user) => {
        if (user.error.status) {
            errors.push(user.error)
        }

        if (!user.isLoading) {
            usersDatas.push(user.data)
        }
    })

    if (errors.find(err => err.status === true))
    {

        return (
            <Error  code= "500"/>
        )
    }



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