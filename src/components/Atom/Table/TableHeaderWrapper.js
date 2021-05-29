import { CardHeader, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: 600,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingBottom: "25px",
    }
}));

const TableHeaderWrapper = ({ children, ...props }) => {

    const classes = useStyles();

    return (
        <CardHeader {...props} className={classes.title}>
            {children}
        </CardHeader>
    )
}

export default TableHeaderWrapper;