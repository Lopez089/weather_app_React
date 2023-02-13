import { useEffect, useState } from 'react'
import { Nav, Localition, Weather, Forecast } from './components'
import axios from 'axios'

const getData = async () => {
  const res = await axios('../server/index.json')
  if (res.statusText !== 'OK') {
    return Error("tenemos un error");

  }
  return res.data
}

function App() {
  const [weather, setWeather] = useState([])

  console.log(weather)

  useEffect(() => {
    getData()
      .then(res => setWeather(res))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="bg-slate-700 h-screen text-cyan-50 px-4 ">
      <Nav />
      <Localition />
      <Weather />
      <Forecast />
    </div >
  )
}

export default App
