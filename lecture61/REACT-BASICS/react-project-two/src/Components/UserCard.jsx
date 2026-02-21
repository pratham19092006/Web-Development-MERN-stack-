import React from 'react'
import babbar from '../assets/babbar.webp'
import './UserCard.css'
const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='title'>{props.name}</p>
        <img id='user-img' src={props.image} alt={props.name}></img>
        <p id='user-desc'>Description of {props.desc}</p>
    </div>
  )
}

export default UserCard
