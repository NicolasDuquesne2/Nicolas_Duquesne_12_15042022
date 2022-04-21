import './tooltip.scss'

function CustomTooltip({active, payload}) {
    if (active) {
        return (
            <div className="tooltip">
                <p>{`${payload[0].value}Kg`}</p>
                <p>{`${payload[1].value}Kcal`}</p>
            </div>
        )
    } else {
        return null
    }
}

export default CustomTooltip

