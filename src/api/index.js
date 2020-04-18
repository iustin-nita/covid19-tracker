import axios from "axios"

const url = "https://covid19.mathdro.id/api"

export const fetchData = async country => {
  let changeableUrl = url
  console.log("fetchDatafetchDatafetchData", country)
  if (country) {
    changeableUrl = `${url}/countries/${country}`
  }

  try {
    const { data } = await axios.get(changeableUrl)
    console.log("try", data)
    return data
  } catch (error) {
    console.log("err fetchData", error)
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`)

    console.log("fetchDailyData data", data)

    const modifiedData = data.map(dailyData => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }))

    return modifiedData
  } catch (error) {
    console.log("err in fetchDailyData", error)
  }
}

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`)
    console.log("data.countries", data.countries)
    return data.countries
  } catch (error) {
    console.log("error in countries", error)
  }
}
