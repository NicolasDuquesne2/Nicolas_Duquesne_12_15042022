import { Link } from 'react-router-dom'
import iconcycle from '../../assets/iconcycle.svg'
import iconmuscle from '../../assets/iconmuscle.svg'
import iconswimm from '../../assets/iconswimm.svg'
import iconyoga from '../../assets/iconyoga.svg'

function Footer() {
    return(
        <div className="footer">
            <nav>
                <Link to='/'><img src={iconyoga} alt='iconyoga'></img></Link>
                <Link to='/'><img src={iconswimm} alt='iconswimm'></img></Link>
                <Link to='/'><img src={iconcycle} alt='iconcycle'></img></Link>
                <Link to='/'><img src={iconmuscle} alt='iconmuscle'></img></Link>
            </nav>
            <p className="footer__text">Copyright, SportSee 2020</p>
        </div>
    )
}

export default Footer