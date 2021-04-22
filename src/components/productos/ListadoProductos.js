import React, { Fragment, useContext, useEffect } from 'react';
import Producto from "./Producto";
import ProductosContext from "../../context/ProductosContext";


const ListadoProductos = () => {

    const productosContext = useContext(ProductosContext);

    const {productos,obtenerProductos} = productosContext;

    useEffect( () => {
        obtenerProductos();
    },[]);

    return ( 

        <Fragment>
            <h2 className="text-center">Categoria:</h2>
            {productos.length === 0
                ?(<h2 className="text-center">No hay productos</h2>)
                :(
                    <div className="container">
                        <div className="row justify-content-center productitos">
                        {productos.map(producto =>(
                            <Producto
                                key={producto.id}
                                producto={producto}
                            />
                        ))} 
                        </div>
                    </div>
                )
            }   
            
        </Fragment>
     );
}
 
export default ListadoProductos;