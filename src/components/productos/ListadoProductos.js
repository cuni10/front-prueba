import React, { Fragment } from 'react';
import Producto from "./Producto";

const productos = [
    {name:"Garrys Mod",stock: true ,price:"300",img:"https://static-cdn.jtvnw.net/ttv-boxart/Garry%27s%20Mod-144x192.jpg"},
    {name:"Grand Theft Auto 5",stock: false ,price:"500",img:"https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V-285x380.jpg"},
    {name:"League of Legends",stock: true ,price:"0",img:"https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg"},
    {name:"Counter Strike: Global Ofensive",stock: true ,price:"0",img:"https://static-cdn.jtvnw.net/ttv-boxart/./Counter-Strike:%20Global%20Offensive-285x380.jpg"},

]

const ListadoProductos = () => {
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