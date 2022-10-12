import "./Expenses.css";
import { ExpensesList } from "./ExpensesList";
import { ExpenseChart } from "./ExpenseChart";
import { Card } from "../../common/Card";
import { ExpensesFilter } from "../ExpensesFilter";
import { useState } from "react";

export const Expenses = ({ expense }) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const filterChangeHadnler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expense.filter((el) => {
    return el.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHadnler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
