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