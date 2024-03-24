import { useCallback, useState } from "react";
import { ACTION_TYPES } from "../actionTypes";

export const useAddToDo = () => {
  const [todos, setToDos] = useState([]);

  const handleSubmit = (input) => {
    setToDos((prev) => [
      ...prev,
      {
        id: Math.random(),
        label: input,
        isCompleted: false,
        isSelected: false,
      },
    ]);
  };

  const handleDelete = (id) => {
    setToDos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setToDos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleToggleSelect = (id) => {
    setToDos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isSelected: !todo.isSelected } : todo
      )
    );
  };

  const handleMarkComplete = () => {
    setToDos((prev) =>
      prev.map((todo) =>
        todo.isSelected ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDeleteSelected = () => {
    setToDos((prev) => prev.filter((todo) => todo.isSelected === false));
  };
  const onAction = useCallback(
    (action) => {
      const { type, payload } = action;
      switch (type) {
        case ACTION_TYPES.ADD:
          handleSubmit(payload);
          break;
        case ACTION_TYPES.DELETE:
          handleDelete(payload);
          break;
        case ACTION_TYPES.TOGGLE_SELECT:
          handleToggleSelect(payload);
          break;
        case ACTION_TYPES.TOGGLE_COMPLETE:
          handleToggleComplete(payload);
          break;
        case ACTION_TYPES.MARK_SELCTED_COMPLETE:
          handleMarkComplete();
          break;
        case ACTION_TYPES.DELETE_SELECTED:
          handleDeleteSelected();
          break;
        default:
          break;
      }
    },
    [todos]
  );
  return { state: { todos }, onAction };
};
