import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../components/todos/todos.slice";
export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});
