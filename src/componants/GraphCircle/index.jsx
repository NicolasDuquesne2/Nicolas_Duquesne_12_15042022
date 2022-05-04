import React from "react";
import { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Label} from "recharts"
import CustomLabel from "../CustomLabel";
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
                        innerRadius={70} 
                        outerRadius={80} 
                        fill="#FF0101"
                        paddingAngle={0}
                        startAngle={180}
                        endAngle={600}
                        cornerRadius={40}
                    >
                        {datas.map((entry, index) => (
                            <Cell 
                                key={`Cell-${index}`} 
                                fill={entry.color}
                            />

                        ))}
                     <Label value={datas[1].name} position="outside" offset={10} fontSize="15" fontWeight={500}/>
                     <Label
                        position="center"
                        content = {<CustomLabel 
                                        custom={
                                            {

                                                span1: {
                                                    value: `${datas[1].value}%`,
                                                    fontWeight: 500,
                                                    fontSize: "26px"
                                                },
                
                                                span2: {
                                                    value: "de votre",
                                                    fontSize: "16px",
                                                    fill: "#74798C"
                                                },

                                                span3: {
                                                    value: "objectif",
                                                    fontSize: "16px",
                                                    fill: "#74798C"
                                                }
                                            }
                                        }     
                                  />}
                    />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GraphCircle