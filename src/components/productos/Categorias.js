import React from 'react';
import Categoria from './Categoria';

const Categorias = () => {

    const categorias =[
        {name:"Accion"},
        {name:"Suspenso"},
        {name:"Aventura"}
    ]
    return ( 

        <ul className="listado nav flex-column text-center">
            {categorias.map(categoria =>(
                <Categoria
                    categoria={categoria}
                />
            ))}
            
        </ul>
     );
}
 
export default Categorias;