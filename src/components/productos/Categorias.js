import React from 'react';
import Categoria from './Categoria';

const Categorias = () => {

    const categorias =[
        {name:"Accion"},
        {name:"Suspenso"},
        {name:"Aventura"}
    ]
    return ( 

        <ul className="nav nav-pills flex-column mb-auto">
            {categorias.map(categoria =>(
                <Categoria
                    categoria={categoria}
                />
            ))}
            
        </ul>
     );
}
 
export default Categorias;