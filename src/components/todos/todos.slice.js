import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    setTodos: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addTodo, setTodos } = todosSlice.actions;

export default todosSlice.reducer;
