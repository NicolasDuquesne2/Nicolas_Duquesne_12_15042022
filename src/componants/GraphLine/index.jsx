import React from "react"
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import CustomAxisTick from "../CustomAxisTick";
import CustomCursor from "../CustomCursor";
import './graphline.scss'

const datas = [

    {
        name: "",
        value: "45",
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

const Cursor  = props => {
    console.log(props)
    const { points, width, height, stroke } = props
    const {x, y} = points[0]

    console.log(`${width}, ${height}, ${stroke}`)
    return <Rectangle fill="#000000" opacity="0.2" x={x} y={y-5} width={width + 10 - x} height={263} radius={8}/>;
};

function GraphLine() {
    return (
        <div className="graphline-wrapper">
            <h4 className="graphline-wrapper__title">Durée moyenne des sessions</h4>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={datas} >
                    <XAxis 
                        dataKey="name" 
                        tickLine={false} 
                        axisLine={false}
                        interval="preserveEnd"
                        tick={<CustomAxisTick dy={0} fill="#FFFF" textAnchor="middle"/>} minTickGap={-5}/>
                    <Tooltip 
                        cursor={<Cursor />}
                        active={false}
                    />
                    <Line type="monotone" dataKey="value" stroke="#FFFF" dot={false}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}


export default GraphLine