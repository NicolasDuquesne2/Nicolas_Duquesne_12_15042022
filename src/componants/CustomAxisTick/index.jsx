import {Text} from 'recharts'

function CustomAxisTick({x, y, dy, fill, textAnchor, payload}) {
    console.log(`${x} ${y}`)
    return (
        <g transform={`translate(${x + -10},${y})`}>
            <text x={0} y={0} dy={dy} textAnchor={textAnchor} fill={fill}>
            {payload.value}
            </text>
        </g>
    )
}

export default CustomAxisTick

