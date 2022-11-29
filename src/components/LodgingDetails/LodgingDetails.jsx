import './lodgingDetails.css'
import fullStar from '../../images/housingImages/fullStar.png'
import emptyStar from '../../images/housingImages/emptyStar.png'

// Affichage des informations des pages logement
export default function LodgingDetails ({info}) {
    const range = [1, 2, 3, 4, 5]

    return (
        <div className="lodgingDetails">
            <div className="lodgingDetailsInfos">
                <h1>{info.title}</h1>
                <p>{info.location}</p>
                <div className="tags">
                    {info.tags.map((tag, index) =>
                        <div className="tag" key={index} >{tag}</div>
                     )}
                </div>
            </div>
            <div className="lodgingDetailsHost">
                <div className="lodgingDetailsHostName">
                    <p>{info.host.name}</p>
                    <img src={info.host.picture} alt="host"/>
                </div>
                <div className="lodgingDetailsHostRating">
                    {range.map((rangeElement, key) =>
                        rangeElement <= info.rating ? (
                            <img src={fullStar} alt="Etoile pleine" key={key}/> ) : (
                            <img src={emptyStar} alt="Etoile vide" key= {key}/> )
                        )
                    }
                </div>
            </div>
        </div>
    ) 
}