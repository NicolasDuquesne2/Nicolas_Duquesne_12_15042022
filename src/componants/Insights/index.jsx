import Insight from "../Insight"
import './insights.scss'

function Insights( {data} ) {

    const entries = Object.entries(data)
    return(
        <div className="insights-wrapper">
            {entries.map((insight, index) => (
                <Insight 
                    key={`${insight[0]}-${index}`}
                    name ={insight[0]}
                    stats={`${insight[1]}`}
                />
            ))}
        </div>
    )
}

export default Insights