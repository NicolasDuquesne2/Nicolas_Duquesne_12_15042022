//@ts-check

import './customlegende.scss'

/**
 * 
 * @module CustomLegende
 */


/**
 * CustomLegende returns a custom legende for Recharts
 * @param {Object} payload
 * @returns {React.ReactComponentElement}
 */
function CustomLegende(payload) {

    const payloadArr = payload.payload

    /**
     * classNames contains li classe names for having only a red or a black marker without changing li text color
     * @type {Array}
     * @alias module:CustomLegende.classNames
     */
    const classNames = [" li li--black", "li li--red"]
    return (
        <ul>
            {
                payloadArr.map((entry, index) => (
                    <li className = {classNames[index]} key = {`item-${index}`}>{entry.value}</li>
                ))
            }
        </ul>
    )
}

export default CustomLegende