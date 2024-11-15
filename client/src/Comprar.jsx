import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Asiento from './pages/Comprar/Asiento'
import Entradas from './pages/Comprar/Entradas'
import Dulceria from './pages/Comprar/Dulceria'
import Pago from './pages/Comprar/Pago'

import TipoEntrada from './pages/Comprar/TipoEntrada'
import SedeHorario from './pages/Comprar/SedeHorario'
import ComprarP from './pages/ComprarP'

const Comprar = () => {
  return (
    <div>
      <ComprarP />
      
      <Routes>
        <Route path="*" element={<SedeHorario />} />
        <Route path="/asiento" element={<Asiento />} />
        <Route path="/entradas" element={<Entradas />} />
        <Route path="/dulceria" element={<Dulceria />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/sedes" element={<SedeHorario />} />
        <Route path="/tipoEntrada" element={<TipoEntrada />} />
      </Routes>
    </div>
  )
}

export default Comprar;