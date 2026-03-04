import React from 'react'

const LogoutBtn = (props) => {
  return (
    <div>
      
      <button onClick={() => props.setLoggedIn(false)}>Logout</button>
    </div>
  )
}

export default LogoutBtn
