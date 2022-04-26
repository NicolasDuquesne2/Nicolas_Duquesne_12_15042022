import Footer from "../../componants/Footer"
import GraphBar from "../../componants/GraphBar"
import Hello from "../../componants/Hello"
import Insights from "../../componants/Insights"
import './home.scss'

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
                    <GraphBar />
                    <Insights />
                </div>
            </div>
        </div>
    )
}

export default Home