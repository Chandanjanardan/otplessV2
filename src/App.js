import React ,{createContext,useState}from 'react'
import Home from './component/Home'

const OtplessContext=createContext();
const authStateI={token:"fadgagaga",name:"Use Email Verification for name",phone:9403940188,email:"Use email verification email",timestamp:new Date(Date.now())}
function App() {
  const [authState,setAuthState]=useState(authStateI)
  return (
    <OtplessContext.Provider value={[authState,setAuthState]}>

      <Home/>
    </OtplessContext.Provider>
  )
}

export default App
export {OtplessContext}