//@ts-check

import React from "react"
import Insight from "../Insight"
import './insights.scss'


/**
 * 
 * @module Insights
 */


/**
 * Insights renders all insights on the user dashboard
 * @param {Object} props
 * @param {Object} props.data
 * @returns {React.ReactComponentElement}
 */
function Insights( {data} ) {
    /**
     * an entries object casted in array for loop work
     * @type {Array} entries
     */
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