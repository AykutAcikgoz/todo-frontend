import axios from "axios";

const BASE_URL = "https://todo-backend-pearl.vercel.app/api/tasks";

const getTodos = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const changeStatus = async (todo) => {
  try {
    const response = await axios.put(`${BASE_URL}/${todo._id}`, {
      status: todo.status === "INCOMPLETE" ? "COMPLETED" : "INCOMPLETE",
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const addTodo = async (todo) => {
  try {
    const response = await axios.post(`${BASE_URL}`, todo);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getTodos, changeStatus, addTodo };
