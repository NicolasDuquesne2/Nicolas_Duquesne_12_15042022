import React from "react";
import { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend, Label} from "recharts"
import './graphcircle.scss'

const datas = [
    
    {
        name: "lasting",
        value: 50,
        color: "#FFFF"
    },

    {
        name: "Score",
        value: 50,
        color: "#FF0101"
    },
]



function GraphCircle() {

    useEffect(() => {

    })


    return (
        <div className="graphCircle-wrapper">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={730} height={250}>
                    <Pie 
                        data={datas} 
                        dataKey="value"
                        nameKey="name" 
                        cx="50%" 
                        cy="50%" 
                        innerRadius={60} 
                        outerRadius={80} 
                        fill="#FF0101"
                        paddingAngle={0}
                        startAngle={180}
                        endAngle={600}
                    >
                        {datas.map((entry, index) => (
                            <Cell 
                                key={`Cell-${index}`} 
                                fill={entry.color}
                            />

                        ))}
                     <Label value={datas[1].name} position="outside" offset={5} fontSize="15" fontWeight={500}/>
                     <Label value={`${datas[1].value}%`} position="center" offset={5} fontSize="15" fontWeight={500}/>
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GraphCircle