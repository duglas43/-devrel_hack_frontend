import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

const LangsGraph = () => {
  const data = {
    labels: ["JavaScript", "C++", "Python", "C", "HTML", "MakeFile", "Other"],
    datasets: [
      {
        data: [62.9, 20.8, 11.7, 2.9, 0.8, 0.3, 0.6],
        backgroundColor: [
          "#f1e05a",
          "#f34b7d",
          "#3572A5",
          "#555555",
          "#e34c26",
          "#b07219",
          "#000000",
        ],
        hoverOffset: 4,
        hoverBackgroundColor: [
          "#f1e05a",
          "#f34b7d",
          "#3572A5",
          "#555555",
          "#e34c26",
          "#b07219",
          "#000000",
        ],
      },
    ],
  };

  return <Doughnut className="body-bg" data={data} />;
};
export default LangsGraph;
