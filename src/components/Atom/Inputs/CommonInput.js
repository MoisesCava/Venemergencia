import React from "react";
import { TextField } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({

    root: {
        width: "100%"
    }

}));

const CommonInput = ({ shrink, name, ...props }) => {


    const classes = useStyles();


    return (
        <TextField
            variant="outlined"
            size="small"
            name={name}
            className={classes.root}
            InputLabelProps={
                shrink ?
                    {
                        shrink: true,
                    }
                    :
                    undefined
            }
            InputProps={
                {
                    "data-testid": name
                }
            }
            {...props}
        />
    );
}

export default CommonInput;