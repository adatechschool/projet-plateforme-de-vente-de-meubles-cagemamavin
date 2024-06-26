import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import Canapes from "./pages/Canapes";
import Chaises from "./pages/Chaises";
import Tables from "./pages/Tables";
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className='bg-[#F0EFEB]'>
          <Header />
        </div>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Catalogue />} />
          <Route path="/" element={<Canapes />} />
          <Route path="/" element={<Chaises />} />
          <Route path="/" element={<Tables />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
