import { makeStyles, TableCell } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    cell: {
        color: "#002e44",
    }

}));

const TCell = ({ children, ...props }) => {
    const classes = useStyles();
    return (
        <TableCell align="center" {...props} className={classes.cell}>
            {children}
        </TableCell>
    );
}

export default TCell;