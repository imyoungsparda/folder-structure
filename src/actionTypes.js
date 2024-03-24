import { ACTION_TYPES as TODOITEM_ACTION_TYPES } from "./components/toDoItem/actionTypes";
import { ACTION_TYPES as ADDTODO_ACTION_TYPES } from "./components/header/actionTypes";

export const ACTION_TYPES = {
  ...TODOITEM_ACTION_TYPES,
  ...ADDTODO_ACTION_TYPES,
};
