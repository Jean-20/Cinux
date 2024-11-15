import React, { useState } from 'react';

const filas = ['AA', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
const columnas = Array.from({ length: 12 }, (_, i) => i + 1);

const Asiento = () => {
  const [asientosSeleccionados, setAsientosSeleccionados] = useState([]);

  const toggleAsiento = (asiento) => {
    setAsientosSeleccionados((prev) =>
      prev.includes(asiento)
        ? prev.filter((a) => a !== asiento)
        : [...prev, asiento]
    );
  };

  const getClaseAsiento = (asiento) => {
    if (asientosSeleccionados.includes(asiento)) return 'bg-blue-500 text-white';
    return 'bg-white border border-gray-400';
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Encabezado de la pantalla */}
      <h2 className="text-2xl font-semibold mb-4">Pantalla</h2>
      <div className="w-full h-2 bg-gray-300 mb-6"></div>

      {/* Mapa de asientos */}
      <div className="flex flex-col items-center gap-2">
        {filas.map((fila) => (
          <div key={fila} className="flex items-center justify-center">
            <span className="w-8 text-center font-semibold">{fila}</span>
            <div className="grid grid-cols-12 gap-2">
              {columnas.map((col) => {
                const asiento = `${fila}${col}`;
                return (
                  <button
                    key={asiento}
                    className={`w-10 h-10 flex items-center justify-center rounded-full hover:scale-105 transition-all ${getClaseAsiento(asiento)}`}
                    onClick={() => toggleAsiento(asiento)}
                  />
                );
              })}
            </div>
            <span className="w-8 text-center font-semibold">{fila}</span>
          </div>
        ))}
      </div>

      {/* Leyenda de asientos */}
      <div className="flex flex-col mt-6 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 bg-white border border-gray-400 rounded-full"></span>
          <p>Disponible</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 bg-blue-500 rounded-full"></span>
          <p>Seleccionada</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 bg-red-500 rounded-full"></span>
          <p>Ocupada</p>
        </div>
      </div>

      {/* Lista de asientos seleccionados */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Butacas seleccionadas:</h3>
        <p className="text-gray-700">
          {asientosSeleccionados.length > 0 ? asientosSeleccionados.join(', ') : 'Ninguna'}
        </p>
      </div>

      <button className="mt-6 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        Siguiente
      </button>
    </div>
  );
};

export default Asiento;
