import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { updateScore, updateQuestionIndex } from "../actions/questionAction";
import axios from "axios";

const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleClick(e) {
    navigate("/");
  }
  const [loading, setLoading] = useState(true);
  const [completed, setcompleted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(0);

  const setting = useSelector((state) => state.setting);
  const question = useSelector((state) => state.question);

  const { score, questionIndex } = question;
  const { category, difficulty, limit } = setting;

  useEffect(() => {
    console.log(`category : ${category}`);
    console.log(`difficulty : ${difficulty}`);
    console.log(`limit : ${limit}`);
    let url = `https://quizapi.io/api/v1/questions?apiKey=ubNfCAngyrJx4ABJR5vLDUA1Xs6h9SVIOplQXapO&limit=${limit}`;
    async function fetchData() {
      const { data } = await axios.get(url);

      console.log(data);

      setQuestions(data);
    }
    setLoading(true);
    fetchData().then((resp) => setLoading(false));
    // setLoading(false);
  }, [category, difficulty, limit]);

  function generateOptions(answersObj) {
    let items = [];
    for (const key in answersObj) {
      if (answersObj[key] !== null) {
        items.push(answersObj[key]);
      }
    }

    const options = items.map((option, idx) => {
      function setBgColor(isSelected) {
        if (idx === answerIndex) {
          return "green";
        } else if (idx === selectedIndex) {
          return "red";
        } else {
          return "#c9e0f2";
        }
      }

      return (
        <Button
          key={idx}
          id={idx}
          sx={{
            color: "#333",
            minWidth: "300px",
            fontSize: 14,
            fontWeight: "bold",
            p: 1,
            m: 1,
            backgroundColor: answerSelected
              ? setBgColor(answerSelected)
              : "#c9e0f2",
          }}
          onClick={handleOptionClick}
        >
          {option}
        </Button>
      );
    });

    return options;
  }

  function handleOptionClick(event) {
    console.log("selected index = " + event.target.id);
    setSelectedIndex(Number(event.target.id));
    setAnswerSelected(true);
    let selIdx = Number(event.target.id);
    let idx = 0;
    for (const key in questions[questionIndex].correct_answers) {
      if (questions[questionIndex].correct_answers[key] === "true") {
        setAnswerIndex(idx);
        console.log("answerIndex : " + idx);
        break;
      }
      idx++;
    }

    if (idx === selIdx) {
      dispatch(updateScore(score + 1));
    }
    setTimeout(() => {
      setAnswerSelected(false);
      if (questionIndex < questions.length - 1) {
        dispatch(updateQuestionIndex(questionIndex + 1));
      } else {
        setcompleted(true);
      }
    }, 2000);
  }

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <Box
          sx={{
            width: "40rem",
            margin: "auto",
            height: "100%",
            bgcolor: "#fff",
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          {!completed ? (
            <Box
              sx={{
                height: "26rem",
                display: "grid",
                gridTemplateRows: "1fr 5fr 1fr",
              }}
            >
              <Box
                sx={{
                  typography: "body1",
                  fontSize: 24,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  px: 1,
                  mt: 1,
                  textAlign: "center",
                }}
              >
                {questions[questionIndex].question}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                {generateOptions(questions[questionIndex].answers)}
              </Box>
              <Button variant="contained" onClick={handleClick}>
                Score : {score}
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                dispaly: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h1>
                Your Final Score : {score} / {questions.length}
              </h1>
              <Button
                variant="outlined"
                sx={{ mt: 4, mb: 2 }}
                onClick={() => {
                  dispatch(updateScore(0));
                  dispatch(updateQuestionIndex(0));
                  navigate("/");
                }}
              >
                Try Again
              </Button>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};

export default Quiz;
