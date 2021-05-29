import React from 'react';
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    roundedButton:{
        borderRadius: 20,
        marginBottom: 10,
        width: 140,
        whiteSpace: 'nowrap',
        textTransform: "none",
        "&:hover": {
            borderColor:"#d7b634",
            color: "#002e44",
            backgroundColor: "#ffffff"
        },
    },
});

const ActionButton = ({ style,rounded, children, ...props }) => {
    const classes = useStyles();
    return (
        <Button
            {...props}
            
            
            className={rounded? classes.roundedButton: null}
        >
            {children}
        </Button>
    );
}

export default ActionButton;