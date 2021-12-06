import { Button, Paper, TextField } from "@material-ui/core";
import { useState } from "react";
import { newFamilyProps } from "./interfaces/Props";

function NewFamily(props: newFamilyProps){
    const [actionName, setAction] = useState(props.actionName)
    const [input, setIn] = useState(props.input)
    const action:Function = props.action
    const s = {backgroundColor: "#f7d9c4", height: "20vh"}

    return(
        <div style={{padding: "1vw"}}>
        <Paper elevation={4} style={s}>
            <div style={{textAlign: "center", margin: "auto", paddingTop: "3vh"}}>
                <TextField id="username" label={input} variant="standard" style={{backgroundColor: "white", width: "25vw"}}/>
            </div>
            <div style={{textAlign: "center", margin: "auto", paddingTop: "3vh"}}>
                <Button variant="contained" color="primary" size ="large" onClick={() => {action()}}>{actionName}</Button>
            </div>
            
        </Paper>
        </div>
    );
}

export default NewFamily;