import './hello.scss'

function Hello({name, sentence}) {
    return (
        <div className="hello">
            <h1 className="hello__title">Bonjour <span>{name}</span></h1>
            <p className='hello__sentence'>{sentence}</p>
        </div>
    )
}

export default Hello