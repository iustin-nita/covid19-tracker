import React from "react"

import { Card } from "antd"
import CountUp from "react-countup"
// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
// } from "@ant-design/icons"

const { Meta } = Card

const AntCard = ({ title, description, cases, date }) => (
  <Card style={{ width: 300 }}>
    <h2>{date}</h2>
    <CountUp end={cases} duration={3} />
    <Meta title={title} description={description} />
  </Card>
)

export default AntCard
