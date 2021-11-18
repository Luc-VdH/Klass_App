import { Button, MuiThemeProvider, Paper, TextField } from "@material-ui/core";
import { createTheme } from "@mui/material/styles";
import React from "react";
import './Login.css';



function Login(){
    return(
        <div className="background">
        <Paper elevation={5} className="loginpaper" style={{backgroundColor: "#f7d9c4"}}>
            <div className="loginbox">
                <div className="element">
                    <h3 className="Title">Welcome!</h3>
                    Please Login in or Sign Up :)
                </div>
                <div className="element">
                    <TextField id="username" label="Username" variant="standard" style={{backgroundColor: "white", width: "25vw"}}/>
                </div>
                <div className="element">
                    <TextField id="password" label="Password" variant="standard" style={{backgroundColor: "white", width: "25vw"}}/>
                </div>
                <div className="elementLogin">
                    <Button variant="contained" color="primary">Login</Button>
                </div>
                <div className="elementSignUp">
                    <Button variant="contained" color="primary">Sign Up</Button>
                </div>
            </div>
        </Paper>
        </div>
    );
}

export default Login;