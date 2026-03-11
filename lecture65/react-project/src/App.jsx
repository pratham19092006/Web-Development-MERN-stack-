import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  // create state
  // manage state
  // change state
  // sabhi child me state ko sync krnaa

  const [name, setName] = useState('');

  return (
    <div>
      <Card title="Card1" name = {name} setName = {setName} />
      <Card title="Card2" name = {name} setName = {setName} />
      
      <p>I am inside parent component and value of name is: {name}</p>

    </div>
  )
}

export default App
