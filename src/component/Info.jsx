import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { OtplessContext } from '../App'

function Info() {
    const [data,setData]=useContext(OtplessContext)
    const navigate=useNavigate()
    function redirect(){
        navigate("/",{replace:true})
    }
    console.log("this is data from info page",data.email)
  return (
    <>
    <h1>Token:{data.token}</h1>
    {data.name?<h1>Name:{data.name}</h1>:<h1>Login using email for name</h1>}
    <h1>Phone:{data.phone}</h1>
    {data.email?<h1>Email:{data.email}</h1>:<h1>Login using email for email</h1>}
    <h1>Login time:{data.timestamp}</h1>
    <div>Info</div>
    <button onClick={redirect}>Click me harder</button>
    </>
  )
}

export default Info