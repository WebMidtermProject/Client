import React from "react";

import ChartBar from "./ChartBar";

import "./css/Chart.css";

const Chart = () => {
  const maxValue = 100;
  return (
    <div className="chart">
      <ChartBar
        key="1"
        value="10"
        maxValue={maxValue}
        label={"Answer 1"}
      ></ChartBar>
      <ChartBar
        key="2"
        value="45"
        maxValue={maxValue}
        label={"Answer 2"}
      ></ChartBar>
      <ChartBar
        key="3"
        value="25"
        maxValue={maxValue}
        label={"Answer 3"}
      ></ChartBar>
      <ChartBar
        key="4"
        value="20"
        maxValue={maxValue}
        label={"Answer 4"}
      ></ChartBar>
    </div>
  );
};

export default Chart;
