import React from 'react'
import { useSelector} from 'react-redux';

const ResumenCompra = () => {
    const resumenCompra = useSelector((state) => state.entradaCompra);

  return (
    <div className="p-5 border-black w-[300px] bg-gray-100">
      {resumenCompra && resumenCompra.map((parte) => (   
        <div key={parte.nombrePelicula}>
          <h1>Nombre pelicula: {parte.nombrePelicula}</h1>
          <h1>Sede: {parte.sede}</h1>
          <h1>Fecha y hora: {parte.fechaYhora}</h1>
          <h1>Tipo: {parte.tipoEntrada}</h1>
          <h1>Cantidad asientos: {parte.cantidadAsientos}</h1>
          
          <h1>Asiento: {parte.asientos}</h1>
          <h1>Dulceria: {parte.dulceria}</h1>
          
          <h1>Precio Total:{parte.precioTotal}</h1> 

        </div>
      ))}
    </div>
  )
}

export default ResumenCompra