import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

const WatchersLangsGraph = () => {
  const data = {
    labels: [
      "JavaScript",
      "HTML",
      "CSS",
      "Java",
      "TypeScript",
      "Python",
      "PHP",
      "Shell",
      "C++",
      "C",
    ],
    datasets: [
      {
        data: [18.27, 16.4, 14.19, 5.68, 4.67, 4.61, 4.42, 3.23, 3.2, 3.03],
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
export default WatchersLangsGraph;
