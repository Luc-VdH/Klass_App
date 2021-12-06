import { Button,   Paper, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './Login.css';
import { loginProps } from "./interfaces/Props";



function Login(props: loginProps){
    const [username, setUN] = useState("")
    const [password, setPW] = useState("")
    const [loggedin, setlogin] = useState(false)
    
    useEffect(()=>{
        console.log("hello")
    })
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
                    <TextField id="password" label="Password" variant="standard" type={"password"} style={{backgroundColor: "white", width: "25vw"}}/>
                </div>
                <div className="elementLogin">
                    <Link style={{textDecoration:"none"}} to="/home">
                        <Button variant="contained" color="primary" size="large">Login</Button>
                    </Link>
                </div>
                <div className="elementSignUp">
                    <Link style={{textDecoration:"none"}} to="/signup">
                        <Button variant="contained" color="primary" size ="large">Sign Up</Button>
                    </Link>
                </div>
            </div>
        </Paper>
        </div>
    );
}

export default Login;