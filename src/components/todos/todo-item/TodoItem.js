import TodoDate from "../todo-date/TodoDate";
import classes from "./TodoItem.module.css";

import Card from "../../common/Card";
import { FaHandPointUp } from "react-icons/fa";

export default function TodoItem(props) {
  const statusClasses = `todo-item_status_${
    props.item.status === "INCOMPLETE" ? "incomplete" : "completed"
  }`;

  const deadline = new Date(props.item.deadline);
  const now = new Date();

  const deadlineMissed = `${
    props.item.status === "INCOMPLETE" && now.getTime() > deadline.getTime()
      ? "deadline_missed"
      : "deadline_not_missed"
  }`;
  return (
    <Card className={`${classes["todo-item"]} ${classes[deadlineMissed]}`}>
      <TodoDate date={deadline}></TodoDate>
      <div className={classes["todo-item_text"]}>
        <h2>{props.item.title}</h2>
        <h3>{props.item.description}</h3>
      </div>
      <div className={classes[statusClasses]}>{props.item.status}</div>
      <div
        className={classes["todo-item_status_change"]}
        onClick={() => props.onChangeStatus(props.item)}
      >
        <FaHandPointUp color="white" />
      </div>
    </Card>
  );
}
