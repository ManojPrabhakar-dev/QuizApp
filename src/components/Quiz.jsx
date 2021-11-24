import React from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  function handleClick(e) {
    navigate("/");
  }
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <h1>Question</h1>
        <Button variant="contained" onClick={handleClick}>
          Home
        </Button>
      </Box>
    </>
  );
};

export default Quiz;
