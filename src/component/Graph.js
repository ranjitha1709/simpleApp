// StockGraph.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const Graph = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual Alpha Vantage API key
    axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=YOUR_API_KEY`
    )
      .then((response) => {
        const data = response.data["Time Series (5min)"];
        const timeStamps = Object.keys(data);
  const openPrices = timeStamps.map(timestamp => parseFloat(data[timestamp]['1. open']));

const chartData = {
    labels: timeStamps,
    datasets: [
      {
        label: 'IBM Stock Open Prices (5-Min Intervals)',
        data: openPrices,
        fill: false,
        borderColor: 'blue',
      },
    ],
  };

  // Define the chart options (you can customize this further)
 
 if (chartData) {
          chartData.destroy();
        }

        setChartData(chartData);
      })
      .catch((error) => {
        console.error("Error fetching stock data: ", error);
      });
  }, []);
 const chartOptions = {
    scales: {
      x: [
        {
          type: 'time',
          time: {
            unit: 'minute',
          },
        },
      ],
      y: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Open Price',
          },
        },
      ],
    },
  };
  return (
      <div className="chart">
    {chartData.labels ? (
      <Line data={chartData} options={chartOptions}/>
    ) : (
      <p>Loading chart data...</p>
    )}
  </div>
  );
};

export default Graph;
