import { TableRow } from "@material-ui/core";
import React from "react";

const TableRowWrapper = ({children, ...props}) => {
    return(
        <TableRow {...props}>
            {children}
        </TableRow>
    );
}

export default TableRowWrapper;