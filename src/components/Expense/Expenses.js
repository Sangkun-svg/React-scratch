import "./Expenses.css";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../common/Card";
export const Expenses = ({ expense }) => {
  return (
    <Card className="expenses">
      {expense.map((el) => {
        return (
          <ExpenseItem
            key={el.id}
            title={el.title}
            amount={el.amount}
            date={el.date}
          />
        );
      })}
    </Card>
  );
};
