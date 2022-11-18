import TodoForm from "./TodoForm";
import classes from "./NewTodo.module.css";

export default function NewTodo(props) {
  const saveTodoDataHandler = async (todoData) => {
    return await props.onAddTodo(todoData);
  };

  return (
    <div className={classes["new-todo"]}>
      <TodoForm saveTodoData={saveTodoDataHandler} />
    </div>
  );
}
