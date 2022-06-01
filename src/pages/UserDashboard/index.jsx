//@ts-check

import React from 'react'
import { useParams } from 'react-router-dom'
import { useDataProvider } from '../../utils/DataProvider'
import Footer from "../../componants/Footer"
import GraphBar from "../../componants/GraphBar"
import Hello from "../../componants/Hello"
import Insights from "../../componants/Insights"
import GraphLine from "../../componants/GraphLine"
import GraphWeb from "../../componants/GraphWeb"
import './dashboard.scss'
import GraphCircle from "../../componants/GraphCircle"
import Error from '../Error'

/**
 * 
 * @module UserDashborad
 */


/**
 * UserDashborad function renders UserDashborad page
 * @returns {React.ReactComponentElement}
 */
function UserDashboard() {

    const { id } = useParams()

    /**
     * userData
     * @type {Object}
     * @alias module:UserDashborad.usersData
     */
    //const userData = useFetch(`http://localhost:3000/user/${id}`)
    /**
     * userActivity
     * @type {Object}
     * @alias module:UserDashborad.userActivity
     */
    //const userActivity = useFetch(`http://localhost:3000/user/${id}/activity`)
    /**
     * userAvSession
     * @type {Object}
     * @alias module:UserDashborad.userAvSession
     */
    //const userAvSession = useFetch(`http://localhost:3000/user/${id}/average-sessions`)
    /**
     * userPerformance
     * @type {Object}
     * @alias module:UserDashborad.userPerformance
     */
    //const userPerformance = useFetch(`http://localhost:3000/user/${id}/performance`)

    const fetchDatas = useDataProvider({source: "api", component: "Dashboard", id: id})
   
    if(fetchDatas?.error === true) {
        return (
            <Error  code= "500"/>
        )
    }

    if(typeof(fetchDatas) != "undefined") {
        const userData = fetchDatas[0]
        const userActivity = fetchDatas[1]
        const userAvSession = fetchDatas[2]
        const userPerformance = fetchDatas[3]

        return (
            <div className="wrapper">
                <Footer />
                <div className="dashboard">
                    <Hello 
                        name = {userData.userInfos.firstName}
                        sentence='Félicitations ! vous avez explosé vos objectifs hier'
                    />
                    <div className="dashboard__dashboard-wrapper">
                        <div className="graphs-wrapper">
                            <GraphBar 
                                data = {userActivity.sessions}
                            />
                            <div className="mini-graphs-wrapper">
                                <GraphLine 
                                    data = {userAvSession.sessions}
                                />
                                <GraphWeb 
                                    data = {userPerformance}
                                />
                                <GraphCircle 
                                    rating = {userData}
                                />
                            </div>
                        </div>
                        < Insights data = {userData.keyData}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default UserDashboard


