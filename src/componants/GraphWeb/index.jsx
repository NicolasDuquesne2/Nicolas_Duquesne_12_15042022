import React from "react"
import { RadarChart, PolarGrid, ResponsiveContainer, PolarAngleAxis, Radar } from 'recharts';
import './graphweb.scss'

const datas = [

    {
        name: "Intensité",
        value: ""
    },

    {
        name: "Vitesse",
        value: "50"
    },

    {
        name: "Force",
        value: "55"
    },

    {
        name: "Endurence",
        value: "50"
    },

    {
        name: "Energie",
        value: "45"
    },

    {
        name: "Cardio",
        value: "68"
    },
]


function GraphWeb() {
    return (
        <div className="graphweb-wrapper">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart  cx="50%" cy="50%" outerRadius={90} data={datas}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name"  tick={{fill:"#FFFF", fontSize: "12"}}/>
                    <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} label={false} dot={false}/>
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}


export default GraphWeb