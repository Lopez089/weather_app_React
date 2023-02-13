import { Nav, Localition, Weather, Forecast } from './components'

function App() {

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
