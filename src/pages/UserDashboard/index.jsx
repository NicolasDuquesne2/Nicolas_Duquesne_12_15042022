import {useEffect, useState} from 'react'
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

function UserDashboard() {

    const { id } = useParams()

    const userData = useFetch(`http://localhost:3000/user/${id}`)
    const userActivity = useFetch(`http://localhost:3000/user/${id}/activity`)
    const userAvSession = useFetch(`http://localhost:3000/user/${id}/average-sessions`)
    const userPerformance = useFetch(`http://localhost:3000/user/${id}/performance`)

    
    if(userData.error || userActivity.error || userAvSession.error || userPerformance.error) {
        alert(`Erreur de chargement des datas : ${userData.error}`)
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
                                    rating = {userData.data.data.todayScore}
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}


export default UserDashboard


/* <div className="graphs-wrapper">
        <GraphBar 
            data = {[userActivity.data.data.sessions]}
        />
        <div className="mini-graphs-wrapper">
            <GraphLine 
                data = {[userAvSession.data.data.sessions]}
            />
            <GraphWeb 
                data = {userPerformance.data.data}
            />
            <GraphCircle />
        </div>
    </div> 

    <Insights 
                            rate = {userData.data.data.keyData}
                        />
 */