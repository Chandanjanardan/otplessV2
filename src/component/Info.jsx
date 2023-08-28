import React,{useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { OtplessContext } from '../App'

import "./Info.css"

function Info() {
    const [data,setData]=useContext(OtplessContext)
    const navigate=useNavigate()
    function redirect(){
        navigate("/",{replace:true})
    }
    useEffect(() => {
      const handleBeforeUnload = (e) => {
        e.preventDefault();
        e.returnValue = ''; // This is required for Chrome
      };
  
      window.addEventListener('beforeunload', handleBeforeUnload);
  
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, []); // Empty dependency array ensures the effect runs
    console.log("this is data from info page",data.email)
  return (
    <>
    <div className='info-container'>
    <div className='data token'>

    <h1>Token<br/>{data.token}</h1>
    </div><div className='data name'>

    {data.name?<h1>Name<br/>{data.name}</h1>:<h1 >Login using email for name</h1>}
    </div>
    <div className='data phone'>

    <h1>Phone<br/>{data.phone}</h1>
    </div>
    <div className='data email'>

    {data.email?<h1>Email<br/>{data.email}</h1>:<h1>Login using email for email</h1>}
    </div>
    <div className='data timestamp'>

    <h1>Login time<br/>{data.timestamp}</h1>
    </div>
    <div className='data button'>
    <button className="btn" onClick={redirect}><h3>CLICK HERE AFTER READING DATA</h3></button>
    </div>
    </div>
    </>
  )
}

export default Info