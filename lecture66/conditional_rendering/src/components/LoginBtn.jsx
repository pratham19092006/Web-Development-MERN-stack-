import React from 'react'

const LoginBtn = (props) => {
  return (
    <div>
        <button onClick={() => props.setLoggedIn(true)}>Login</button>
    </div>
  )
}

export default LoginBtn
