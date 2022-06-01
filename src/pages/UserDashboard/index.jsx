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
     * usersDatas is an array witch takes all fetches
     * @type {Array|Object}
     * @alias module:Home.users
     */
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
                        name = {userData.data.userInfos.firstName}
                        sentence='Félicitations ! vous avez explosé vos objectifs hier'
                    />
                    <div className="dashboard__dashboard-wrapper">
                        <div className="graphs-wrapper">
                            <GraphBar 
                                data = {userActivity.data.sessions}
                            />
                            <div className="mini-graphs-wrapper">
                                <GraphLine 
                                    data = {userAvSession.data.sessions}
                                />
                                <GraphWeb 
                                    data = {userPerformance.data}
                                />
                                <GraphCircle 
                                    rating = {userData.data}
                                />
                            </div>
                        </div>
                        < Insights data = {userData.data.keyData}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default UserDashboard


