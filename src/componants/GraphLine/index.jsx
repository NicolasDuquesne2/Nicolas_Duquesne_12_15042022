import React from "react"
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import CustomAxisTick from "../CustomAxisTick";
import './graphline.scss'

const datas = [
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
            <ResponsiveContainer width="100%" height="60%">
                <LineChart data={datas}>
                    <XAxis 
                        dataKey="name" 
                        tickLine={false} 
                        axisLine={false} 
                        tick={<CustomAxisTick dy={0} fill="#FFFF" textAnchor="middle"/>} minTickGap={-5}/>
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#FFFF" dot={false}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}


export default GraphLine