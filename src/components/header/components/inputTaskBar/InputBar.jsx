import { Box, Button, TextField } from "@mui/material";
import { ACTION_TYPES } from "./actionTypes";
import { useState } from "react";

function InputBar({ onAction }) {
  const [input, setInput] = useState("");

  const handleClick = () => {
    onAction({ type: ACTION_TYPES.ADD, payload: input });
    setInput("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") handleClick();
  };

  return (
    <Box display="flex" sx={{ gap: 2 }}>
      <TextField
        label="Enter Task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleEnter}
      />
      <Button variant="contained" onClick={handleClick}>
        Add Task
      </Button>
    </Box>
  );
}

export default InputBar;
