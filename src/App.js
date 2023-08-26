import './App.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hello from './Zero';
import Otpless from './Otpless';

function App() {
  const [user,setUser]=useState()
  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://otpless.com/auth.js"
    script.id = "otplessIdScript"
    document.body.appendChild(script);
  }
  const navigate = useNavigate();
useEffect(() => {
  
  loadScript()
  window.otpless = (otplessUser) => {
    setUser(otplessUser)
    navigate("/otpless", { replace: true })
  };
  return () => {
    let scr = document.getElementById('otplessIdScript')
    document.body.removeChild(scr);
  };
}, []);
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/otpless" element={<Otpless/>}/>
      </Routes></BrowserRouter>
    <div id="otpless-login-page" custom="true">
    <h1 >Hello otpless</h1>
    
    </div>

    </>
  );
}

export default App;
