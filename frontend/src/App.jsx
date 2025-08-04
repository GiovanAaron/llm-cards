import { useState } from 'react'
import './App.css'
import List from './pages/List.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       Dynamic Result Viewer
      </div>
      <List />
     
    </>
  )
}

export default App
