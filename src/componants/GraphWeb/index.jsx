import React from "react"
import { useEffect, useState } from "react";
import { RadarChart, PolarGrid, ResponsiveContainer, PolarAngleAxis, Radar } from 'recharts';
import './graphweb.scss'


function GraphWeb(data) {

    const [perfData, setPerfData] = useState([])

    useEffect(() => {
        const dataArray = data.data.data
        const typesObject = data.data.kind
        const intermArray = [...dataArray]
        const frenchKindLoc = ["Intensité", "Vitesse", "Force", "Endurence", "Energie", "Cardio"]

        //set french location kinds in typesObject
        frenchKindLoc.forEach((kind, index) => {
            typesObject[index +1] = kind
        })

        //replace index in the dataArray by kind from the typesObject
        intermArray.map((elmnt) => {
            const id = elmnt.kind
            elmnt.kind = typesObject[id]
            return elmnt
        }
        )
        
        setPerfData(intermArray)
    }, [])


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