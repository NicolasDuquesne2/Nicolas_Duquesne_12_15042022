import React from "react"
import { useEffect, useState } from "react";
import { RadarChart, PolarGrid, ResponsiveContainer, PolarAngleAxis, Radar } from 'recharts';
import './graphweb.scss'


function GraphWeb(data) {

    const dataArray = data.data.data
    const typesObject = data.data.kind
    const [perfData, setPerfData] = useState([])
    
    useEffect(() => {
        //replace index by kind values in the data array and returns only the data array within dataArray

        dataArray.map((type) => {
            const id = type.kind
            type.kind = typesObject[id]
            return type
         }
        )

        setPerfData(dataArray)
    }, [dataArray, typesObject])


    return (
        <div className="graphweb-wrapper">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart  cx="50%" cy="50%" outerRadius={90} data={perfData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind"  tick={{fill:"#FFFF", fontSize: "12"}} />
                    <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} label={false} dot={false}/>
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}


export default GraphWeb