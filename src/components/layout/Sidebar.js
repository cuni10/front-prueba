import React from 'react';
import Categorias from '../productos/Categorias';

const SideBar = () => {
    return ( 
        <aside className="">
            <h1 className="nav-brand text-center">Categorias</h1>
            <hr/>
            <Categorias/>
        </aside>
     );
}
 
export default SideBar;