import React from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  function handleClick(e) {
    navigate("/quiz");
  }
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <h1>Quiz Settings</h1>
        <Button variant="contained" onClick={handleClick}>
          Start
        </Button>
      </Box>
    </>
  );
};

export default Settings;
