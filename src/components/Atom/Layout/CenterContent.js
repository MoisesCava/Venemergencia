import React from "react";
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    center: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

}));




const CenterContent = ({children, verticalAling = false}) => {

    const classes = useStyles();


    return (
        <div className={classes.center} style={{alignItems : 'stretch'}} >
            {children}
        </div>
    )

}



export default CenterContent;