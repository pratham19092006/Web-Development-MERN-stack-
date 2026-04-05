import React, {useState, useCallback,useRef, useEffect} from 'react'

const ExpensiveComponent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const previousFunction= useRef(null);

    const expensiveCalculation = useCallback(
        () => {
            console.log("Running expensive calculation...");
            let result = 0;
            for (let i = 0; i < 1000000000; i++) {
                result += i;
            }
            return result;
        },
        [count] // function will be recreated only if count is updated.
    )

    useEffect(() => {
      if(previousFunction.current){
        if(previousFunction.current === expensiveCalculation){
            console.log("Function is same as previous one, no need to re-run expensive calculation");
        }else{
            console.log("Function is different from previous one, re-run expensive calculation");
        }
      }else{
        previousFunction.current = expensiveCalculation;
      }
    }, [expensiveCalculation])
    

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Type something'
            />
            <p>
                Expensive Calculation Result: {expensiveCalculation()}
            </p>
            <button onClick = {() => setCount(count+1)}>
                Increament Count
            </button>
        </div>
    );

};

export default ExpensiveComponent