import './App.css'
import { useCallback, useState } from 'react';
import ChildComponent from './components/ChildComponent.jsx';
import ExpensiveComponent from './components/ExpensiveComponent.jsx';

function App() {
  const [count, setCount] = useState(0);

  // whenever we update the count state, the App component re-renders and the handleClick function is recreated. This can cause unnecessary re-renders of child components that receive handleClick as a prop, even if the function's logic hasn't changed.

  // function handleClick(){
  //   setCount(count + 1);
  // }

  const handleClick = useCallback(() => {
    setCount(count + 1);
  },  [count]) // dependency array;
  // here function is memoized and it assumed like it will always get 0 as count value, so it will always set count to 1. To fix this issue we can add count as a dependency in the dependency array of useCallback, so that the function will be recreated only when the count value changes.


  // useCallback is used to memoize the function, so that it doesn't get recreated on every render. This can be useful when passing the function as a prop to child components, to prevent unnecessary re-renders.

  // useCases:

  // 1. unnecessary re-render of child components: If you have a child component that receives a function as a prop, and that function is recreated on every render, it can cause the child component to re-render unnecessarily. By using useCallback, you can memoize the function and prevent unnecessary re-renders.

  return (
    <div>
      <div>
        Count: {count}
      </div>

      <br /><br />

      <div>
        <button onClick= {handleClick}>
          Increment
        </button>
      </div>
      <br /><br />

      <div>
        <ChildComponent buttonName = "Click me"
        handleClick ={handleClick}
        value = {count} />
      </div>
      <br /><br />
      <div>
        <ExpensiveComponent />
      </div>
    </div>

    // 2. expensive calculations: If you have a function that performs an expensive calculation, and that function is recreated on every render, it can cause performance issues. By using useCallback, you can memoize the function and prevent unnecessary re-renders.

    // useMemo: memoize the value returned by a function. It saves from re-run.
    // useCallback: memoize the function reference itself, so that it doesn't get recreated on every render. It don't save it from re-run, but we save it from re-creation.
  )
}

export default App
