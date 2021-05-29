import React from 'react'
import './CurvedHeader'
import visa from "../../../assets/visa.png"
import { Link } from 'react-router-dom'


const AppBar = () => {
    return (
        <div className="nav">
            <div className="appbar">








                <div className="appbar-item">
                    <img src={visa} alt="logo" style={{ height: 20, width: 60 }} />
                </div>



                <div className="appbar-item-grow">

                </div>



                <div className="appbar-item">
                    <a href="src\doc\test_respuestas.txt" target="_blank" rel="noreferrer">Part 1</a>
                    <Link to="/Users"> Parte 3 </Link>
                </div>





            </div>
        </div>
    )
}

export default AppBar
