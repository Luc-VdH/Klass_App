import { Button, Paper} from "@material-ui/core";
import { Grid } from "@mui/material";
import React from "react";
import "./Home.css"

function Navbar(){
    return(
        <Paper elevation={5} className="nav" square style={{backgroundColor: "#f7d9c4"}}>
            <Grid container spacing={1} className="navgrid">
                <Grid item xs={10}>
                    <div className="title">Klass</div>
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
