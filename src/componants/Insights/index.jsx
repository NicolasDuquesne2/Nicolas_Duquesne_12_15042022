//@ts-check

import Insight from "../Insight"
import './insights.scss'


/**
 * 
 * @module Insights
 */


/**
 * Insights renders all insights on the user dashboard
 * @returns {Object}
 */
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