import React from "react"
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import CustomAxisTick from "../CustomAxisTick";
import CustomCursor from "../CustomCursor";
import CustomLineChartTooltip from "../CustomLineGraphTooltip"
import './graphline.scss'

function GraphLine(data) {
    return (
        <div className="graphline-wrapper">
            <h4 className="graphline-wrapper__title">Durée moyenne des sessions</h4>
            <ResponsiveContainer width="100%" height="100%" >
                <LineChart data={data} margin={{top: 100}}>
                    <XAxis 
                        dataKey="day" 
                        tickLine={false} 
                        axisLine={false}
                        interval="preserveEnd"
                        tick={<CustomAxisTick dy={0} fill="#FFFF" textAnchor="middle"/>} minTickGap={-5}/>
                    <Tooltip
                        content={<CustomLineChartTooltip />}
                        cursor={<CustomCursor />}
                    />
                    <Line type="monotone" dataKey="sessionLength" stroke="#FFFF" dot={false} activeDot={{ stroke: 'white', strokeOpacity: 0.2, strokeWidth: 10, r: 4 }}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}


export default GraphLine