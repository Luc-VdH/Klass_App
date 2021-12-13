import React, { useState } from "react";
import {Button, Paper} from "@material-ui/core";
import { Grid } from "@mui/material";
import "./Home.css"
import {fbProps} from './interfaces/Props'

function FamilyButton(props: fbProps){
    const [name, setName] = useState(props.name);
    const [code, setCode] = useState(props.code);
    const [recipient, setRec] = useState("none")
    
    

    const s = {backgroundColor: "#f7d9c4", height: "15vh", width: "90vw", marginRight: "5vw", marginLeft: "2.5vw", marginTop: "1vh", display: 'flex'}

    return(
        <Paper elevation={4} style={s}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <div style={{paddingLeft: "2vw"}}>
                        <div style={{textAlign: "center", height: "7vh", paddingTop: "2vh", fontSize: "5vh"}}>{name}</div> 
                        
                        <div style={{textAlign: "center"}}>Code: {code}</div>
                    </div>
                </Grid>
                <Grid item xs={8.5}>
                    <div style={{paddingTop: "6vh"}}>Recipient: {recipient}</div>
                </Grid>
                <Grid item xs={1}>
                    <div style={{paddingTop: "2.5vh"}}>
                    <Button variant="contained" color="primary" size="large" >View Details</Button>
                    </div>
                </Grid>
                
            </Grid>
        </Paper>
    );
}

export default FamilyButton;