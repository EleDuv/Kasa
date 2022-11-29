import React from 'react';
import { useParams } from 'react-router-dom'
import { dataLodgings } from '../../datas/dataLodgings'
import Error from '../Error/Error'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import LodgingDetails from '../../components/LodgingDetails/LodgingDetails'
import Collapse from '../../components/Collapse/Collapse'
import './lodging.css'

export default function HousingPage() {

    let { id } = useParams()
    const lodging = dataLodgings.getOneLodging(id)

    if (!lodging) {
        return <Error/>
    } else {

        return (
            <div className="housingPage">
                <ImageSlider slides={lodging.pictures} />
                <LodgingDetails info={lodging} />
                <div className="collapse">
                    <Collapse className="collapseContainer" title="Description" description={lodging.description}/>
                    <Collapse className="collapseContainer" title="Equipements" description={lodging.equipments.map((equipment, index) => (
                            <div key={index}>{equipment}</div>
                    ))} /> 
                </div>
            </div>
        )
    }
}