import React from 'react';
import { useLocation } from 'react-router-dom';

const DetallePelicula = () => {
    const location = useLocation();
    const { pelicula } = location.state || {}; // Desestructuramos la película del estado

    if (!pelicula) {
        return <p>No se encontró información de la película.</p>;
    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden mt-10">
                {/* Imagen de la película */}
                <img src={pelicula.imagen} alt={pelicula.titulo} className="w-full h-96 object-cover" />
                <div className="p-6">
                    <h2 className="text-3xl font-bold text-gray-800">{pelicula.titulo}</h2>
                    <p className="text-gray-600 mt-2">{pelicula.sinopsis}</p>
                    <p className="text-gray-500 mt-4">Idioma: {pelicula.idioma}</p>
                </div>
            </div>
        </div>
    );
};

export default DetallePelicula;
