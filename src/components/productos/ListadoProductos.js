import React, { Fragment, useContext } from 'react';
import Producto from "./Producto";
import ProductosContext from "../../context/ProductosContext";


const ListadoProductos = () => {

    const productosContext = useContext(ProductosContext);

    const {productos} = productosContext;

    return ( 

        <Fragment>
            <h2 className="text-center">Categoria:</h2>
            {productos.length === 0
                ?(<h2>No hay productos</h2>)
                :(
                    <div className="container mb-5 mt-5">
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