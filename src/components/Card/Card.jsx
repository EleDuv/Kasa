import './Card.css'
import { Link } from 'react-router-dom'

export default function Card ( {datas} ) {
    return (
        <div className="card">
            <Link to={`./lodgings/${datas.id}`}>
                <img className='lodgingCover' src={datas.cover} alt={datas.title}></img>
                <h2>{datas.title}</h2>
            </Link>
        </div>
    )
}