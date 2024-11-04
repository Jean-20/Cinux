import React from 'react';
import { Link } from 'react-router-dom';

const MoviesData = [
    {
        id: 1,
        titulo: "Inception",
        categoria: "Ciencia Ficción",
        director: "Christopher Nolan",
        precio: "$14.99",
        stock: "50",
        sinopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        imagen: "https://images.unsplash.com/photo-1560185127-6a4a37f0c4c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 2,
        titulo: "The Godfather",
        categoria: "Drama",
        director: "Francis Ford Coppola",
        precio: "$12.99",
        stock: "30",
        sinopsis: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        imagen: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 3,
        titulo: "Parasite",
        categoria: "Thriller",
        director: "Bong Joon-ho",
        precio: "$9.99",
        stock: "25",
        sinopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        imagen: "https://images.unsplash.com/photo-1589988020741-3ae622bc4088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 4,
        titulo: "Interstellar",
        categoria: "Ciencia Ficción",
        director: "Christopher Nolan",
        precio: "$14.99",
        stock: "15",
        sinopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        imagen: "https://images.unsplash.com/photo-1598950200987-70dca5d92d63?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80"
    }
];

const Peliculas = () => {
    return (
        <div className="flex justify-center items-center min-h-screen mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {MoviesData.map((item) => (
                    <div
                        key={item.id}
                        className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full transform transition-transform duration-300 hover:scale-105"
                    >
                        <Link to={`/detalle/${item.id}`} state={{ pelicula: item }}>
                            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                                <img
                                    src={item.imagen}
                                    alt={item.titulo}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="block font-sans text-base font-medium text-blue-gray-900">
                                        {item.titulo}
                                    </p>
                                    <p className="block font-sans text-base font-medium text-blue-gray-900">
                                        {item.precio}
                                    </p>
                                </div>
                                <p className="block font-sans text-sm text-gray-700 opacity-75">
                                    {item.sinopsis} {/* Cambia de 'descripcion' a 'sinopsis' */}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Peliculas;
