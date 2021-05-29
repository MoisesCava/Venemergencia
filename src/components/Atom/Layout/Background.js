import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    background: {
        height: "fit-content",
        width: "100vw",
        background: "linear-gradient(90deg, rgba(105, 123, 231, 1) 20%, rgba(86, 68, 153, 1) 100%)"
    }
  }));

const Background = ({children}) => {

    const classes = useStyles();

    return (
        <div className={classes.background}>
            {children}
        </div>
    )
}

export default Background
