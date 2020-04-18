import React, { useEffect, useState } from "react"

import { Select } from "antd"
import { fetchCountries as fetchCountriesFromApi } from "../../api"
const { Option } = Select

// function handleChange(value) {
//   console.log(`2selected ${value}`)
// }

const CountryPicker = ({ handleChange }) => {
  const [isLoading, setIsLoading] = useState()
  const [countries, setCountries] = useState([])
  useEffect(() => {
    setIsLoading(true)
    const fetchCountries = async () => {
      setCountries(await fetchCountriesFromApi())
    }

    setIsLoading(false)
    fetchCountries()
  }, [])

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={handleChange}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="placeholder" disabled>
        Select a country
      </Option>
      {countries.map(({ name }) => (
        <Option key={name} value={name}>
          {name}
        </Option>
      ))}
    </Select>
  )
}

export default CountryPicker
