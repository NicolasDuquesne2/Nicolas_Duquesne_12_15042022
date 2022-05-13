import React from "react";
import { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Label} from "recharts"
import CustomLabel from "../CustomLabel";
import './graphcircle.scss'


function GraphCircle(rating) {

    const [alpha, setAlpha] = useState([])

    useEffect(() => {
        const rateByHundred = (rating.rating*100)
        const left = (100-rateByHundred)
        const data = [
    
            {
                name: "lasting",
                value: left,
                color: "#FFFF"
            },
        
            {
                name: "Score",
                value: rateByHundred,
                color: "#FF0101"
            },
        ]
        //console.log(data)
        setAlpha(data)
    }, [rating])

    return (
        <div></div>
    )

    /*
    return (
        <div className="graphCircle-wrapper">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={730} height={250}>
                    <Pie 
                        data={score} 
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
                        {score.map((entry, index) => (
                            <Cell 
                                key={`Cell-${index}`} 
                                fill={entry.color}
                            />

                        ))}
                     <Label value={score[1].name} position="outside" offset={10} fontSize="15" fontWeight={500}/>
                     <Label
                        position="center"
                        content = {<CustomLabel 
                                        custom={
                                            {

                                                span1: {
                                                    value: `${score[1].value}%`,
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
    */
}

export default GraphCircle