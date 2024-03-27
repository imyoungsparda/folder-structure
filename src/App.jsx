import { Box, Divider, Typography } from "@mui/material";
import "./App.css";
import ToDoItem from "./components/toDoItem";
import { useAddToDo } from "./hooks/useAddToDo";
import Header from "./components/header/Header";

function App() {
  const { state, onAction } = useAddToDo();
  const { todos } = state;

  return (
    <Box
      sx={{
        width: "60%",
        margin: "0 auto",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography variant="h2">To Do Application</Typography>
      <Divider />
      <Header onAction={onAction} />
      <Divider />
      <Box display="flex" sx={{ flexDirection: "column", gap: 1 }}>
        {todos.map((todo, i) => (
          <ToDoItem key={i} todo={todo} onAction={onAction} state={state} />
        ))}
      </Box>
    </Box>
  );
}

export default App;
