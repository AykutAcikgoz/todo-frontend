import classes from "./TodoDate.module.css";

export default function TodoDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className={classes["todo-date"]}>
      <div className={classes["todo-date_month"]}>{month}</div>
      <div className={classes["todo-date_day"]}>{day}</div>
      <div className={classes["todo-date_year"]}>{year}</div>
    </div>
  );
}
