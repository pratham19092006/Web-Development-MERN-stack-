import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import './components/TimerComponent.jsx'
import TimerComponent from './components/TimerComponent.jsx'
import LoggerComponent from './components/LoggerComponent.jsx'
import DataFetcher from './components/DataFetcher.jsx'
import MultiEffectComponent from './components/MultiEffectComponent.jsx'
import ResizeComponent from './components/ResizeComponent.jsx'

function App() {

  // useEffect hook: 

  //  it is a type of react hook by which we can genera te side effects in our react component.

  //  it is used to perform side effects in function components.

  // example:

  // 1. as DOM content loaded, DB connection will be established.

  // 2. as user clicks on the button, the data will be fetched from the server.

  // 3. in counter app, as count updated, alert/toast/ dialogue box will be shown to the user.

  // 4. As user logs in, the user data will be fetched from the server and stored in the state.


  // first -> side-effect function (that is which action we want to perform as side effect ex. alert, db connection, data fetching etc.)

  // second -> clean-up function (that is which action we want to remove partcular event listener as clean up ex. closing db connection, removing event listener etc.)

  // third -> comma separated dependency list (that is which state or props change will trigger the side effect function)
  
  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
  

  // variation 1: 
  // runs on every render (initial render + every update)

  // useEffect(() => {
  //   alert('useEffect called, and will run on every render (initial render + every update)');
  // })

  // variation 2:
  // runs only on initial render

  // useEffect(() => {
  //   alert('useEffect called, and will run only on initial/first render');
  // }, [])

  // variation 3:
  // runs on initial render + every update when count changes

  // useEffect(() => {
  //   alert('i will run every time when count is updated ');
  // }, [count])


  // variation 4:
  // multiple dependencies: runs on initial render + every update when count or total changes

  // useEffect(() => {
  //     alert('i will run every time when count or total is updated ');
  // }, [count, total])

  // vriation 5:
  // adding clean up function:

  // useEffect(() => {
  //   alert('count is updated');

  //   return () => {
  //     alert('count is unmounted/removed/updated');
  //   }
  // }, [count])

  // function handleClick() {
  //   setCount(count + 1);
  //   setTotal(total + 1);
  // }


  return (
    <div>


      {/* <TimerComponent /> */}
      {/* <LoggerComponent /> */}
      <DataFetcher />
      {/* <MultiEffectComponent /> */}
      {/* <ResizeComponent /> */}


      {/* <button onClick={handleClick}>update count</button>
      <br />
      {count} times clicked
      <br />
      <button onClick={handleClick}>update total</button>
      
      <br />
      Total is: {total} */}
    </div>
  )
}

export default App
