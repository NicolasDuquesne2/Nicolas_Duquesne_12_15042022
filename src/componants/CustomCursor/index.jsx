//@ts-check

import React from "react"
import { Rectangle } from "recharts"

/**
 * 
 * @module CustomCursor
 */


/**
 * CustomCursor returns a custom cursor for Recharts
 * @param {Object} props
 * @param {Array} props.points
 * @param {number} props.width
 * @returns {React.ReactComponentElement}
 */

function CustomCursor({points, width}) {
    const {x, y} = points[0]
    return <Rectangle fill="#000000" opacity="0.2" x={x} y={y - 100} width={width + 10 - x} height={263} radius={8}/>
} 

export default CustomCursor