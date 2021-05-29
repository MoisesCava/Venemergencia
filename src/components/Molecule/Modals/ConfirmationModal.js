import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import ActionButton from "../../Atom/Buttons/ActionButton";
import { makeStyles } from '@material-ui/core/styles';


import ModalWrapper from "../../Atom/Modal/ModalWrapper";
import ModalActions from "../../Atom/Modal/ModalActions";
import ModalContent from "../../Atom/Modal/ModalContent";
import ModalHeader from "../../Atom/Modal/ModalHeader";
import { Grid, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    modalContent: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column-reverse",
        marginBottom: -15,
        textAlign: "center",
        margin: "auto"
    },

    buttonContainer: {
        justifyContent: "center",
        marginBottom: 5,
        [theme.breakpoints.down("xs", "sm")]: {
            marginBottom: 0,
            flexDirection: "column-reverse",
            alignItems: "center",
        },
    },

    text: {
        fontSize: 21,

    },
    imgContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    rounded: {
        borderRadius: 15,
        height: 230,
        width: 420,
        [theme.breakpoints.down("xs", "sm")]: {
            width: 350,
            height: 280,

        },

    },
    colorHeader: {
        backgroundColor: theme.palette.primary.main,
        color: "white",


    },



}), (ModalWrapper));
const ConfirmationModal = ({ open, onClose, onOk, title, isLoading }) => {
    const classes = useStyles();

    return (

        <ModalWrapper classes={{ paper: classes.rounded }} open={open} onClose={onClose} >

            <ModalHeader classes={{ root: classes.colorHeader }} title={title} />




            <ModalContent className={classes.modalContent}>
                <Grid container direction="row" justify="center">
                    <Grid item xs>
                        <Typography color="primary" variant="h6" component="div">
                            <Box display="flex" fontWeight="fontWeightBold" justifyContent="center" mb={2}>
                                ¿Seguro que desea eliminar a este usuario?
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>


            </ModalContent>


            <ModalActions>


                <Grid container className={classes.buttonContainer} spacing={2}>
                    <Grid item  >
                        <ActionButton variant="contained" rounded size="small" color="primary" onClick={onClose} >
                            Cancelar
                    </ActionButton>
                    </Grid>
                    <Grid item >
                        <ActionButton variant="contained" rounded size="small" color="secondary" onClick={onOk} >
                            {isLoading ? <CircularProgress size={24} color={"secondary"} /> : "Aceptar"}
                        </ActionButton>
                    </Grid>
                </Grid>




            </ModalActions>


        </ModalWrapper>

    );
}

export default React.memo(ConfirmationModal);