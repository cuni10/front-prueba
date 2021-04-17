import React, { useReducer } from 'react';

import ProductoContext from "./ProductosContext";
import ProductoReducer from "./ProductosReducer";

const ProductoState = props => {

    const initialState = {
        login: true
    }

    const [state,dispatch] = useReducer(ProductoReducer,initialState);

    return(
        <ProductoContext.Provider
            value={{
                login: state.login
            }}
        >
            {props.children}
        </ProductoContext.Provider>
    )
}

export default ProductoState;

