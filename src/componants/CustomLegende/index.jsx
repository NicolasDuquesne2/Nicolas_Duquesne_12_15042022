import './customlegende.scss'

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