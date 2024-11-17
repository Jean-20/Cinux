import React, { useEffect, useState } from 'react'
import { useSelector} from 'react-redux';


const ResumenCompra = () => {
  const resumenCompra = useSelector((state) => state.entradaCompra);
  const [resumenCompraHtml, setResumenCompraHtml] = useState([]);
  
  useEffect(() => {
    const html= <>  
        <div key={resumenCompra.nombrePelicula}>
          <h1>Nombre pelicula: {resumenCompra.nombrePelicula}</h1>
          <h1>Sede: {resumenCompra.sede}</h1>
          <h1>Fecha y hora: {resumenCompra.fechaYhora}</h1>
          <h1>Tipo: {resumenCompra.tipoEntrada}</h1>
          <h1>Cantidad asientos: {resumenCompra.cantidadAsientos}</h1>
          
          <h1>Asiento: {resumenCompra.asientos}</h1>
          <h1>Dulceria: {resumenCompra.dulceria}</h1>
          
          <h1>Precio Total:{resumenCompra.precioTotal}</h1> 

        </div>
        </> 
    if(resumenCompra){
      console.log(resumenCompra);
    };
      setResumenCompraHtml(html);
    }, [resumenCompra]);
  
  
  return (
    <div className="p-5 border-black w-[300px] bg-gray-100">
      {resumenCompraHtml}
    </div>
  )
}

export default ResumenCompra;