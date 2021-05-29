import { CardContent } from "@material-ui/core";
import React from "react";

const TableContentWrapper = ({children, ...props}) => {
    return (
        <CardContent {...props}>
            {children}
        </CardContent>
    )
}

export default TableContentWrapper