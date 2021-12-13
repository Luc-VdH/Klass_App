import React, {useEffect, useState} from "react";
import './Home.css';
import Navbar from "./Navbar";
import FamilyButton from "./FamilyButton";
import {homeProps} from './interfaces/Props'
import { Paper } from "@material-ui/core";
import { Grid } from "@mui/material";
import NewFamily from "./NewFamily";

function Home(props:homeProps){
    
    const [username, setUN] = useState(props.username);
    const [password, setPW] = useState(props.password);
    
    const families:any[] = getFamilies(username, password);

    const w = window.innerWidth;
    const h = window.innerHeight;
    let ratio = w/h
    useEffect(()=>{
        ratio = w/h
    })

    return(
        <div>
            <Navbar/>
            
            <div style={{paddingTop: "14vh", paddingLeft: "2.5vw"}}>
                <Paper elevation={2} style={{width: "95vw", backgroundColor: "#f9ac9d", paddingBottom: "2vh"}}>
                    {ratio > 1 ? (
                        <div>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <div style={{paddingTop: "1vh", paddingBottom: "1vh", paddingLeft: "1vw", fontSize: "6vh"}}>
                                        Join Group:
                                    </div>
                                    <NewFamily actionName="Join" input="Code:" action={(groupcode:string) => {
                                        joinFamily(username, password, groupcode);
                                    }}></NewFamily>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{paddingTop: "1vh", paddingBottom: "1vh", paddingLeft: "1vw", fontSize: "6vh"}}>
                                        Create Group:
                                    </div>
                                    <NewFamily actionName="Create" input="Name:" action={(groupname:string) => {
                                        createFamily(username, password, groupname)
                                    }}></NewFamily>
                                </Grid>
                            </Grid>
                        </div>
                    ):(
                        <div>
                            <div style={{paddingTop: "1vh", paddingBottom: "1vh", paddingLeft: "1vw", fontSize: "6vh"}}>
                                Join Group:
                            </div>
                            <NewFamily actionName="Join" input="Code:" action={(groupcode:string) => {
                                joinFamily(username, password, groupcode);
                            }}></NewFamily>

                            <div style={{paddingTop: "1vh", paddingBottom: "1vh", paddingLeft: "1vw", fontSize: "6vh"}}>
                                Create Group:
                            </div>
                            <NewFamily actionName="Create" input="Name:" action={(groupname:string) => {
                                createFamily(username, password, groupname)
                            }}></NewFamily>
                        </div>
                    )}
                    
                    
                </Paper>
            </div>

            <div style={{paddingTop: "1vh", paddingLeft: "2.5vw", paddingBottom: "2vh"}}>
                <Paper elevation={2} style={{width: "95vw", backgroundColor: "#f9ac9d", paddingBottom: "2vh"}}>
                    <div style={{paddingTop: "1vh", paddingBottom: "1vh", paddingLeft: "1vw", fontSize: "6vh"}}>
                        Groups:
                    </div>
                    {families.map((x: any, i: number) => {
                        return(
                            <FamilyButton key={i} name={x.name} code={x.code}></FamilyButton>
                        );
                    })}
                </Paper>
            </div>
        </div>
        
    );
    
    
}

function getFamilies(username:string, password:string){
    return([{name:"family1", code: "ABCDEF"}, {name:"family2", code: "ABCDEF"}, {name:"family3", code: "ABCDEF"}, {name:"family4", code: "ABCDEF"}, {name:"family4", code: "ABCDEF"}, {name:"family4", code: "ABCDEF"}, {name:"family4", code: "ABCDEF"}]);
}
function joinFamily(username: string, password:string, code:string){
    console.log("join" + code)
}

function createFamily(username: string, password:string, name:string){
    console.log("create" + name)
}

export default Home;