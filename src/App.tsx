import { useEffect, useState } from 'react'
import { Nav, Localition, Weather, Forecast } from './components'
import { Location, CurrentWeather } from './model'
import axios from 'axios'

const getData = async () => {
  const res = await axios('../server/index.json')
  if (res.statusText !== 'OK') {
    return Error("tenemos un error");
  }
  return res.data
}

const useWeather = (): IWeather | null => {
  const [weather, setWeather] = useState<IWeather | null>(null)

  useEffect(() => {
    getData()
      .then(res => setWeather(res))
      .catch(err => console.error(err))
  }, [])
  return weather ?
    {
      location: weather.location,
      current_weather: weather.current_weather,
    } : null
}

interface IWeather {
  location: Pick<Location, 'city' | 'country'>
  current_weather: Pick<CurrentWeather, 'summary' | 'temperature' | 'windSpeed' | 'icon'>
}

function App() {

  const weather = useWeather()
  console.log(weather)
  return (
    <div className="bg-slate-700 h-screen text-cyan-50 px-4 ">
      {
        weather ? (
          <>
            <Nav />
            <Localition
              city={weather!.location.city}
              country={weather!.location.country}
            />
            <Weather
              summary={weather!.current_weather.summary}
              temperature={weather!.current_weather.temperature}
              windSpeed={weather!.current_weather.wind_speed}
              icon={weather!.current_weather.icon}

            />
            <Forecast />
          </>

        ) : <h3>Loading...</h3>
      }

    </div >
  )
}

export default App
