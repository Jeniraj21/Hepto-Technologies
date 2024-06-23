import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Card from '@mui/material/Card';
import bg from '../src/back.jpg'
import '../src/quiz.css'
import Grid from '@mui/material/Grid';
import questionData from '../src/questions.json';
import { useState } from "react";

function Quiz() {

    const [CurrQuestion, setCurrQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [timer, setTimer] = useState(10);


    useEffect(() => {
        let interval;
        if (timer > 0 && !showScore) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else {
            clearInterval(interval);
            setShowScore(true);
        }

        return () => clearInterval(interval);
    }, [timer, showScore]);

    const handleClick = (selectedOption) => {
        if (selectedOption === questionData[CurrQuestion].correctOption) {
            setScore((prevScore) => prevScore + 1)
        }

        if (CurrQuestion < questionData.length - 1) {
            setCurrQuestion((prevQuestion) => prevQuestion + 1);
            setTimer(10);
        }
        else {
            setShowScore(true);
        }
    }

    const handleRestart = () => {
        setCurrQuestion(0);
        setScore(0);
        setShowScore(false);
        setTimer(10);
    }
    return (

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh", backgroundImage: `url(${bg})` }}>

            <Card style={{
                height: "50%", width: "50%", background: `rgba(255, 255, 255, 0.2)`,
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", borderRadius: "16px",
                backdropFilter: "blur(5px)", padding: "30px",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>


                {
                    showScore ? (
                        <div className="score" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", height: "20vh" }} >
                            <Typography style={{ fontSize: "20px", fontFamily: "cursive", fontWeight: "bolder" }}>Your Score:{score}/{questionData.length}</Typography>
                            <Button variant="contained" onClick={handleRestart}>Restart</Button>
                        </div>
                    ) :
                        (
                            <div>
                                <Typography style={{ fontSize: "30px", fontFamily: "cursive" }}>Question {CurrQuestion + 1}</Typography>
                                <Typography style={{ fontSize: "20px", fontFamily: "cursive", margin: "10px" }} > {questionData[CurrQuestion].question}</Typography>
                                <div className="option" style={{ padding: "10px " }}>
                                    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >

                                        {questionData[CurrQuestion].options.map((option, index) => (
                                            <Grid item xs={6}>
                                                <Button variant="outlined" id="btn" key={index} onClick={() => handleClick(option)}>{option}</Button>
                                            </Grid>
                                        ))}

                                    </Grid>
                                    <div className="timer">
                                        <Typography>Time Left :<span>{timer}s</span></Typography>

                                    </div>
                                </div>
                            </div>
                        )
                }
            </Card >
        </div >

    )
};

export default Quiz;
