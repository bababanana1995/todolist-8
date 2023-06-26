import React, {ChangeEvent} from "react";
import {Checkbox} from "@mui/material";


type CheckBoxPropsType={
    callBack:(isDone:boolean)=>void
    isDone:boolean
}
export const UniversalCheckBox=(props:CheckBoxPropsType)=>{

    return(
        <Checkbox
            checked={props.isDone}
            color="primary"
            onChange={(event)=>props.callBack(event.currentTarget.checked)}
        />
    )
}
