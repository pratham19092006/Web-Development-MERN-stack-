import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  function handleClick() {
    alert('Button clicked!');
  }

  function handleMouseOver() {
    alert('para ke upar mouse hai tera!');
  }

  function handleInputChange(event) {
    console.log('Input value me :', event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); // Form ke default behavior ko rokte hain that is custom handling karne ke liye
    // pass with arrow function always better to avoid immediate invocation don't invoke immediate 
    alert('Form submitted!');
  }

  return ( 
    <div>

      <button onClick={alert('Button click hua hai!')}>
      {/* immediate invocation is happening here if we write like this, when page render this will be shown doesn't matter you have clicked or not  */}
        Click me
      </button>


      <form>

      <input type="text" onChange={handleInputChange}/>

      <button type='submit' onClick={handleSubmit}>Submit</button>

      </form>

      <p onMouseOver={handleMouseOver} style={{border: "1px solid black", width: "100px", padding: "10px", height: "50px"}}>
        I ma a para
      </p>

      <button className='btn' onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default App
