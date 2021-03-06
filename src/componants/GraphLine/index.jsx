import React from "react"
import { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import CustomAxisTick from "../CustomAxisTick"
import CustomCursor from "../CustomCursor"
import CustomLineChartTooltip from "../CustomLineGraphTooltip"
import './graphline.scss'

/**
 * 
 * @module GraphLine
 */


/**
 * GraphLine renders the line chart with Recharts
 * @param {Object} data
 * @returns {React.ReactComponentElement}
 */
function GraphLine(data) {

    /**
     * Contains all days objects
     * @type {Array}
     */
    const dataArray = [...data.data]
    const [timeData, setTimeData] = useState([])
    const lineData = []


    /**
     * Sets timeData useState object with first day letter in french localisation.
     *  Then add a fake date with a 0 result for styling
     * @returns {void}
     * @alias module:GraphLine.setTimeDataDays
     */
    const setTimeDataDays=  useEffect(() => {

        //replace day index by first day french letter
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
        dataArray.map((day, index) => (
            lineData.push({day: days[index], sessionLength: dataArray[index].sessionLength})
        ))

        lineData.reverse()
        lineData.push({day: '', sessionLength: 0})
        lineData.reverse()
        setTimeData(lineData)
    }, [])

    return (
        <div className="graphline-wrapper">
            <h4 className="graphline-wrapper__title">Durée moyenne des sessions</h4>
            <ResponsiveContainer width="100%" height="100%" >
                <LineChart data={timeData} margin={{top: 100, bottom: 15}}>
                    <XAxis 
                        dataKey="day" 
                        tickLine={false} 
                        axisLine={false}
                        interval="preserveEnd"
                        tick={<CustomAxisTick dy={15} fill="#FFFF" textAnchor="middle" />} minTickGap={-5}/>
                    <Tooltip
                        content={<CustomLineChartTooltip active payload />}
                        cursor={<CustomCursor />}
                    />
                    <Line type="monotone" dataKey="sessionLength" stroke="#FFFF" strokeWidth={2} dot={false} activeDot={{ stroke: 'white', strokeOpacity: 0.2, strokeWidth: 10, r: 4 }}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}


export default GraphLine