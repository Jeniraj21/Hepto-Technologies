import React from "react"
import bg from '../src/bg.jpg';
import { Button, Typography } from "@mui/material";
import '../src/main.css';
import quiz from "./quiz";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';



const Main = () => {

    const navigate = useNavigate();
    return (


        <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", flexDirection: "column" }}>

            <div>
                <Typography style={{ color: "white", fontSize: "50px" }}>𝐆𝐞𝐭 𝐒𝐭𝐚𝐫𝐭</Typography>
            </div>
            {/* <div className="arr" onClick={() => navigate('/quiz')}>
                <span></span>
                <span></span>

            </div> */}
            <div className="arrow" onClick={() => navigate('/quiz')}>
                <Button variant="contained" style={{ color: "black", fontSize: "15px", fontFamily: "cursive", fontWeight: "bold", margin: "20px", backgroundColor: "yellow" }} >START</Button>
            </div>
        </div >

    )
};

export default Main;
