//@ts-check

import React from "react"
import { Link } from "react-router-dom"
import Footer from "../../componants/Footer"
import Error from "../Error"
import { useDataProvider } from '../../utils/DataProvider'
import './home.scss'

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
     * usersDatas is an array witch takes all fetches
     * @type {Array|Object}
     * @alias module:Home.users
     */
    const usersDatas = useDataProvider({source: "moke", component: "Home"})

    if(usersDatas?.error === true) {
        return (
            <Error  code= "500"/>
        )
    }
    
    if (typeof(usersDatas) != "undefined") {
        

        return (
            <div className="wrapper">
                <Footer />
                <div className="home">
                    <ul className="home__links">
                        {usersDatas.map((userData, index) => (
                            <Link
                                key={`link-${index}`} 
                                to={`/user/${userData.id}`} 
                            >{`${userData.userInfos.firstName} ${userData.userInfos.lastName}`}</Link>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default React.memo(Home)