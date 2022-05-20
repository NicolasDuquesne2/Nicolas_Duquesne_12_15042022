//@ts-check

import React from 'react'
import './hello.scss'


/**
 * 
 * @module Hello
 */


/**
 * Hello renders the user dashbaord header
 * @param {Object} props
 * @param {String} props.name
 * @param {String} props.sentence
 * @returns {React.ReactComponentElement}
 */
function Hello({name, sentence}) {
    return (
        <div className="hello">
            <h1 className="hello__title">Bonjour <span>{name}</span></h1>
            <p className='hello__sentence'>{sentence}</p>
        </div>
    )
}

export default Hello