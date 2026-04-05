import { useState , useMemo} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num){
    for(let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }

  const doubleValue = useMemo(() => expensiveTask(input), [input]);

  useMemo(() => expensiveTask(input), [input])
  // first parameter is the function that we want to memoize
  // second parameter is the dependency array, it will only re-run the function if the value in the dependency array changes

  // it will only store the answer of last input value or prevously given input value, if we give same input value again it will return the stored answer instead of re-running the function, if we give new input value it will re-run the function and store the new answer

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <div>
        Count: {count}
      </div>

      <input
        type='Number'
        placeholder='Enter number'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div>
        Double: {doubleValue}
      </div>

    </div>
  )
}

export default App
