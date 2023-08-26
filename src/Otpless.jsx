import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Otpless() {
    const navigate=useNavigate()
    function redirect(){
        navigate("/", { replace: true })

    }
  return (
    <>
    <div>Otpless</div>
    <button onClick={redirect}>Click to go back</button>
    </>
  )
}

export default Otpless