import React from "react";

import "./ExpensesFilter.css";

export const ExpensesFilter = (props) => {
  const years = [2022, 2021, 2020, 2019];
  const dropdownYears = () => {
    return years.map((el, idx) => {
      return (
        <option key={idx} value={el}>
          {el}
        </option>
      );
    });
  };
  const dropdownChangeHandler = ({ target: { value } }) => {
    props.onChangeFilter(value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {dropdownYears()}
        </select>
      </div>
    </div>
  );
};
