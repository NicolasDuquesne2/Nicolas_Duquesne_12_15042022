//@ts-check

import energy from '../../assets/iconenergy.svg'
import chicken from '../../assets/iconchicken.svg'
import apple from '../../assets/iconapple.svg'
import cheeseburger from '../../assets/iconcheeseburger.svg'
import './insight.scss'
import React from 'react'


/**
 * 
 * @module Insight
 */


/**
 * Insight renders an insight on the user dashboard
 * First sets config param following english insight kind receved
 * 
 * @param {Object} props
 * @param {String} props.name
 * @param {String} props.stats
 * @returns {React.ReactComponentElement}
 */
function Insight({name, stats}) {

    /**
     * the image name according to english insight name
     * @type {string}
     * @alias module:Insight.image
     */
    let image = null
    /**
     * the css extension for the class icon-wrapper according to english insight name
     * @type {string}
     * @alias module:Insight.color
     */
    let color = ''
    /**
     * The insight unit according to english insight name
     * @type {string}
     * @alias module:Insight.unit
     */
    let unit = ''
    /**
     * The insight french localisation according to english insight name
     * @type {string}
     * @alias module:Insight.frName
     */
    let frName = ''

    switch(name) {
        case 'calorieCount':
            image = energy
            color = '--red'
            unit = 'kCal'
            frName = 'Calories'
            break
        case 'proteinCount':
            image = chicken
            color = '--blue'
            unit = 'g'
            frName = 'Proteines'
            break
        case 'carbohydrateCount':
            image = apple
            color = '--yellow'
            unit = 'g'
            frName = 'Glucides'
            break
        case 'lipidCount':
            image = cheeseburger
            color = '--red'
            unit = 'g'
            frName = 'Lipides'
            break
        default:
    }

    return(
        <div className="insight-wrapper">
            <div className={`insight-wrapper__icon-wrapper${color}`}>
                <img src={image} className="icon" alt={name} ></img>
            </div>
            <div className="insight-wrapper__text-wrapper">
                <h4>{`${stats}${unit}`}</h4>
                <p>{frName}</p>
            </div>
        </div>
    )
}
export default Insight