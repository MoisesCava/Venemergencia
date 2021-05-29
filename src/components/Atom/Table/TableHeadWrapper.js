import { makeStyles, TableHead } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        borderBottom: "2px solid #002e44",
        
    }
}));

const TableHeadWrapper = ({ children, ...props }) => {

    const classes = useStyles();

    return (
        <TableHead {...props} className={classes.root}>
            {children}
        </TableHead>
    )
}

export default TableHeadWrapper;