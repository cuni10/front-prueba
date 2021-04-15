import React, { Fragment } from 'react';
import Producto from "./Producto";

const productos = [
    {name:"Garrys Mod",stock: true ,price:"300"},
    {name:"Grand Theft Auto 5",stock: false ,price:"500",img:"https://i.ibb.co/8dJCY4Y/Car-tula-GTA-V.jpg"},
    {name:"League of Legends",stock: true ,price:"0"},
    {name:"Counter Strike: Global Ofensive",stock: true ,price:"0"},

]

const ListadoProductos = () => {
    return ( 

        <Fragment>
            <h2 className="text-center">Categoria:</h2>
            {productos.length === 0
                ?(<h2>No hay productos</h2>)
                :(
                    <div className="container-fluid">
                        <ul className="row row-cols-2 justify-content-center productitos">
                        {productos.map(producto =>(
                            <Producto
                                    producto={producto}
                            />
                        ))} 
                        </ul>
                    </div>
                )
            }   
            
        </Fragment>
     );
}
 
export default ListadoProductos;