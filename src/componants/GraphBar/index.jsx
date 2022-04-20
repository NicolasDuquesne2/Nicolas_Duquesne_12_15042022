import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './graphbar.scss'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function GraphBar() {
  
    return (

      <div className="graph-group">
        <p className="graph-group__title">Activité quotidienne</p>
        <ResponsiveContainer  width="100%">
        <BarChart data={data} barGap={-40} width={100} height={150}>
            <XAxis dataKey='name' />
            <YAxis orientation='right' padding={{ top: 40}} axisLine={false} />
            <Tooltip />
            <Legend  verticalAlign='top' align='right'/>
            <Bar dataKey="uv" fill="#000000" maxBarSize={10} radius={[10,10,0,0]}/>
            <Bar dataKey="pv" fill="#E60000" maxBarSize={10} radius={[10,10,0,0]}/>
          </BarChart>
        </ResponsiveContainer>
      </div>

    )
}

export default React.memo(GraphBar)