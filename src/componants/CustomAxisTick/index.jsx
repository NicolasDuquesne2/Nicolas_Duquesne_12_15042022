
//@ts-check

import React from "react"

/**
 * 
 * @module CustomAxisTick
 */


/**
 * CustomAxisTick returns a custom axis tick for Recharts
 * @param {Object} props
 * @param {number} props.x
 * @param {number} props.y
 * @param {number} props.dy
 * @param {string} props.fill
 * @param {string} props.textAnchor
 * @param {Object} props.payload
 * @returns {React.ReactComponentElement}
 */
function CustomAxisTick({x, y, dy, fill, textAnchor, payload}) {
    return (
        <g transform={`translate(${x - 15},${y})`}>
            <text x={0} y={0} dy={dy} textAnchor={textAnchor} fill={fill}>
            {payload.value}
            </text>
        </g>
    )
}

export default CustomAxisTick

