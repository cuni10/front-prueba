import React from 'react';
import Producto from './Producto';

const ListadoProductos = () => {

    const productos =[
        {name:"Accion"},
        {name:"Suspenso"},
        {name:"Aventura"}
    ]
    return ( 

        <ul className="listado nav flex-column text-center">
            {productos.map(producto =>(
                <Producto
                    producto={producto}
                />
            ))}
            
        </ul>
     );
}
 
export default ListadoProductos;