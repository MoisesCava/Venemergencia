import { Card, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    card: {
        borderRadius: "15px",
        width: "80%",
        minWidth: "fit-content"
    }
}));

const TableWrapper = ({ children, ...props }) => {

    const classes = useStyles();

    return (
        <Card {...props} className={classes.card}>
            {children}
        </Card>
    );
}

export default TableWrapper;