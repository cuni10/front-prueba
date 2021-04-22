import React, { useReducer } from 'react';

import ProductoContext from "./ProductosContext";
import ProductoReducer from "./ProductosReducer";
import {OBTENER_PRODUCTOS} from "../types";



const ProductoState = props => {

    const productos = [
        {id:"1",name:"Garrys Mod",stock: true ,price:"300",img:"https://static-cdn.jtvnw.net/ttv-boxart/Garry%27s%20Mod-144x192.jpg"},
        {id:"2",name:"Grand Theft Auto 5",stock: false ,price:"500",img:"https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V-285x380.jpg"},
        {id:"3",name:"League of Legends",stock: true ,price:"0",img:"https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg"},
        {id:"4",name:"Counter Strike: Global Ofensive",stock: true ,price:"0",img:"https://static-cdn.jtvnw.net/ttv-boxart/./Counter-Strike:%20Global%20Offensive-285x380.jpg"}
    ];
    const initialState = {
        
        productos: [],

        categorias :[
            {id:"1",name:"Accion"},
            {id:"2",name:"Suspenso"},
            {id:"3",name:"Aventura"}
        ],

        login: true
    }

    const [state,dispatch] = useReducer(ProductoReducer,initialState);

    const obtenerProductos = () => {
        dispatch({
            type: OBTENER_PRODUCTOS,
            payload: productos
        });
    }
    return(
        <ProductoContext.Provider
            value={{
                productos: state.productos,
                categorias: state.categorias,
                login: state.login,
                obtenerProductos
            }}
        >
            {props.children}
        </ProductoContext.Provider>
    )
}

export default ProductoState;

