import React, { use } from 'react'
import { useParams } from 'react-router-dom'

const ParamComp = () => {

    const {id} = useParams();
  return (
    <div>
      <h2>Student ID: {id}</h2>
    </div>
  )
}

export default ParamComp
