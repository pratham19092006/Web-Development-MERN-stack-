import React from 'react'

const ChildComponent = React.memo(
    (props) => {
        console.log("Child component go re-rendered again", props.value);
      return (
        <div>
          <button onClick={props.handleClick}>
            {props.buttonName}
          </button>
        </div>
      )
    }
)

export default ChildComponent

// Reac.memo -> wrap -> component -> component re-render tabhi hoga jab props change honge nahi to re-render nahi hoga. Isse unnecessary re-rendering se bachaya ja sakta hai.

//  if you are sending a function as a prop to a child component, and that function is recreated on every render, it can cause the child component to re-render unnecessarily and React.memo would not be able to save re-rendering . By using useCallback, you can memoize the function and prevent unnecessary re-renders.