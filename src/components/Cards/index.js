import React from "react"
import { Row, message, Col } from "antd"
import AntCard from "./components/AntCard"

const handleChange = date => {
  message.info(`Selected Date: ${date ? date.format("YYYY-MM-DD") : "None"}`)
}

const Cards = ({ data }) => {
  const { confirmed, recovered, deaths, lastUpdate } = data
  console.log("Cards data", data)

  return confirmed ? (
    <Row>
      <Col xs={24} sm={12} lg={8}>
        <AntCard
          title="Infected"
          description="Number of active cases of COVID-19"
          cases={confirmed.value}
          date={new Date(lastUpdate).toDateString()}
        />
      </Col>
      <Col xs={24} sm={12} lg={8}>
        <AntCard
          title="Deaths"
          description="Number of deaths cases caused by COVID-19"
          cases={deaths.value}
          date={new Date(lastUpdate).toDateString()}
        />
      </Col>
      <Col xs={24} sm={12} lg={8}>
        <AntCard
          cases={recovered.value}
          title="Recovered"
          description="Number of recovered cases of COVID-19"
          date={new Date(lastUpdate).toDateString()}
        />
      </Col>
    </Row>
  ) : (
    "Loading..."
  )
}

export default Cards
