import React from "react"
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import CustomAxisTick from "../CustomAxisTick";
import CustomCursor from "../CustomCursor";
import CustomLineChartTooltip from "../CustomLineGraphTooltip"
import './graphline.scss'

const datas = [

    {
        name: "",
        value: "40",
        unit: "min"
    },

    {
        name: "L",
        value: "50",
        unit: "min"
    },

    {
        name: "M",
        value: "55",
        unit: "min"
    },

    {
        name: "M",
        value: "50",
        unit: "min"
    },

    {
        name: "J",
        value: "45",
        unit: "min"
    },

    {
        name: "V",
        value: "68",
        unit: "min"
    },

    {
        name: "S",
        value: "50",
        unit: "min"
    },

    {
        name: "D",
        value: "80",
        unit: "min"
    },
]



function GraphLine() {
    return (
        <div className="graphline-wrapper">
            <h4 className="graphline-wrapper__title">Durée moyenne des sessions</h4>
            <ResponsiveContainer width="100%" height="100%" >
                <LineChart data={datas} margin={{top: 100}}>
                    <XAxis 
                        dataKey="name" 
                        tickLine={false} 
                        axisLine={false}
                        interval="preserveEnd"
                        tick={<CustomAxisTick dy={0} fill="#FFFF" textAnchor="middle"/>} minTickGap={-5}/>
                    <Tooltip
                        content={<CustomLineChartTooltip />}
                        cursor={<CustomCursor />}
                    />
                    <Line type="monotone" dataKey="value" stroke="#FFFF" dot={false} activeDot={{ stroke: 'white', strokeOpacity: 0.2, strokeWidth: 10, r: 4 }}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}


export default GraphLine