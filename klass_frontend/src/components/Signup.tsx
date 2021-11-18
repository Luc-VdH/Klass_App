import { Button, MuiThemeProvider, Paper, TextField } from "@material-ui/core";
import { createTheme } from "@mui/material/styles";
import React from "react";
import './Signup.css';


function Signup(){
    return(
        <div className="background">
        
        <Paper elevation={5} className="signuppaper" style={{backgroundColor: "#f7d9c4"}}>
            <div className="signupbox">
                <div className="element">
                    <h3 className="Title">Sign up</h3>
                    Please Enter Your Details Below:
                </div>
                <div className="element">
                    <TextField id="username" label="Username" variant="standard" style={{backgroundColor: "white", width: "25vw"}}/>
                </div>
                <div className="element">
                    <TextField id="firstname" label="First name" variant="standard" style={{backgroundColor: "white", width: "25vw"}}/>
                </div>
                <div className="element">
                    <TextField id="surname" label="Surname" variant="standard" style={{backgroundColor: "white", width: "25vw"}}/>
                </div>
                <div className="element">
                    <TextField id="password" label="Password" variant="standard" style={{backgroundColor: "white", width: "25vw"}}/>
                </div>
                <div className="element">
                    <TextField id="conf-password" label="Confirm Password" variant="standard" style={{backgroundColor: "white", width: "25vw"}}/>
                </div>
                
                <div className="elementSignUp">
                    <Button variant="contained" color="primary">Sign Up</Button>
                </div>
            </div>
        </Paper>
        </div>
    );
}

export default Signup;