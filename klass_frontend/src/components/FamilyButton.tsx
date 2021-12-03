import React, { useState } from "react";
import {Paper} from "@material-ui/core";
import "./Home.css"
import {fbProps} from './interfaces/Props'

function FamilyButton(props: fbProps){
    const [name, setName] = useState(props.name);
    const [code, setCode] = useState(props.code);
    const [isAdd, setAdd] = useState(props.isAdd);
    

    const s = {backgroundColor: "#f7d9c4", height: "15vh", width: "90vw", marginRight: "5vw", marginLeft: "2.5vw", marginTop: "1vh", display: 'flex'}

    return(
        <Paper elevation={4} style={s}>
            <div style={{paddingLeft: "2vw"}}>
                <div style={{textAlign: "center", height: "7vh", paddingTop: "2vh", fontSize: "5vh"}}>{name}</div> 
                
                <div style={{textAlign: "center"}}>Code: {code}</div>
            </div>
        </Paper>
    );
}

export default FamilyButton;