import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ingresoDatosCompra } from '../../Components/Redux/Compra/EntradaCompraSlice';

const Entradas = () => {
  const [cantidades, setCantidades] = useState({
    general: 0,
    ninos: 0,
    mayores: 0,
  });

  const [tipoEntrada, setTipoEntrada] = useState({
    general: "General",
    ninos: "Niños",
    mayores: "Mayores",
  });
  
  const precios = {
    general: 36.00,
    ninos: 34.00,
    mayores: 34.00,
  };
  const [entradasComprados, setEntradasComprados] = useState([]);

  

  
  
  const handleIncrementar = (tipo) => {
    setCantidades((prev) => ({ ...prev, [tipo]: prev[tipo] + 1 }));
  };

  const handleDecrementar = (tipo) => {
    setCantidades((prev) => ({
      ...prev,
      [tipo]: prev[tipo] > 0 ? prev[tipo] - 1 : 0,
    }));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const datos = useSelector((state) => state.entradaCompra);

  const entradas =[
    {
      nombre: "general",
      tipoEntrada: "General 2D OL",
      cantidad: cantidades.general,
      precio: 36.00,
    },
    {
      nombre: "ninos",
      tipoEntrada: "Niños 2D OL",
      cantidad: cantidades.ninos,
      precio: 34.00,
    },
    {
      nombre: "mayores",
      tipoEntrada: "Mayores 2D OL",
      cantidad: cantidades.mayores,
      precio: 34.00,
    },
  ];


  const handleCompra = () => {
const entradasCom = entradas.filter((entrada) => entrada.cantidad > 0);
    
    setEntradasComprados(entradasCom);

    const resumenCompra =  entradasComprados.map((entrada) => ({
      ...datos,
      tipoEntrada: "entrada.tipoEntrada",
      precioTotal: "entrada.precio * entrada.cantidad",
    }))
    dispatch(ingresoDatosCompra(resumenCompra));
    navigate("/home/comprar/asiento");
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-blue-600 mb-4">Entradas Generales</h3>

      <div className="space-y-4">
        {/* Entrada General */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">General 2D OL</p>
            <p>Incluye servicio online</p>
            <p className="text-lg text-blue-600">${precios.general.toFixed(2)}</p>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => handleDecrementar('general')}
              className="px-4 py-2 border rounded-md hover:bg-gray-200"
            >
              -
            </button>
            <span className="mx-2">{cantidades.general}</span>
            <button
              onClick={() => handleIncrementar('general')}
              className="px-4 py-2 border rounded-md hover:bg-gray-200"
            >
              +
            </button>
          </div>
        </div>

        {/* Entrada Niños */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Niños 2D OL</p>
            <p>Para niños de 2 a 11 años. Incluye servicio online</p>
            <p className="text-lg text-blue-600">${precios.ninos.toFixed(2)} <span className="text-sm text-gray-500">Precio más bajo</span></p>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => handleDecrementar('ninos')}
              className="px-4 py-2 border rounded-md hover:bg-gray-200"
            >
              -
            </button>
            <span className="mx-2">{cantidades.ninos}</span>
            <button
              onClick={() => handleIncrementar('ninos')}
              className="px-4 py-2 border rounded-md hover:bg-gray-200"
            >
              +
            </button>
          </div>
        </div>

        {/* Entrada Mayores */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Mayores 60 años 2D OL</p>
            <p>Incluye servicio online</p>
            <p className="text-lg text-blue-600">${precios.mayores.toFixed(2)} <span className="text-sm text-gray-500">Precio más bajo</span></p>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => handleDecrementar('mayores')}
              className="px-4 py-2 border rounded-md hover:bg-gray-200"
            >
              -
            </button>
            <span className="mx-2">{cantidades.mayores}</span>
            <button
              onClick={() => handleIncrementar('mayores')}
              className="px-4 py-2 border rounded-md hover:bg-gray-200"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Botón Continuar */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleCompra}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors w-36"
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Entradas;