import React from "react";
import DialogTitle from '@material-ui/core/DialogTitle';


const ModalHeader = ({ title, ...props }) => {


    return (

        <DialogTitle {...props} >
            <strong>{title}</strong>
        </DialogTitle>

    )

}




export default ModalHeader;