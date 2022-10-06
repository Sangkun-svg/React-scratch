import React from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (props) => {
  const saveExpenseDateHandler = (userInputData) => {
    const users = {
      ...userInputData,
      id: Math.random().toString(),
    };
    props.onAddExpense(users);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} />
    </div>
  );
};
