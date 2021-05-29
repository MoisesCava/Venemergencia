import { TableBody } from "@material-ui/core";
import React from "react";

const TableBodyWrapper = ({children, ...props}) =>{
    return(
        <TableBody {...props}>
            {children}
        </TableBody>
    );
}

export default TableBodyWrapper;