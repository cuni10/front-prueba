import React from 'react';
import Barra from '../layout/Barra';
import Sidebar from "../layout/Sidebar";
import ListadoProductos from './ListadoProductos';

const Productos = () => {
    return ( 

        <div className="container-fluid">
            <Barra/>
            <div className="row">
                <div className="col-xxl-2 sidebar">
                    <Sidebar/>
                </div>
                <div className="col main">
                    <h1 className="text-center">Productos</h1>
                    <ListadoProductos/>
                </div>
            </div>
        </div>
     );
}
 
export default Productos;