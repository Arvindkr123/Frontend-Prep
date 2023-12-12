import { createContext, useContext } from "react";

const TodoContext = createContext({
  todos: [{}],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodoContext = () => {
  return useContext(TodoContext);
};
