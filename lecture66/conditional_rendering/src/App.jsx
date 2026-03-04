
import './App.css'
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';
import { useState } from 'react';

function App() {

  const [isLoggedIn, setLoggedIn] = useState(true);


  // conditional rendering using if-else statement 

  // if(isLoggedIn){
  //   return (
  //     <LogoutBtn setLoggedIn={setLoggedIn} />
  //   )
  // }
  // else{
  //   return  (
  //     <LoginBtn setLoggedIn={setLoggedIn} />
  //   )
  // }


  // conditional rendering using ternary operator

  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn setLoggedIn={setLoggedIn} /> : <LoginBtn setLoggedIn={setLoggedIn} />}
  //   </div>
  // )


  // using logical && operator for conditional rendering

  // return  (
  //   <div>
  //     <h1> Welcome everyone to Codehelp Web Dev course</h1>

  //     {isLoggedIn && <LogoutBtn setLoggedIn={setLoggedIn} />}
  //     {!isLoggedIn && <LoginBtn setLoggedIn={setLoggedIn} />}
  //   </div>
  // )



  // early return pattern for conditional rendering

  if(!isLoggedIn){
    return (
      <LoginBtn setLoggedIn={setLoggedIn} />
    )
  }
    
  
  return  (
    <div>
      <h1> Welcome everyone to Codehelp Web Dev course</h1>

      {isLoggedIn && <LogoutBtn setLoggedIn={setLoggedIn} />}
    </div>
  )


  



  
}

export default App
