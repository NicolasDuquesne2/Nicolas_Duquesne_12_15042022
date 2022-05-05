import './tooltip.scss'

function CustomBarChartTooltip({active, payload}) {
    if (active) {
        return (
            <div className="barchart-tooltip">
                <p>{`${payload[0].value}Kg`}</p>
                <p>{`${payload[1].value}Kcal`}</p>
            </div>
        )
    } else {
        return null
    }
}

export default CustomBarChartTooltip

