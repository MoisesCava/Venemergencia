import React, { useEffect } from 'react'
import Background from '../../Atom/Layout/Background';
import { Box, Grid, makeStyles, Typography, Card, CardContent } from "@material-ui/core";
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../../store/User/userActions'

const UserInfo = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)

    useEffect(() => {
        dispatch(userActions.getUser(id))
    }, [dispatch, id])


    return (
        <Background>
            <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
                style={{ minHeight: "80vh" }}
            >
                <Card >
                    <CardContent>
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justify="center"

                        >
                            <Grid item xs={12}>
                                <Typography color="primary" variant="h4" component="div">
                                    <Box display="flex" fontWeight="fontWeightBold" justifyContent="center" mb={2}>
                                        Detalle de usuario
                                    </Box>
                                </Typography>
                            </Grid>
                            {
                                user.currentUser ?
                                    <Typography color="primary" variant="h5" component="div">
                                        <Box display="flex" fontWeight="fontWeightBold" justifyContent="center" mb={2}>
                                            Nombre: {user.currentUser.name}
                                        </Box>
                                        <Box display="flex" fontWeight="fontWeightBold" justifyContent="center" mb={2}>
                                            Correo: {user.currentUser.email}
                                        </Box>
                                        <Box display="flex" fontWeight="fontWeightBold" justifyContent="center" mb={2}>
                                            Telefono: {user.currentUser.phone}
                                        </Box>
                                        <Box display="flex" fontWeight="fontWeightBold" justifyContent="center" mb={2}>
                                            Website: {user.currentUser.website}
                                        </Box>
                                    </Typography>

                                    :
                                    null
                            }
                        </Grid>

                    </CardContent>
                </Card>
            </Grid>
        </Background>
    )
}

export default UserInfo
