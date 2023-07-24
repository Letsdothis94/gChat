import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import ChatBox from './components/ChatBox';
import Login from './components/LoginRegister/Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='chatBox' element={
          <>
            <Navbar />
            <ChatBox />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
