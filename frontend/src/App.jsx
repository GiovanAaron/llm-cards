import { useState } from 'react'
import './App.css'
import List from './pages/List.jsx'
import hewyaLogo from './assets/hewya_logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <img src={hewyaLogo} className="logo" alt="Hewya Logo" style={{ display: 'block', textAlign: 'left' }} />
      <h2>
       Dynamic Result Viewer
      </h2>
      <List />
     
    </div>
  )
}

export default App
