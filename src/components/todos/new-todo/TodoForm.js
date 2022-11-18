import { useState } from "react";
import classes from "./TodoForm.module.css";

export default function TodoForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("INCOMPLETE");
  const [showForm, setShowForm] = useState(false);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const statusChangeHandler = (event) => {
    setStatus(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (
      await props.saveTodoData({
        title: title,
        description: description,
        deadline: new Date(date),
        status: status,
      })
    ) {
      clearForm();
      setShowForm(false);
    }
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setDate("");
    setStatus("");
  };

  const cancelAddNewTodoHandler = (event) => {
    setShowForm(false);
  };

  if (!showForm)
    return (
      <div className={classes["new-todo_actions"]}>
        <button
          type="button"
          onClick={() => {
            setShowForm(true);
          }}
        >
          Add New Todo
        </button>
      </div>
    );
  return (
    <form onSubmit={submitHandler}>
      <div className={classes["new-todo_controls"]}>
        <div className={classes["new-todo_control"]}>
          <label>Title</label>
          <input value={title} type="text" onChange={titleChangeHandler} />
        </div>
        <div className={classes["new-todo_control"]}>
          <label>Description</label>
          <input
            value={description}
            type="text"
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className={classes["new-todo_control"]}>
          <label>Deadline</label>
          <input
            value={date}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className={classes["new-todo_control"]}>
          <label>Status</label>
          <select value={status} onChange={statusChangeHandler}>
            <option value="INCOMPLETE">INCOMPLETE</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>
        </div>
      </div>

      <div className={classes["new-todo_actions"]}>
        <button type="button" onClick={cancelAddNewTodoHandler}>
          Cancel
        </button>
        <button type="submit">Add Todo</button>
      </div>
    </form>
  );
}
