import React from 'react';
import { useEffect, useState } from 'react';
import { getPelicula } from '../../api/peliculas';


const DetallePelicula = () => {
    const [pelicula, setPelicula] = useState([]);
    useEffect(() => {  
        const fetchPelicula = async() =>{
            const res = await getPelicula();
            setPelicula(res);

        } 
        fetchPelicula();
    }, []);

        


    if (!pelicula) {
        return <p>No se encontró información de la película.</p>;
    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden mt-10">
                {/* Imagen de la película */}
                <img src={pelicula.url} alt={pelicula.nombre} className="w-full h-96 object-cover" />
                <div className="p-6">
                    <h2 className="text-3xl font-bold text-gray-800">{pelicula.nombre}</h2>
                    <h3 className="text-3xl font-bold text-gray-800">{pelicula.nombre}</h3>
                    <h3 className="text-3xl font-bold text-gray-800">{pelicula.productora}</h3>
                    <p className="text-gray-600 mt-2">{pelicula.descipcion}</p>
                </div>
            </div>
        </div>
    );
};

export default DetallePelicula;
