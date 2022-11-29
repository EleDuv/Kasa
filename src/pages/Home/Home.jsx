import React, { useEffect, useState } from 'react'
import './home.css'
import HomeImage from '../../components/Images/HomeImage'
import Card from '../../components/Card/Card'
import { dataLodgings }  from '../../datas/dataLodgings'

// Affichage de la page d'accueil
export default function Home() {

    const [logs, setLogs] = useState([])

    useEffect(() => {
        setLogs(dataLodgings.getAllLodgings())
    }, [])

    return (
        <div className="home">
            <HomeImage/>
            <div className="gallery">
                {
                   logs.map(log => (
                        <Card key={log.id} datas={log}/> 
                   ))
                }
            </div>
        </div>
    )
}