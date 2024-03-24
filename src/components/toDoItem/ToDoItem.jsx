import { CheckCircleOutline, Delete } from "@mui/icons-material";
import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import { ACTION_TYPES } from "./actionTypes";

function ToDoItem({ todo, onAction }) {
  return (
    <Box
      display="flex"
      sx={{ gap: 4, justifyContent: "center", alignItems: "center" }}
    >
      <Checkbox
        checked={todo.isSelected}
        onChange={() =>
          onAction({ type: ACTION_TYPES.TOGGLE_SELECT, payload: todo.id })
        }
      />
      <Typography variant="h6" color={todo.isCompleted && "red"}>
        {todo.label}
      </Typography>
      <Box display="flex" sx={{ gap: 1.5 }}>
        <IconButton
          onClick={() =>
            onAction({ type: ACTION_TYPES.TOGGLE_COMPLETE, payload: todo.id })
          }
        >
          <CheckCircleOutline />
        </IconButton>
        <IconButton
          onClick={() =>
            onAction({ type: ACTION_TYPES.DELETE, payload: todo.id })
          }
        >
          <Delete />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ToDoItem;
