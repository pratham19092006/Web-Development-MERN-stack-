import './App.css'
import { useState, useEffect, useRef } from 'react'

function App() {
  // const [count, setCount] = useState(0);

  // let val = useRef(1);
  // // here re-render will not happen when we update the value of val because it is a ref and not a state variable. 

  // let btnRef =useRef();

  // function handleIncrement() {
  //   val.current += 1;
  //   console.log("Value of val:", val);
  //   setCount(count+1);
  // }

  // useEffect(() => {
  //   console.log("mai fir se render ho gayaaa hu ");
  // })

  // function changeColor() {
  //   let red = Math.floor(Math.random() * 256);
  //   let green = Math.floor(Math.random() * 256);
  //   let blue = Math.floor(Math.random() * 256);
  //   btnRef.current.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  // }


  //  2 use cases of useRef:
  // 1. it persist the value between re-render and does not cause re-render when the value is updated.
  // 2. it can be used to access the DOM elements directly.
  // 2.1: create ref
  // 2.2: attach ref to the element
  // 2.3: access the element using ref.current

  const [time, setTime] = useState(0);
  let timerRef = useRef(null);

  function startStopwatch() {
    timerRef.current = setInterval(() => {
      setTime(time => time+1)
    }, 1000);
  }

  function stopStopwatch() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetStopwatch() {
    stopStopwatch();
    setTime(0);
  }
 
  
  

  return (
    <div>



      <h1>StopWatch: {time} seconds</h1>
      <br /><br />

      <button onClick={startStopwatch}>Start</button>
      <br /><br />

      <button onClick={stopStopwatch}>Stop</button>
      <br /><br />

      <button onClick={resetStopwatch}>Reset</button>
      <br /><br />


      {/* <button 
      ref = {btnRef}
      onClick={handleIncrement}>Increment</button>

      <br /> <br />


      <button onClick={changeColor}>
        Chnage color of first button
      </button>

      <br /> <br />

      <div>
        Count: {count}
      </div> */}
    </div>
  )
}

export default App
