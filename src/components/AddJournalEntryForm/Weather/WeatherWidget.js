import React, { useState, useEffect } from 'react'
import { useGeoWeather, useQueryWeather } from '../../../hooks/useWeather'
import spinner from '../../../assets/icons/spinner.svg'
import WeatherDataDisplay from './WeatherDataDisplay'

const WeatherWidget = () => {
  const [data, setData] = useState(null)

  let geoWeatherData = useGeoWeather()
  useEffect(() => {
    if (geoWeatherData) {
      setData(geoWeatherData)
    }
  }, [geoWeatherData])

  const [query, setQuery] = useState()
  let queryWeatherData = useQueryWeather(query)
  useEffect(() => {
    if (queryWeatherData) {
      setData(queryWeatherData)
    }
  }, [queryWeatherData])

  return !data ? (
    <div className="loader">
      <img src={spinner} alt="" />
    </div>
  ) : (
    <>
      {data && data.cod === '200' ? (
        <WeatherDataDisplay data={data} />
      ) : (
        data && <h3>{data.message.toUpperCase()}</h3>
      )}
    </>
  )
}

export default WeatherWidget
