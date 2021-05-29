import { makeStyles, Paper, TableContainer } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    tableContainer: {
        width: "80%"
    }
}));

const TableContainerWrapper = ({ children, ...props }) => {
    const classes = useStyles();
    return (
        <TableContainer {...props} component={Paper} className={classes.tableContainer}>
            {children}
        </TableContainer>
    );
}

export default TableContainerWrapper;