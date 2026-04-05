import { useSelector , useDispatch} from 'react-redux'
import './App.css'
import { useState } from 'react';
import { increment, decrement , reset, incrementByAmount} from './features/counter/counterSlice';

function App() {

  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleResetClick() {
    dispatch(reset());
  }

  function handleIncByAmount(){
    dispatch(incrementByAmount(Number(amount)));
  }

  return (
    <div className='container'>
      <button onClick = {handleIncrementClick}> + </button>
      <p>Count: {count}</p>
      <button onClick = {handleDecrementClick}> - </button>
      <br /> <br />
      <button onClick = {handleResetClick}> Reset </button>
      <br /> <br />
      <input 
      type='Number'
      value={amount}
      placeholder='Enter amount'
      onChange={(e) => setAmount(e.target.value)} 
       />
       <br /> <br />

        <button onClick={handleIncByAmount}> Increment by Amount </button>
    </div>
  )
}

export default App
