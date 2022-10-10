import React from "react";
import { ChartBar } from "./ChartBar";
import "./Chart.css";

export const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((el) => el.value);
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((el) => (
        <ChartBar
          key={el.label}
          value={el.value}
          maxValue={totalMax}
          label={el.label}
        />
      ))}
    </div>
  );
};
