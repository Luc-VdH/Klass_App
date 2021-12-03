import { Button, Paper} from "@material-ui/core";
import { Grid } from "@mui/material";
import React from "react";
import "./Home.css"

function Navbar(){
    return(
        
        <Paper elevation={7} className="nav" square style={{backgroundColor: "#f7d9c4", position: "fixed", zIndex: 4}}>
            <Grid container spacing={1} className="navgrid">
                <Grid item xs={10}>
                    <div className="title">Klaas</div>
                </Grid>
                <Grid item xs={2}>
                    <div className="elementSettings">
                        
                          
                        <Button variant="contained" color="primary" size="large" >Settings</Button>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Navbar
