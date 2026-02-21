import React, { useState } from 'react'
import './counter.css'
const Counter = () => {

    // useState is a Hook that allows you to have state variables in functional components. You can initialize a state variable and a function to update it. It provides 2 things: state variable and state updater function. The state variable holds the current value, and the updater function allows you to change that value and trigger a re-render of the component.         

    const [count, setCount] = useState(0);
  return (
    <div className='counter-container'>
      <p id="para">You have Clicked {count} times</p>
      <button id="btn" onClick={()=> {setCount(count+1)}}>Click Me</button>
    </div>
  )
}

export default Counter
