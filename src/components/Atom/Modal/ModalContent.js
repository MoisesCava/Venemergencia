import React from "react";
import DialogContent from '@material-ui/core/DialogContent';


const ModalContent = ({children, ...props}) => {


    return (
        <DialogContent {...props} >

            {children}

        </DialogContent>
    )

}



export default ModalContent;