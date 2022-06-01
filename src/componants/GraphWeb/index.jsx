//@ts-check

import React from "react"
import { useEffect, useState } from "react";
import { RadarChart, PolarGrid, ResponsiveContainer, PolarAngleAxis, Radar } from 'recharts';
import './graphweb.scss'

/**
 * 
 * @module GraphWeb
 */


/**
 * GraphWeb renders the radar chart with Recharts
 * @param {Object} data
 * @returns {React.ReactComponentElement}
 */
function GraphWeb(data) {
    const typesObject = {...data.data.kind}
    const perfData = [...data.data.data]
    const frenchKindLoc = ["Intensité", "Vitesse", "Force", "Endurence", "Energie", "Cardio"]
    const retArray = []

    /**
     * Sets french kinds with datas from typesObject and performance datas
     * First replace english kinds by the french in typesObject.
     * Then fill retArray with performences & kind
     * @returns {void}
     * @alias module:GraphWeb.setFrenchKinds
     */
    const setFrenchKinds = useEffect(() => {
        

        //set french location kinds in typesObject
        frenchKindLoc.forEach((kind, index) => {
            typesObject[index +1] = kind
        })

        //replace kinds ids by french values


        perfData.forEach((perf) => {
            const kindId = perf.kind
            const kindValue = typesObject[kindId]
            retArray.push({value: perf.value, kind: kindValue})
        })

    }, [])

    return (
        <div className="graphweb-wrapper">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart  cx="50%" cy="50%" outerRadius= "65%" data={retArray}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind"  tick={{fill:"#FFFF", fontSize: "8"}} />
                    <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} label={false} dot={false}/>
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}


export default React.memo(GraphWeb)