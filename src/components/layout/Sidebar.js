import React from 'react';
import Categorias from '../productos/Categorias';

const SideBar = () => {
    return ( 
        <aside className="">
            <h1 className="nav-brand">Categorias</h1>
            <Categorias/>
        </aside>
     );
}
 
export default SideBar;