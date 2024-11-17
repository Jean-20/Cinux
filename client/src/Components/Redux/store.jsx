import {configureStore} from '@reduxjs/toolkit';
import entradaCompra from "./Compra/EntradaCompraSlice";

export const store = configureStore({
    reducer: {
        entradaCompra,
    },
});

export default store;

