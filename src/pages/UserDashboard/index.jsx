//@ts-check

import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/fetch'
import Footer from "../../componants/Footer"
import GraphBar from "../../componants/GraphBar"
import Hello from "../../componants/Hello"
import Insights from "../../componants/Insights"
import GraphLine from "../../componants/GraphLine"
import GraphWeb from "../../componants/GraphWeb"
import './dashboard.scss'
import GraphCircle from "../../componants/GraphCircle"
import React from 'react'

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
    const userData = useFetch(`http://localhost:3000/user/${id}`)
    /**
     * userActivity
     * @type {Object}
     * @alias module:UserDashborad.userActivity
     */
    const userActivity = useFetch(`http://localhost:3000/user/${id}/activity`)
    /**
     * userAvSession
     * @type {Object}
     * @alias module:UserDashborad.userAvSession
     */
    const userAvSession = useFetch(`http://localhost:3000/user/${id}/average-sessions`)
    /**
     * userPerformance
     * @type {Object}
     * @alias module:UserDashborad.userPerformance
     */
    const userPerformance = useFetch(`http://localhost:3000/user/${id}/performance`)

    
    if(userData.error || userActivity.error || userAvSession.error || userPerformance.error) {
        alert(`Error data loading : ${userData.error}`)
    }

    if(!userData.isLoading && !userActivity.isLoading && !userAvSession.isLoading && !userPerformance.isLoading) {
        return (
            <div className="wrapper">
                <Footer />
                <div className="dashboard">
                    <Hello 
                        name = {userData.data.data.userInfos.firstName}
                        sentence='Félicitations ! vous avez explosé vos objectifs hier'
                    />
                    <div className="dashboard__dashboard-wrapper">
                        <div className="graphs-wrapper">
                            <GraphBar 
                                data = {userActivity.data.data.sessions}
                            />
                            <div className="mini-graphs-wrapper">
                                <GraphLine 
                                    data = {userAvSession.data.data.sessions}
                                />
                                <GraphWeb 
                                    data = {userPerformance.data.data}
                                />
                                <GraphCircle 
                                    rating = {userData.data.data}
                                />
                            </div>
                        </div>
                        < Insights data = {userData.data.data.keyData}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default UserDashboard


