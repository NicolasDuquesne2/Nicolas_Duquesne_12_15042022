//@ts-check

import energy from '../../assets/iconenergy.svg'
import chicken from '../../assets/iconchicken.svg'
import apple from '../../assets/iconapple.svg'
import cheeseburger from '../../assets/iconcheeseburger.svg'
import './insight.scss'


/**
 * 
 * @module Insight
 */


/**
 * Insight renders an insight on the user dashboard
 * @returns {Object}
 */
function Insight({name, stats}) {

    let image = null
    let color = ''
    let unit = ''
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