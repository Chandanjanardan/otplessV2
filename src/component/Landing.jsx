import React,{useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { OtplessContext } from '../App'


function Landing() {
    const [data,setData]=useContext(OtplessContext)
    let name=""
    let email=""
    // console.log(data)
    const navigate=useNavigate()
    function redirect(){
        // setData((prev)=>{
        //     return({...prev,name:"Kittuss"})
            
        // })
        navigate("/info",{replace:true})
    }
    const loadScript = () => {
        const script = document.createElement("script");
        script.src = "https://otpless.com/auth.js";
        script.id = "otplessIdScript"
        document.body.appendChild(script);
      }
    useEffect(() => {
      
      loadScript()
      window.otpless = (otplessUser) => {
        let token=otplessUser.token
       let name=otplessUser.email?otplessUser.email.name:data.name
       // let name=otplessUser.email.name
       let phone=otplessUser.waNumber
       let email=otplessUser.email?otplessUser.email.email:data.email
        // let email=otplessUser.email.email
        let timestamp=otplessUser.timestamp
         
        console.log("THis is console after click",token,name,phone,email,timestamp)
        setData((prev)=>{
            return({...prev,token:token,name:name,phone:phone,email:email,timestamp:timestamp})
        })
        redirect()
      };
      return () => {
        let scr = document.getElementById('otplessIdScript')
        document.body.removeChild(scr);
      };
    }, []);
    console.log("this is updated data",data)
  return (
    <>
    
    <h1>{data.name}</h1>
    <button onClick={redirect} id="otpless-login-page" ></button>
    </>
  )
}

export default Landing