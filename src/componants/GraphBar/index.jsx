import React from 'react'
import {useEffect, useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomBarChartTooltip from '../CustomBarChartTooltip';
import './graphbar.scss'

const data = [
  {
    name: '1',
    kg: 69.2,
    kcal: 250,
  },
  {
    name: '2',
    kg: 69.3,
    kcal: 300,
  },
  {
    name: '3',
    kg: 70.1,
    kcal: 356,
  },
  {
    name: '4',
    kg: 69.9,
    kcal: 150,
  },
  {
    name: '5',
    kg: 69.8,
    kcal: 170,
  },
  {
    name: '6',
    kg: 70.5,
    kcal: 180,
  },
  {
    name: '7',
    kg: 69.2,
    kcal: 120,
  },
];




function GraphBar() {

  const [fTick, setfTick] = useState(0)
  const [sTick, setsTick] = useState(0)
  const [tTick, settTick] = useState(0)
 
  useEffect(() =>{
    //sets 3 ticks from datas. Uses arithmetic progession methode 
    setfTick(Math.trunc(Math.min.apply(null, data.map(item => item.kg))))
    settTick(Math.round(Math.max.apply(null, data.map(item => item.kg))))
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
          <BarChart data={data} barGap={10} width="100%" height="100%">
              <XAxis dataKey='name' tickLine={false}/>
              <YAxis
                yAxisId={0}
                orientation='right' 
                padding={{ top: 40}} 
                axisLine={false} 
                tickLine={false} 
                tickCount={3}  
                dataKey='kg' 
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
                dataKey='kcal' 
                domain={[dataMin => (0), dataMax => (370)]}
                hide={true}
              />
              <Tooltip content={<CustomBarChartTooltip />} />
              <Legend  verticalAlign='top' align='right' iconType="cicle"/>
              <Bar yAxisId={0} dataKey="kg" name={`Poids (kg)`} fill="#000000" barSize={10} radius={[10,10,0,0]}/>
              <Bar yAxisId={1} dataKey="kcal" name={`Poids (kg)`} fill="#E60000" barSize={10} radius={[10,10,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    )
}

export default GraphBar