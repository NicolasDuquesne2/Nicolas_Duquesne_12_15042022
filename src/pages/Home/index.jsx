import Footer from "../../componants/Footer"
import GraphBar from "../../componants/GraphBar"
import Hello from "../../componants/Hello"
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
                <GraphBar />
            </div>
        </div>
    )
}

export default Home