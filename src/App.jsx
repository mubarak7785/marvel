import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Component_a } from './components/componentA/Component_a'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Component_a/>
    </div>
  )
}

export default App
