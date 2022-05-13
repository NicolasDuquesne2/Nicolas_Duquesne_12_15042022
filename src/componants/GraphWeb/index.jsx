import React from "react"
import { useEffect, useState } from "react";
import { RadarChart, PolarGrid, ResponsiveContainer, PolarAngleAxis, Radar } from 'recharts';
import './graphweb.scss'


function GraphWeb(data) {


    //replace index by french location kind in the data array and returns only the data array within dataArray
    const dataArray = data.data.data
    const typesObject = data.data.kind
    const intermArray = [...dataArray]
    const frenchKindLoc = ["Cardio", "Energie", "Endurence", "Force", "Vitesse", "Intensité"]

    /*
    //set french location kinds in typesObject
    frenchKindLoc.forEach((kind, index) => {
        typesObject[index +1] = kind
    })

    //replace index in the dataArray by kind from the typesObject
    intermArray.map((type) => {
        const id = type.kind
        type.kind = typesObject[id]
        return type
     }
    )
    */
    
    const [perfData, setPerfData] = useState([])

    useEffect(() => {
        const dataArray = data.data.data
        const typesObject = data.data.kind
        const intermArray = [...dataArray]
        const frenchKindLoc = ["Cardio", "Energie", "Endurence", "Force", "Vitesse", "Intensité"]

        //set french location kinds in typesObject
        frenchKindLoc.forEach((kind, index) => {
            typesObject[index +1] = kind
        })

        console.log(typesObject)

        /*
        setTimeout(() => {
            intermArray.forEach((element, index) => {
                const id = Number(element.kind)
                console.log(id)
                console.log(typesObject[id])
                element.kind = typesObject[index + 1]
                return element
             })
        }, 3000) */

        

        //replace index in the dataArray by kind from the typesObject
        intermArray.map((elmnt) => {
            //console.log(type)
            const id = elmnt.kind
            console.log(id)
            if (!isNaN(Number(id))) {
                elmnt.kind = typesObject[id]
            } 
            return elmnt
        }
        )

        console.log(intermArray)
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