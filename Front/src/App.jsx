import { useState } from 'react'
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from './components/Footer';
import Catalogue from "./pages/Catalogue";
import Canapes from "./pages/Canapes";
import CanapeDetails from './pages/CanapeDetails';
import Chaises from "./pages/Chaises";
import ChaiseDetails from './pages/ChaiseDetails';
import Tables from "./pages/Tables";
import TableDetails from './pages/TableDetails';
import Panier from './pages/Panier';
import Connexion from './pages/Connexion';
import Header from './components/Header';
import './index.css'
import Admin from './pages/Admin';
import Contact from './pages/Contact';
<<<<<<< HEAD
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./pages/Home";
import HamburgerMenu from './components/HamburgerMenu';
>>>>>>> 5bcf936 (add Home page and  hamburgerMenu component)
=======
>>>>>>> 22e72a0 (Ajout du footer)

function App() {

  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 22e72a0 (Ajout du footer)
      <Router>
        <div>
          <header>
            <Header />
          </header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/canapes" element={<Canapes />} />
          <Route path="/canapes/:id" element={<CanapeDetails />} />
          <Route path="/chaises" element={<Chaises />} />
          <Route path="/chaises/:id" element={<ChaiseDetails />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/tables/:id" element={<TableDetails />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/admin" element={< Admin />} />
          <Route path="/contact" element={< Contact />} />
        </Routes>
        <footer>
          <Footer/>
        </footer>
        </div>
      </Router>
=======
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
>>>>>>> 5bcf936 (add Home page and  hamburgerMenu component)
    </>
  )
}

export default App
