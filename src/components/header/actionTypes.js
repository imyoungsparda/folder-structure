import { ACTION_TYPES as ACTION_TYPES_INPUTBAR } from "./components/inputTaskBar/actionTypes";
import { ACTION_TYPES as ACTION_TYPES_BULKACTIONSBAR } from "./components/bulkActions/actionTypes";

export const ACTION_TYPES = {
  ...ACTION_TYPES_INPUTBAR,
  ...ACTION_TYPES_BULKACTIONSBAR,
};
