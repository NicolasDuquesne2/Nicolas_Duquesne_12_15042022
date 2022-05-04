import React from "react"


function CustomLabel({viewBox, custom}) {

    const {cx, cy} = viewBox

    return (
        <text x={cx} y={cy} textAnchor="middle">
            <tspan x={cx} dy="-15" fontWeight={custom.span1.fontWeight} fontSize={custom.span1.fontSize}>{custom.span1.value}</tspan>
            <tspan x={cx} dy="30" fontSize={custom.span2.fontSize} fill={custom.span2.fill}>{custom.span2.value}</tspan>
            <tspan x={cx} dy="30" fontSize={custom.span3.fontSize} fill={custom.span3.fill}>{custom.span3.value}</tspan>
        </text>
    )
}

export default React.memo(CustomLabel)