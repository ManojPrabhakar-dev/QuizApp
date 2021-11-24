import React, { useState } from "react";
import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "1fr 5fr 1fr",
        height: "100vh",
        bgcolor: "#e79f4cef",
      }}
    >
      <Header />
      <h1>Quiz App</h1>
      <Footer />
    </Box>
  );
}

export default App;
