<<<<<<< HEAD
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
=======
import { useState } from 'react'
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
>>>>>>> 75a94377dd52efd235cc0807a7a252b20b764aa7
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Catalogue from "./pages/Catalogue";
import Canapes from "./pages/Canapes";
import CanapeDetails from "./pages/CanapeDetails";
import Chaises from "./pages/Chaises";
import ChaiseDetails from "./pages/ChaiseDetails";
import Tables from "./pages/Tables";
<<<<<<< HEAD
import TableDetails from "./pages/TableDetails";
import Panier from "./pages/Panier";
import Connexion from "./pages/Connexion";
import Header from "./components/Header";
import "./index.css";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Compte from './pages/Compte';
import SignupCard from "./components/SignupCard";
=======
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

>>>>>>> 75a94377dd52efd235cc0807a7a252b20b764aa7
function App() {
  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 22e72a0 (Ajout du footer)
      <Router>
        <div className="flex flex-col h-screen">
          <header className="sticky top-0">
            <Header />
          </header>
          <main className="text-color-custom flex flex-col flex-grow overflow-y-auto bg-[#F2EEED]">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
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
              <Route path="/signup" element={<SignupCard />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/compte/:id" element={<Compte />} />
            </Routes>
          </main>
          <footer>
            <Footer />
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
  );
}

export default App;
