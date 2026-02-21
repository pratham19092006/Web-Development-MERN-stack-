import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './Components/UserCard'
import babbar from './assets/babbar.webp'
import maharana from './assets/maharana.webp'
import prithvi from './assets/prithvi.webp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <UserCard name="Love Rana" desc="Software Developer" image={babbar} style={{"border-radius":"15px"}}/>

      <UserCard name="Maharana Pratap" desc="Historical Figure" image={maharana}/>

      <UserCard 
      name="PrithviRaj Chauhan" desc="Data Scientist" image={prithvi} style={{"border-radius":"15px"}}/>
    </div>
  )
}

export default App
