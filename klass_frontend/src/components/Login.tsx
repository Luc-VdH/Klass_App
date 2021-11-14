import { Button, Paper, TextField } from "@material-ui/core";
import React from "react";
import './Login.css';

function Login(){
    return(
        <div>
        <Paper elevation={3} className="loginbox">
            <h3 className="Title">Welcome!</h3>
            Please Login in or Sign Up :)
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <Button>Login</Button>
            <Button>Sign Up</Button>
        </Paper>
        </div>
    );
}

export default Login;