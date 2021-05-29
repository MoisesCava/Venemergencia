import React, { useEffect, useState, Fragment } from 'react'

import { makeStyles } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconTextButton from '../../Atom/Buttons/IconTextButton';

import CommonTable from '../../Organism/Table/CommonTable'
import createColumnData from "../../../utils/createColumnData";

import { useDispatch, useSelector } from "react-redux";
import * as userActions from '../../../store/User/userActions'

import ConfirmationModal from '../../Molecule/Modals/ConfirmationModal'


const useStyles = makeStyles((theme) => ({
    content: {
        marginTop: '80px',
    },

    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: "90%",
    },
}));

const UserTable = ({ history, match }) => {

    const classes = useStyles();

    const dispatch = useDispatch()
    const users = useSelector(state => state.user.users)
    const currentUserId = useSelector(state=> state.user.currentUserId)
    const [openDelete, setOpenDelete] = useState(false);

    const columns = [
        ["Nombre", "name"],
        ["id", "id"],
        ["Email", "email"],
        ["Phone", "phone"],
    ]

    useEffect(() => {
        dispatch(userActions.setUsers());
    }, [dispatch])

    console.log(users)

    const renderButtons = (id) => {

        return (
            <React.Fragment key={id} >
                <IconTextButton onClick={() => history.push(`/UserDetail/${id}`)} Icon={VisibilityIcon} />
                <IconTextButton onClick={() => history.push(`/UpdateUser/${id}`)} Icon={CreateIcon} />
                <IconTextButton onClick={() => { dispatch(userActions.setUserId(id)); setOpenDelete(!openDelete); }} Icon={DeleteIcon} />
            </React.Fragment>
        )

    }

    return (
        <Fragment>
            {
                users?.length > 0 ?
                    <CommonTable items={createColumnData(users, columns)} render={renderButtons} />

                    :
                    null
            }

            <ConfirmationModal isLoading={users.loading} title={"Eliminar Usuario"} open={openDelete} onClose={() => { setOpenDelete(!openDelete); }} onOk={() => { dispatch(userActions.deleteUser(currentUserId)); setOpenDelete(!openDelete); }} />

        </Fragment>
    )
}

export default UserTable
