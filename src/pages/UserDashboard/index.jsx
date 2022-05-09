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
    const { data, isLoading, error } = useFetch(`http://localhost:3000/user/${id}`)

    if(error) {
        alert(`Erreur de chargement des datas : ${error}`)
    }

    return (
        <div className="wrapper">
            <Footer />
            <div className="dashboard">
                <Hello 
                    name='Thomas'
                    sentence='Félicitaions ! vous avez explosé vos objectifs hier'
                />
                <div className="dashboard__dashboard-wrapper">
                    <div className="graphs-wrapper">
                        <GraphBar />
                        <div className="mini-graphs-wrapper">
                            <GraphLine />
                            <GraphWeb />
                            <GraphCircle />
                        </div>
                    </div>
                    <Insights />
                </div>
            </div>
        </div>
    )
}


export default UserDashboard