import React from 'react';
import Barra from '../layout/Barra';
import Sidebar from "../layout/Sidebar";
import ListadoProductos from './ListadoProductos';

const Productos = () => {
    return ( 

        <div className="container-fluid">
            <Barra/>
            <div className="row vh-100">
                <div className="col sidebar">
                    <Sidebar/>
                </div>
                <div className="col-10 main">
                    <h1 className="text-center">Productos</h1>
                    <ListadoProductos/>
                </div>
            </div>
        </div>
     );
}
 
export default Productos;