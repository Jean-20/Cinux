import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contactanos from './pages/Contactanos';
import Cines from './Components/Principal/Sedes';
import Peliculas from './Components/Principal/Peliculas';
import Dulceria from './Components/Principal/Dulceria';
import Comprar from './Comprar';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home'

const HomePage = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-300 h-full">
      <div className="flex flex-col w-[100%] md:ml-[300px]">
        <Header />
        <div>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/cines" element={<Cines />} />
            <Route path="/peliculas" element={<Peliculas />} />
            <Route path="/dulceria" element={<Dulceria />} />
            <Route path="/comprar/*" element={
              <Comprar/>
          }/>
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;