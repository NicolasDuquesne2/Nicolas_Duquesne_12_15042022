//@ts-check

import './tooltip.scss'

/**
 * 
 * @module CustomBarChartTooltip
 */


/**
 * CustomBarChartTooltip returns a custom bar chart tooltip for Recharts
 * @returns {Object}
 */

function CustomBarChartTooltip({active, payload}) {
    if (active) {
        return (
            <div className="barchart-tooltip">
                <p>{`${payload[0].value}Kg`}</p>
                <p>{`${payload[1].value}Kcal`}</p>
            </div>
        )
    } else {
        return null
    }
}

export default CustomBarChartTooltip

