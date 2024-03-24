import { Box, Button } from "@mui/material";
import { ACTION_TYPES } from "./actionTypes";

function BulkActionsBar({ onAction }) {
  return (
    <Box display="flex" sx={{ gap: 2 }}>
      <Button
        variant="outlined"
        onClick={() => onAction({ type: ACTION_TYPES.MARK_SELCTED_COMPLETE })}
      >
        Mark Complete
      </Button>
      <Button
        variant="contained"
        onClick={() => onAction({ type: ACTION_TYPES.DELETE_SELECTED })}
      >
        Delete{" "}
      </Button>
    </Box>
  );
}

export default BulkActionsBar;
