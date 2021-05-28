import React from 'react'
import './CurvedHeader'
import visa from "../../../assets/visa.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
                    <a href="https://codepen.io/jo_Geek/" target="_blank">Part 1</a>
                    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">Parte 3</a>
                </div>





            </div>
        </div>
    )
}

export default AppBar
