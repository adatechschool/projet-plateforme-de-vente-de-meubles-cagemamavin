import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./pages/Home";
import HamburgerMenu from './components/HamburgerMenu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className='bg-[#F0EFEB]'>
          <HamburgerMenu />
        </div>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
