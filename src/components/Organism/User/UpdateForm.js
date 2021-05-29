import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { Box, Typography, makeStyles, Card, CardContent } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Background from '../../Atom/Layout/Background';

import * as userActions from '../../../store/User/userActions';


import validationRegister from "../../../utils/validationRegister";
import CommonInput from '../../Atom/Inputs/CommonInput';
import ActionButton from '../../Atom/Buttons/ActionButton';


const useStyles = makeStyles((theme) => ({
    createButton: {
        width: 111,
        marginBottom: 10
    },
    buttonContainer: {
        [theme.breakpoints.down("xs", "sm")]: {
            flexDirection: "column-reverse",
        },
    },
    content: {
        marginTop: '75px',
    },
    card: {
        width: "400px",
        borderRadius: 20,
        [theme.breakpoints.down("xs")]: {
            width: "100%",
        },
        overflow: "auto"
    },
}));

const UpdateForm = () => {
    const classes = useStyles()
    const { register, errors, handleSubmit, setValue } = useForm();
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const user = useSelector(state => state.user)

    useEffect(() => {
        dispatch(userActions.getUser(id))
    }, [dispatch, id]);


    useEffect(() => {
        let userData = user.currentUser
        if (!userData) return null;
        setValue("name", userData?.name);
        setValue("phone", userData?.phone);
        setValue("website", userData?.website);
        setValue("email", userData?.email);
        setValue("username", userData?.username);

    }, [user.currentUser, setValue])


    const updateUser = data => {

        let toUpdate = {
            id: Number(id),
            name: data.name,
            username: data.username,
            email: data.email,
            address: user?.currentUser?.address,
            phone: data.phone,
            website: data.website,
            company: user?.currentUser?.company,
        }



        dispatch(userActions.updateUser(toUpdate, Number(id)));



    }





    return (
        <Background>
            <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
                style={{ minHeight: "100vh" }}
            >
                <Card className={classes.card}>
                    <CardContent>
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justify="center"

                        >

                            <Grid item xs={12}>
                                <Typography color="primary" variant="h5" component="div">
                                    <Box display="flex" fontWeight="fontWeightBold" justifyContent="center" mb={2}>
                                        Recuperar contraseña
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <form onSubmit={handleSubmit(updateUser)} >

                                    <Grid container justify="center" spacing={1}>

                                        <Grid item sm={6} xs={12}>
                                            <CommonInput
                                                shrink
                                                label="Nombre"
                                                name="name"
                                                inputRef={register(validationRegister({ required: true, maxLength: 128 }))}
                                                error={!!errors.name}
                                                helperText={errors.name?.message}
                                            />

                                        </Grid>

                                        <Grid item sm={6} xs={12}>
                                            <CommonInput
                                                shrink
                                                label="Telefono"
                                                name="phone"
                                                inputRef={register(validationRegister({ required: true, maxLength: 30 }))}
                                                error={!!errors.phone}
                                                helperText={errors.phone?.message}
                                            />

                                        </Grid>



                                        <Grid item sm={6} xs={12}>
                                            <CommonInput
                                                shrink
                                                label="Correo"
                                                name="email"
                                                inputRef={register(validationRegister({ required: true, maxLength: 30 }))}
                                                error={!!errors.email}
                                                helperText={errors.email?.message}
                                            />
                                        </Grid>

                                        <Grid item sm={6} xs={12}>
                                            <CommonInput
                                                shrink
                                                label="Nombre de usuario"
                                                name="username"
                                                inputRef={register(validationRegister({ required: true, maxLength: 30 }))}
                                                error={!!errors.username}
                                                helperText={errors.username?.message}
                                            />

                                        </Grid>

                                        <Grid item sm={6} xs={12}>
                                            <CommonInput
                                                shrink
                                                label="Sitio web"
                                                name="website"

                                                inputRef={register(validationRegister({ required: false, maxLength: 30 }))}
                                                error={!!errors.website}
                                                helperText={errors.website?.message}
                                            />

                                        </Grid>









                                        <Grid item xs={12} container className={classes.buttonContainer} >
                                            <Grid item sm={6} xs={12} >
                                                <Box width="100%" display="flex" justifyContent="center">
                                                    <ActionButton onClick={() => history.goBack()} variant={"contained"} rounded color="primary" className={classes.createButton}>
                                                        Cancelar
                                                    </ActionButton>
                                                </Box>


                                            </Grid>
                                            <Grid item sm={6} xs={12} >

                                                <Box width="100%" display="flex" justifyContent="center">
                                                    <ActionButton type="submit" disabled={user.loading} variant={"contained"} rounded color="primary" className={classes.createButton}>
                                                        {user.loading ? <CircularProgress color="secondary" size={24} /> : "Actualizar"}
                                                    </ActionButton>
                                                </Box>
                                            </Grid>
                                        </Grid>



                                    </Grid>
                                </form>

                            </Grid>



                        </Grid>
                    </CardContent>
                </Card>

            </Grid>
            
        </Background>
    )
}

export default UpdateForm
