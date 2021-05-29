import { makeStyles, Table } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    table:{
        minWidth: 700,
    }
}))

const TableWrapper = ({children, ...props}) => {
    const classes = useStyles();
    return(
        <Table {...props} className={classes.table}>
            {children}
        </Table>
    );
}

export default TableWrapper;