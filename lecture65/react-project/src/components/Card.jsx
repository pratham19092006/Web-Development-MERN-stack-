import React from 'react'

const Card = (props) => {
  return (
    <div>
      {/* <h1>{props.name}</h1> */}

      <input type='text' onChange={(e)=> props.setName(e.target.value)}></input>
      <p>Name state variable ki value inside props: {props.name}</p>
    </div>
  )
}

export default Card
