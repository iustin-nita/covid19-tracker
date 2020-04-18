import React, { Component, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Cards, Chart, CountryPicker } from "../components"
import "antd/dist/antd.css" // or 'antd/dist/antd.less'

// import styles from "../styles"

import { fetchData, fetchDailyData } from "../api"

class IndexPage extends Component {
  // useEffect(() => {
  //   const data = fetchData()

  //   console.log("data", data)
  // }, [])

  state = {
    data: {},
    country: "",
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    console.log("dsata", fetchedData)

    this.setState({ data: fetchedData })
  }

  handleCountryChange = async country => {
    const fetchedData = await fetchData(country)
    console.log(fetchedData)

    this.setState({ data: fetchedData, country: country })
  }

  render() {
    const { data, country } = this.state

    return (
      <Layout>
        <SEO title="Home" />
        {/* <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
        <div className="container">
          <Cards data={data} />
          <CountryPicker data={data} handleChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>

        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage
