import './tooltip.scss'

function CustomLineChartTooltip({active, payload}) {
    if (active) {
        return (
            <div className="linechart-tooltip">
                <p>{`${payload[0].value} min`}</p>
            </div>
        )
    } else {
        return null
    }
}

export default CustomLineChartTooltip