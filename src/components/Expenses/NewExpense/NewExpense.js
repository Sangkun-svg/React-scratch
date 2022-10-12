import React, { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const visibleHandler = () => {
    setIsVisible(!isVisible);
  };

  const saveExpenseDateHandler = (userInputData) => {
    const users = {
      ...userInputData,
      id: Math.random().toString(),
    };
    props.onAddExpense(users);
  };

  return (
    <div className="new-expense">
      {isVisible === false && (
        <button onClick={visibleHandler}>Add New Button</button>
      )}
      {isVisible === true && (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDateHandler}
          onClickVisibleToggle={visibleHandler}
        />
      )}
    </div>
  );
};
