import React, { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import * as userActions from "../../store/User/userActions"
import "./Prueba.scss";



const Prueba = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const history = useHistory();


    useEffect(() => {
        dispatch(userActions.setUsers(1));
    }, [dispatch])

    console.log(user.users);

    const seeDetail = (user) => {
        console.log(user);
    }


    return (
        <div>
            <h2>Lista de usuarios</h2>
            {
                user.users.length > 0 ?
                    <table className="table">
                        <tbody>
                            <tr className="row">
                                <th >Name</th>
                                <th >Email</th>
                                <th >Phone</th>
                                <th >Acciones</th>
                            </tr>
                            {
                                user.users.map((user, index) => {
                                    return (
                                        <tr className="row">
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>
                                                <button type="button" onclick="alert('Hello world!')">
                                                    <FontAwesomeIcon icon={faBars} />
                                                </button>
                                            </td>
                                            {/* <td> <button type="button" onclick={console.log("Este es: ", user)}>Click Me!</button></td> */}

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    :
                    null
            }
        </div>
    )
}

export default Prueba
