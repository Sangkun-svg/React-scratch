import "./Expenses.css";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../common/Card";
import { ExpensesFilter } from "../ExpensesFilter";
import { useState } from "react";

export const Expenses = ({ expense }) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const filterChangeHadnler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHadnler}
        />
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
    </div>
  );
};
