
function CustomAxisTick({x, y, dy, fill, textAnchor, payload}) {
    return (
        <g transform={`translate(${x + -15},${y})`}>
            <text x={0} y={0} dy={dy} textAnchor={textAnchor} fill={fill}>
            {payload.value}
            </text>
        </g>
    )
}

export default CustomAxisTick

