import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        nombreCompleto: "",
        email: "",
        nombrePelicula: "",
        sede: "",
        fechaYhora: "",
        sala: "asdfasdf",
        asientos: "",
        dulceria: "",
        cantidadAsientos: "",
        tipoEntrada:"",
        precioTotal: "0",


    }
]

const entradaCompraSlice = createSlice({
    name: 'entradaCompra',
    initialState,
    reducers: {
        ingresoDatosCompra: (state, action) => {
            state.push(action.payload)
        },
        actualizarCompra: (state, action) => {
            const {nombrePelicula, sede, fechaYhora, tipoEntrada, cantidadAsientos, asientos, dulceria, precioTotal} = action.payload;
            const compra = state.find((compra) => compra.nombrePelicula === nombrePelicula);
            if(compra){
                compra.sede = sede;
                compra.fechaYhora = fechaYhora;
                compra.tipoEntrada = tipoEntrada;
                compra.cantidadAsientos = cantidadAsientos;
                compra.asientos = asientos;
                compra.dulceria = dulceria;
                compra.precioTotal = precioTotal;
            }
        },
        removeCompra: (state, action) => {
            return state.filter((compra) => compra !== action.payload)
        }
    }
})

export const {ingresoDatosCompra, removeCompra,actualizarCompra} = entradaCompraSlice.actions;
export default entradaCompraSlice.reducer;