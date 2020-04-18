import React, { useState, useEffect } from "react"
import { fetchDailyData } from "../../api"
import { Line, Bar } from "react-chartjs-2"

const Chart = ({ country, data: { confirmed, deaths, recovered } }) => {
  const [dailyData, setDailyData] = useState({})

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData())
    }

    console.log("Chart dailyData", dailyData)

    fetchAPI()
  }, [])

  console.log("country, data", country, confirmed, deaths, recovered)

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Deaths", "Recovered"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(255,0,0,0.5)",
              "rgba(0,255, 0 ,0.5)",
            ],
            data: [confirmed.value, deaths.value, recovered.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        text: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null

  return <div>{country ? barChart : lineChart} </div>
}

export default Chart
