import React from "react";
import DialogActions from '@material-ui/core/DialogActions';



const ModalActions = ({children, ...props }) => {


    return (
        <DialogActions {...props} >
            {children}
        </DialogActions>
    )


}



export default ModalActions;