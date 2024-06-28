import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import Canapes from "./pages/Canapes";
import CanapeDetails from './pages/CanapeDetails';
import Chaises from "./pages/Chaises";
import ChaiseDetails from './pages/ChaiseDetails';
import Tables from "./pages/Tables";
import TableDetails from './pages/TableDetails';
import Header from './components/Header';
import './index.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className='bg-[#F0EFEB]'>
          <Header />
        </div>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/canapes" element={<Canapes />} />
          <Route path="/canapes/:id" element={<CanapeDetails />} />
          <Route path="/chaises" element={<Chaises />} />
          <Route path="/chaises/:id" element={<ChaiseDetails />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/tables/:id" element={<TableDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
