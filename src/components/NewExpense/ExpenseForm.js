import React, { useState } from "react";
import "./ExpenseForm.css";

export const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const userInputHandler = ({ target: { name, value } }) => {
    // setUserInput({ ...userInput, [name]: value });
    //TODO: 위 방식은 이전 State에 의존한다. => 오래되거나 잘못된 스냅샷에 의존할 수 있게된다
    setUserInput((prevState) => {
      return { ...prevState, [name]: value };
      // 이 방식을 사용하면 항상 최신 상태의 스냅샷에서 작업하 수 있는 조금 더 안전한 방법
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseDate(userInput);
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={userInput.title}
            onChange={userInputHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            name="amount"
            value={userInput.amount}
            onChange={userInputHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min={"2022-09-01"}
            max={"2022-12-31"}
            name="date"
            value={userInput.date}
            onChange={userInputHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
