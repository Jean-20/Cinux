import React, { useState, useEffect } from 'react';
import { Spinner } from '@material-tailwind/react';
import { getDulces } from '../../api/dulceria';


/* const DulceriaData = [
    {
        id: 1,
        nombre: "Chocolate Milka",
        categoria: "Dulces",
        precio: "$2.50",
        stock: "100",
        descripcion: "Delicioso chocolate con un sabor suave y cremoso.",
        url: "https://images.unsplash.com/photo-1610444731753-85b4b0ae7a36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 2,
        nombre: "Gomitas de Frutas",
        categoria: "Golosinas",
        precio: "$1.99",
        stock: "200",
        descripcion: "Gomitas frescas en forma de frutas, llenas de sabor.",
        url: "https://images.unsplash.com/photo-1586511989526-2e3a905ca2de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 3,
        nombre: "Caramelos de Menta",
        categoria: "Caramelos",
        precio: "$1.50",
        stock: "150",
        descripcion: "Refrescantes caramelos de menta, perfectos para cualquier ocasión.",
        url: "https://images.unsplash.com/photo-1574304088896-c53c6b6b6059?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80"
    },
    {
        id: 4,
        nombre: "Palomitas de Maíz",
        categoria: "Snacks",
        precio: "$3.00",
        stock: "80",
        descripcion: "Palomitas de maíz recién hechas, perfectas para ver una película.",
        url: "https://images.unsplash.com/photo-1602041591672-7e95b00ab0d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80"
    }
]; */

const Dulceria = () => {
    const [dulces, setDulces] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getDulces();
                setDulces(data);
            } catch (error) {
                console.error('Error fetching dulceria:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);





    return (
        <div className="flex justify-center items-center min-h-screen mt-20 mb-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {loading ? (
                    <div className=" flex text-center justify-center ">
                        <Spinner color="blue" size="xxl" className="flex justify-center m-20 w-28 h-28" />
                    </div>
                ) : (
                    <>
                        {dulces.map((item) => (
                            <div
                                key={item._id}
                                className=" relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full transform transition-transform duration-300 hover:scale-105"
                            >
                                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                                    <img
                                        src={item.url}
                                        alt={item.nombre}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="block font-sans text-base font-medium text-blue-gray-900">
                                            {item.nombre}
                                        </p>
                                        <p className="block font-sans text-base font-medium text-blue-gray-900">
                                            S/. {item.precio}
                                        </p>
                                    </div>
                                    <p className="block font-sans text-sm text-gray-700 opacity-75">
                                        {item.descripcion}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default Dulceria;
