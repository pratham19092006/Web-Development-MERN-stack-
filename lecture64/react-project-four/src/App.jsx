import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <div>


      <Button increamentCount={handleClick} text = "Click Me">
      <h1>Count: {count}</h1>
      </Button>

      <Card name = "pratham mishra">
      {/* all inside Card tag is called children of Card component  */}
      <h1>Best Web Dev Course</h1>
      <p>Trying to be consistent in this course</p>  
      <p>Will complete the course soon</p>
      </Card>

      <Card children="i am chilfren my brother">
      {/* here 2 types of cildren are created, by passing and as a child of Card , then inner child of Card is prioritise */}
      I am the best in my mind</Card>
    </div>
  )
}

export default App
