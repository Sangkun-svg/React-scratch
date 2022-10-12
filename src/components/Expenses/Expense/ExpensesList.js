import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";

export const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found not expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((el) => {
        return (
          <ExpenseItem
            key={el.id}
            title={el.title}
            amount={el.amount}
            date={el.date}
          />
        );
      })}
    </ul>
  );
};
