import React from 'react';
import Categorias from '../categorias/Categorias';

const SideBar = () => {
    return ( 
        <aside>
            <h1 className="text-center">Categorias</h1>
            <hr/>
            <Categorias/>
        </aside>
     );
}
 
export default SideBar;