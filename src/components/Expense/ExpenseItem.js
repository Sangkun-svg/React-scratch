import "./ExpenseItem.css";
import { ExpenseDate } from "../Expense/ExpenseDate";
import { Card } from "../common/Card";

export const ExpenseItem = ({ title, amount, date }) => {
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </Card>
  );
};
