import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Landing from './Landing'
import Info from './Info'

function Home() {
    
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path ="/" element={<Landing/>}/>
        <Route path ="/info" element={<Info/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Home