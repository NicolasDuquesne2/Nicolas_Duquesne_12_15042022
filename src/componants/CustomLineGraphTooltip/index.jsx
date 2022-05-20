//@ts-check

import React from 'react'
import './tooltip.scss'

/**
 * 
 * @module CustomLineChartTooltip
 */


/**
 * CustomLineChartTooltip returns a custom line chart tooltip for Recharts
 * 
 * @param {Object} props
 * @param {boolean} props.active
 * @param {boolean} props.payload
 * @returns {React.ReactComponentElement}
 */
function CustomLineChartTooltip({active, payload}) {
    if (active) {
        return (
            <div className="linechart-tooltip">
                <p>{`${payload[0].value} min`}</p>
            </div>
        )
    } else {
        return null
    }
}

export default CustomLineChartTooltip