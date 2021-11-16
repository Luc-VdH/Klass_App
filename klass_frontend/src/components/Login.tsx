import { Button, MuiThemeProvider, Paper, TextField } from "@material-ui/core";
import { createTheme } from "@mui/material/styles";
import React from "react";
import './Login.css';
import { green, red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      primary: {
        main: "#6b2a5f",
      },
      secondary: {
        main: "#f7d9c4",
      },
      
    },
  });

function Login(){
    return(
        <div className="background">
        <MuiThemeProvider theme={theme}>
        <Paper elevation={5} className="loginpaper">
            <div className="loginbox">
                <div className="element">
                    <h3 className="Title">Welcome!</h3>
                    Please Login in or Sign Up :)
                </div>
                <div className="element">
                    <TextField id="outlined-basic" label="Username" variant="outlined" />
                </div>
                <div className="element">
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                </div>
                <div className="elementLogin">
                    <Button variant="contained" color="primary">Login</Button>
                </div>
                <div className="elementSignUp">
                    <Button variant="contained" color="primary">Sign Up</Button>
                </div>
            </div>
        </Paper>
        </MuiThemeProvider>
        </div>
    );
}

export default Login;