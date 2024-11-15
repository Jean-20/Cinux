import React from 'react';
import { Link } from 'react-router-dom';

const Recomendaciones = () => {
    const peliculas = [
        {
            id: 1,
            titulo: 'Terrifier 3',
            imagen: 'https://pics.filmaffinity.com/Terrifier_3-141451507-mmed.jpg',
            destacado: true,
            sinopsis: 'Un grupo de amigos se enfrenta a un payaso asesino en una noche de Halloween.',
            idioma: 'Doblada',
        },
        {
            id: 2,
            titulo: 'Robot Salvaje',
            imagen: 'https://static.cinepolis.com/resources/mx/movies/posters/414x603/47427-649819-20240911011247.jpg',
            destacado: false,
            sinopsis: 'Un joven se une a un robot para salvar su mundo de una amenaza inminente.',
            idioma: 'Subtitulada',
        },
        {
            id: 3,
            titulo: 'Haikyuu',
            imagen: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJr_NB-PrR86QB3UBICOfkxMqwUBz5p-MQo6EakuQdgf7yYE7l',
            destacado: false,
            sinopsis: 'La historia de un joven que sueña con convertirse en un gran jugador de voleibol.',
            idioma: 'Doblada',
        },
        {
            id: 4,
            titulo: 'Venom: Let There Be Carnage',
            imagen: 'https://pbs.twimg.com/media/E5Ym9xWXEAEydmj.jpg:large',
            destacado: false,
            sinopsis: 'Eddie Brock lucha contra un nuevo villano, Carnage, que amenaza con causar caos.',
            idioma: 'Subtitulada',
        },
        {
            id: 5,
            titulo: 'El Tiempo Que Tenemos',
            imagen: 'https://pics.filmaffinity.com/Vivir_el_momento-707738925-large.jpg',
            destacado: true,
            sinopsis: 'Una conmovedora historia sobre el amor y las segundas oportunidades.',
            idioma: 'Doblada',
        },
        {
            id: 6,
            titulo: 'Proyecto X',
            imagen: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS4I5ZUhze3q2_NumD8069l5anZaBZ4Lbpj1jtUjVsZ3weyvCBw',
            destacado: true,
            sinopsis: 'Una fiesta de cumpleaños se convierte en una épica locura.',
            idioma: 'Subtitulada',
        },
        {
            id: 7,
            titulo: 'Scooby-Doo',
            imagen: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQob_5sripQ2lfsyMCbqyDC_z684Mj51J80kcX2gtjGBhf2Lnoy',
            destacado: true,
            sinopsis: 'Los famosos detectives de misterio investigan un nuevo caso.',
            idioma: 'Doblada',
        },
        {
            id: 8,
            titulo: 'Scary Movie 2',
            imagen: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLtaJMowWqblTnqvQnD-vazVdP2kZHTwuLPaDCsvtI9Mrq0WW9',
            destacado: true,
            sinopsis: 'Una parodia de las películas de terror que hará reír a todos.',
            idioma: 'Subtitulada',
        },
    ];

    return (
        <section className="py-8 px-4 bg-gray-100 mt-20">
            <h2 className="text-3xl font-bold mb-4 text-center">Recomendaciones</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {peliculas.map((pelicula) => (
                    <div
                        key={pelicula.id}
                        className="relative group overflow-hidden rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105"
                    >
                        {pelicula.destacado && (
                            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                Estreno
                            </span>
                        )}
                        <img
                            src={pelicula.imagen}
                            alt={pelicula.titulo}
                            className="w-full h-100 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg text-center">{pelicula.titulo}</h3>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex space-x-4">
                                <Link
                                    to={`/comprar/${pelicula.id}`}
                                    className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-200"
                                >
                                    Comprar
                                </Link>
                                <Link
                                    to={{
                                        pathname: `/detalle`,
                                        state: { pelicula },
                                    }}
                                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                                >
                                    Más detalles
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 text-center">
                <Link to="/home/peliculas" className="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 transition duration-200">
                    Ver más películas
                </Link>
            </div>
        </section>
    );
};

export default Recomendaciones;
