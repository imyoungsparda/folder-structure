import { Box } from "@mui/material";
import InputBar from "./components/inputTaskBar/InputBar";
import BulkActionsBar from "./components/bulkActions/BulkActionsBar";

function Header({ onAction }) {
  return (
    <Box
      display="flex"
      sx={{ alignItems: "center", justifyContent: "space-between" }}
    >
      <InputBar onAction={onAction} />
      <BulkActionsBar onAction={onAction} />
    </Box>
  );
}

export default Header;
