import React from 'react';
import ListadoProductos from '../productos/ListadoProductos';

const SideBar = () => {
    return ( 
        <aside className="">
            <h1 className="">Categorias</h1>
            <ListadoProductos/>
        </aside>
     );
}
 
export default SideBar;