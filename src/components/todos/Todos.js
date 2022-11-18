import classes from "./Todos.module.css";
import TodoItem from "../todos/todo-item/TodoItem";
import Card from "../common/Card";
import { useEffect } from "react";
import NewTodo from "./new-todo/NewTodo";
import { getTodos, changeStatus, addTodo } from "../../api/todos.api";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "./todos.slice";

export default function Todos() {
  const todos = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      await fetch();
    }
    fetchData();
  }, []);

  const addTodoHandler = async (todo) => {
    const response = await addTodo(todo);
    if (response.success) {
      await fetch();
    }
    return response.success;
  };

  const changeStatusHandler = async (todo) => {
    const response = await changeStatus(todo);
    if (response.success) {
      await fetch();
    } else alert(response.message);
  };

  const fetch = async () => {
    const response = await getTodos();
    if (response.success) dispatch(setTodos(response.data));
    else alert(response.message);
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Card className={classes.todos}>
        {todos.length === 0 && <p>No todos found.</p>}
        {todos.length > 0 &&
          todos.map((item) => (
            <TodoItem
              key={item._id}
              item={item}
              onChangeStatus={changeStatusHandler}
            ></TodoItem>
          ))}
      </Card>
    </div>
  );
}
