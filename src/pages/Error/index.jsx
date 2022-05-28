import './error.scss'
import Footer from '../../componants/Footer'

function Error({code}) {

    let errorMessage = ''

    switch (code) {
        case "404":
            errorMessage = "Cette page recherchée n'est pas disponible"
            break
        case "500":
            errorMessage = "Le serveur a rencontré une erreur interne"
            break
        default:
    }

    return (
        <div className="wrapper">
            <Footer />
            <div className="error">
                <h1 className='error__code'>Erreur : {code}</h1>
                <p className='error__message'>{errorMessage}</p>
            </div>
        </div>
    )
}

export default Error