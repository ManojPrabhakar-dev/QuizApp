import React from "react";
import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import Quiz from "./components/Quiz";
import Settings from "./components/Settings";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "1fr 7fr 1fr",
          height: "100vh",
          bgcolor: "#e5dede",
        }}
      >
        <Header />
        <Router>
          <Box sx={{ my: "auto" }}>
            <Routes>
              <Route path="/" exact element={<Settings />} />
              <Route path="/quiz" element={<Quiz />} />
            </Routes>
          </Box>
        </Router>
        <Footer />
      </Box>
    </>
  );
}

export default App;
