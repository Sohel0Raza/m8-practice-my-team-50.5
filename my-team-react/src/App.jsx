import { useState } from 'react'
import './App.css'
import MyTeam from './components/MyTeam/MyTeam'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <MyTeam></MyTeam>
       <h1>hlooooooooooooo</h1>
    </div>
  )
}
export default App
