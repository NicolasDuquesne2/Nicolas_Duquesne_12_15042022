import Insight from "../Insight"
import './insights.scss'

const datas = [
    {
        name: 'Calories',
        value: '1,930',
        unit: 'kCal'
    },

    {
        name: 'Proteines',
        value: '155',
        unit: 'g'
    },

    {
        name: 'Glucides',
        value: '290',
        unit: 'g'
    },

    {
        name: 'Lipides',
        value: '50',
        unit: 'g'
    },
]



function Insights() {
    return(
        <div className="insights-wrapper">
            {datas.map((insight, index) => (
                <Insight 
                    key={`${insight.name}-${index}`}
                    name ={insight.name}
                    stats={`${insight.value}${insight.unit}`}
                />
            ))}
        </div>
    )
}

export default Insights