import React from "react";


import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    IconButton: {}
  }));

const IconTextButton = ({Icon, text, ...props}) => {


    const classes = useStyles();


    return (
        <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            className={classes.IconButton}
            {...props}
        >
            <Icon />

            {text?  <Typography>{text}</Typography> : null}
        </IconButton>
    )

}




export default IconTextButton