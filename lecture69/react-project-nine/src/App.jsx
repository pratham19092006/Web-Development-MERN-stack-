import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './components/ChildA'




  // prop-drilling: when we have to pass data from one component to another component that is not a direct child, we have to pass the data through the intermediate components. This is called prop-drilling. It can be avoided by using context API or state management libraries like Redux.


  // use-Context: it is a way to share data between components without having to pass the data through props. It is a way to avoid pop-drilling.

  // all process within three steps: 

  // 1. create a context: we can create a context using the createContext() method from the react library. It returns an object with two properties: Provider and Consumer.

  // 2. provide the context: we can provide the context to the components that need it using the Provider component. We can pass the data that we want to share as a value prop to the Provider component.

  // 3. consume the context: we can consume the context in the components that need it using the Consumer component. We can access the data that we shared through the value prop of the Provider component.


  // step.1: create a context
  const UserContext = createContext();

  // step.2: wrap all the childs inside the provider component .

  // step.3: pass the data that we want to share as a value prop to the Provider component.

  // step.4: consume the context in the components that need it using the useContext() hook from the react library.

  const ThemeContext = createContext();

  function App() {


  const [user, setUser] = useState({ name: "John", age: 30 });

  const [theme, setTheme] = useState('light');

  return (
    <div>





      <UserContext.Provider value={user}>

        <ThemeContext.Provider value={{theme , setTheme}}>
          <div id='container' style={{backgroundColor:theme === 'light' ? "beige" : "black"}}>
            <ChildA />
          </div>
        </ThemeContext.Provider>


      </UserContext.Provider>
    </div>
  )
}

export default App
export {UserContext}
export {ThemeContext}

