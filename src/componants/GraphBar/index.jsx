//@ts-check

import React from 'react'
import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import CustomBarChartTooltip from '../CustomBarChartTooltip';
import CustomLegende from '../CustomLegende';
import './graphbar.scss'



/**
 * 
 * @module GraphBar
 */


/**
 * GraphBar renders the graph bar with Recharts
 * @param {Object} data
 * @returns {React.ReactElement} GraphBar
 */
function GraphBar(data) {
  
  /***
   * dataArray contains all days datas givent by the api
   * @type {Array} dataArray
   */
  const dataArray = data.data

  /**
   * fTick is the first ordinate axis tick
   * @type {Object} ftick
   */
  const [fTick, setfTick] = useState(0)
  /**
   * sTick is the second ordinate axis tick
   * @type {Object} ftick
   */
  const [sTick, setsTick] = useState(0)
  /**
   * tTick is the third ordinate axis tick
   * @type {Object} ftick
   */
  const [tTick, settTick] = useState(0)
 
  /**
   * This useEffect sets 3 ticks from datas. Uses arithmetic progession methode.
   * @returns {Number}
   */
  useEffect(() =>{
    setfTick(Math.trunc(Math.min.apply(null, dataArray.map(item => item.kilogram)) - 1))
    settTick(Math.round(Math.max.apply(null, dataArray.map(item => item.kilogram)) + 1))
    setsTick(() => {
      const inter = 2
      const r = (tTick-fTick)/inter
      return (fTick + (inter/2)*r)
    })
  }, [fTick, tTick])
  
    return (

      <div className="graph-group">
        <p className="graph-group__title">Activité quotidienne</p>
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={dataArray} barGap={10} width="100%" height="100%">
              <XAxis dataKey='day' tickLine={false}/>
              <YAxis
                yAxisId={0}
                orientation='right' 
                padding={{ top: 40}} 
                axisLine={false} 
                tickLine={false} 
                tickCount={3}  
                dataKey='kilogram' 
                ticks={[fTick,sTick,tTick]} 
                domain={['dataMin', 'dataMax']}
              />
              <YAxis 
                yAxisId={1}
                orientation='right' 
                padding={{ top: 40}} 
                axisLine={false}
                tickLine={false}
                tickCount={3}  
                dataKey='calories' 
                domain={[dataMin => (0), dataMax => (Math.max.apply(null, dataArray.map(item => item.calories)) + 10)]}
                hide={true}
              />
              <Tooltip content={<CustomBarChartTooltip active payload />} />
              <Legend verticalAlign="top" content={<CustomLegende />}/>
              <Bar yAxisId={0} dataKey="kilogram" name={`Poids (kg)`} fill="#000000" barSize={10} radius={[10,10,0,0]}/>
              <Bar yAxisId={1} dataKey="calories" name={`Calories brûlées (kCal)`} fill="#E60000" barSize={10} radius={[10,10,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    )
}

export default GraphBar