import React from "react";

import Dialog from '@material-ui/core/Dialog';



const ModalWrapper = ({children, open, onClose ,...props}) => {


    return (

        <Dialog
            open={open}
            onClose={onClose}
            disableBackdropClick
            {...props}
        >

            {children}

        </Dialog>

    )


}




export default ModalWrapper;