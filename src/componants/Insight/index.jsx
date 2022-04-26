import energy from '../../assets/iconenergy.svg'
import chicken from '../../assets/iconchicken.svg'
import apple from '../../assets/iconapple.svg'
import cheeseburger from '../../assets/iconcheeseburger.svg'
import './insight.scss'

function Insight({name, stats}) {

    let image = null
    let color = ''

    switch(name) {
        case 'Calories':
            image = energy
            color = '--red'
            break
        case 'Proteines':
            image = chicken
            color = '--blue'
            break
        case 'Glucides':
            image = apple
            color = '--yellow'
            break
        case 'Lipides':
            image = cheeseburger
            color = '--red'
            break
        default:
    }

    return(
        <div className="insight-wrapper">
            <div className={`insight-wrapper__icon-wrapper${color}`}>
                <img src={image} className="icon" alt={name} ></img>
            </div>
            <div className="insight-wrapper__text-wrapper">
                <h4>{stats}</h4>
                <p>{name}</p>
            </div>
        </div>
    )
}
export default Insight