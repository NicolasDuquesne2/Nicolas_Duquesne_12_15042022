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
     * request is an object witch gives instructions for fetch datas
     * @param {{source: string, component: string}} obj request
     * @alias module:Home.users
     */
    const request = {source: "moke", component: "Dashboard", id: id}

     /**
     * fetchDatas is an array witch takes all fetches
     * @type {Array|Object}
     * @alias module:Home.users
     */
    const fetchDatas = useDataProvider(request)
    
    if(fetchDatas?.error === true) {
        return (
            <Error  code= "500"/>
        )
    }


    if(typeof(fetchDatas) != "undefined") {

        let userData = fetchDatas[0]
        let userActivity = fetchDatas[1]
        let userAvSession = fetchDatas[2]
        let userPerformance = fetchDatas[3]

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


export default React.memo(UserDashboard)


