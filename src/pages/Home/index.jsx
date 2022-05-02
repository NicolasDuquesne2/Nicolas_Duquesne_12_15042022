import Footer from "../../componants/Footer"
import GraphBar from "../../componants/GraphBar"
import Hello from "../../componants/Hello"
import Insights from "../../componants/Insights"
import GraphLine from "../../componants/GraphLine"
import GraphWeb from "../../componants/GraphWeb"
import './home.scss'
import GraphCircle from "../../componants/GraphCircle"

function Home() {
    return (
        <div className="wrapper">
            <Footer />
            <div className="home">
                <Hello 
                    name='Thomas'
                    sentence='Félicitaions ! vous avez explosé vos objectifs hier'
                />
                <div className="home__dashboard-wrapper">
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

export default Home