import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import './header.scss'

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="SportSee" />
            <nav className='header__nav'>
                <Link to='/'>Accueil</Link>
                <Link to='/'>Profile</Link>
                <Link  to='/'>Réglages</Link>
                <Link to='/'>Communauté</Link>
            </nav>
        </div>
    )
}

export default Header