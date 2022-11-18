import classes from "./Card.module.css";

export default function Card(props) {
  const cardClass = `${classes.card} ${props.className}`;
  return <div className={cardClass}>{props.children}</div>;
}
