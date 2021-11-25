import React, { useState } from "react";
import { Button, Box, FormControl, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [difficulty, setdifficulty] = useState("");
  const [limit, setLimit] = useState(5);

  const handleChange = (event) => {
    let controlName = event.target.name;
    switch (controlName) {
      case "category":
        setCategory(event.target.value);
        break;
      case "difficulty":
        setdifficulty(event.target.value);
        break;
      case "limit":
        setLimit(event.target.value);
        break;
      default:
        break;
    }
  };

  function handleClick(e) {
    navigate("/quiz");
  }
  return (
    <>
      <Box
        sx={{
          width: "40%",
          margin: "auto",
          height: "100%",
          bgcolor: "#fff",
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "1fr 6fr",
            my: 1,
            // bgcolor: "#d7Fede",
          }}
        >
          <Box
            sx={{
              typography: "h4",
              display: "flex",
              justifyContent: "center",
              my: 1,
              // bgcolor: "#d7Dede",
            }}
          >
            Quiz Settings
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridTemplateRows: "repeat(4,1fr)",
                // bgcolor: "#d7Fede",
              }}
            >
              <Box
                sx={{
                  typography: "body1",
                  fontSize: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  ml: 3,
                }}
              >
                Category
              </Box>
              <FormControl
                sx={{
                  m: 1,
                  mr: 3,
                  minWidth: 120,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Select
                  name="category"
                  value={category}
                  onChange={handleChange}
                  sx={{ width: 200, fontSize: 24 }}
                  displayEmpty
                  inputProps={{ "aria-label": "quiz category" }}
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value="Linux">Linux</MenuItem>
                  <MenuItem value="DevOps">DevOps</MenuItem>
                  <MenuItem value="Kubernetes">Kubernetes</MenuItem>
                </Select>
                {/* <FormHelperText>Please selected the category</FormHelperText> */}
              </FormControl>

              <Box
                sx={{
                  typography: "body1",
                  fontSize: 24,
                  display: "flex",
                  justifyContent: "left",
                  ml: 3,
                  alignItems: "center",
                }}
              >
                Difficulty
              </Box>
              <FormControl
                sx={{
                  m: 1,
                  mr: 3,
                  minWidth: 120,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Select
                  name="difficulty"
                  sx={{ width: 200, fontSize: 24 }}
                  value={difficulty}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "quiz difficulty" }}
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value="Easy">Easy</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Hard">Hard</MenuItem>
                </Select>
                {/* <FormHelperText>Please selected the difficulty</FormHelperText> */}
              </FormControl>

              <Box
                sx={{
                  typography: "body1",
                  fontSize: 24,
                  display: "flex",
                  justifyContent: "left",
                  ml: 3,
                  alignItems: "center",
                }}
              >
                Limit
              </Box>
              <FormControl
                sx={{
                  m: 1,
                  mr: 3,
                  minWidth: 120,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Select
                  name="limit"
                  sx={{ width: 200, fontSize: 24 }}
                  value={limit}
                  onChange={handleChange}
                  displayEmpty
                  // defaultValue={5}
                  inputProps={{ "aria-label": "quiz limit" }}
                >
                  {/* <MenuItem value="">
                  <em>All</em>
                </MenuItem> */}
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                </Select>
                {/* <FormHelperText>Please selected the difficulty</FormHelperText> */}
              </FormControl>

              <Button
                sx={{
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  gridColumn: "span 2",
                  // gridRow: "span 2",
                  mx: "auto",
                  mt: 3,
                  mb: 2,
                  px: 3,
                  py: 1,
                  fontSize: 20,
                  // width: 200,
                  //bgcolor: "#d7FA1e",
                }}
                variant="contained"
                onClick={handleClick}
              >
                Start
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Settings;
