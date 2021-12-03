import React, {useState} from "react";
import './Home.css';
import Navbar from "./Navbar";
import {homeProps} from './interfaces/Props'

function Home(props:homeProps){
    
    const [username, setUN] = useState(props.username);
    const [password, setPW] = useState(props.password);
    
    const families:any[] = getFamilies(username, password);

    return(
        <div>
            <Navbar/>
            {families.map((x: any, i: number) => {
                return(
                    <div key={i}>{x.name}</div>
                );
            })}
        </div>
        
    );
    
    
}

function getFamilies(username:string, password:string){
    return([{name:"family1"}, {name:"family2"}, {name:"family3"}]);
}

export default Home;