// Dulceria.jsx
import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { ingresoDatosCompra, actualizarCompra } from '../../Components/Redux/Compra/EntradaCompraSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Dulceria = () => {
  const [cantidades, setCantidades] = useState({
    combo1: 0,
    combo2: 0,
    combo3: 0,
    combo4: 0,
  });
  const datos = useSelector((state) => state.entradaCompra);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const combos = [
    {
      id: 'combo1',
      nombre: 'Combo 2 Salado + 2 Kit Kat OL',
      descripcion: '1 Canchita Gigante (Salado) + 2 Bebidas (2L)',
      precio: 55.00,
      imagen: '',
    },
    {
      id: 'combo2',
      nombre: 'Combo 2 Kit',
      descripcion: '1 Canchita Gigante (Dulce) + 2 Bebidas (2L)',
      precio: 61.00,
      imagen: '',
    },
    {
      id: 'combo3',
      nombre: 'Combo 2 Mix + 2 DUOMAX OL',
      descripcion: '1 Canchita Gigante (Mix) + 2 Bebidas (2L)',
      precio: 58.00,
      imagen: '',
    },
    {
      id: 'combo4',
      nombre: 'Combo 2 Dulce + 2 DUOMAX OL',
      descripcion: '1 Canchita Gigante (Dulce) + 2 Bebidas (2L)',
      precio: 58.00,
      imagen: '',
    },
  ];

  const handleIncrementar = (tipo) => {
    setCantidades((prev) => ({ ...prev, [tipo]: prev[tipo] + 1 }));
  };

  const handleDecrementar = (tipo) => {
    setCantidades((prev) => ({
      ...prev,
      [tipo]: prev[tipo] > 0 ? prev[tipo] - 1 : 0,
    }));
  };

  

  const [recolecionDulces, setRecolecionDulces] = useState();
  const [recoleccionPrecio, setRecoleccionPrecio] = useState();
  const resumenCompra = useSelector((state) => state.entradaCompra);


  const handleCompra = () => {
    let dulcesCompradas = "";
    let precioTotal = 0;
  
    combos.forEach((dulce) => {
      dulcesCompradas += `${dulce.nombre} `;
        precioTotal += dulce.precio;
    });
  
    setRecolecionDulces(dulcesCompradas.trim());
    setRecoleccionPrecio(precioTotal);

    dispatch(actualizarCompra({
      ...datos,
      dulceria: dulcesCompradas.trim(),
      precioTotal: resumenCompra.precioTotal + precioTotal,
  }))
    ;
  
    navigate("/home/comprar/pago");
  };


  return (
    <div className="p-2 bg-white rounded-lg shadow-lg w-full max-w-4xl mx-auto ">
      <h3 className="text-2xl font-bold text-blue-600 mb-4">Dulcería</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {combos.map((combo) => (
          <div key={combo.id} className="border rounded-lg p-2 bg-gray-100">
            <img
              src={combo.imagen}
              alt={combo.nombre}
              className="mb-2 w-full h-50 object-cover rounded-md"
            />
            <h4 className="font-semibold">{combo.nombre}</h4>
            <p>{combo.descripcion}</p>
            <p className="text-lg text-blue-600">S/.{combo.precio.toFixed(2)}</p>
            <div className="flex items-center mt-2">
              <button
                onClick={() => handleDecrementar(combo.id)}
                className="px-4 py-2 border rounded-md hover:bg-gray-200"
              >
                -
              </button>
              <span className="mx-2">{cantidades[combo.id]}</span>
              <button
                onClick={() => handleIncrementar(combo.id)}
                className="px-4 py-2 border rounded-md hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={()=>handleCompra()}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors w-36"
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Dulceria;