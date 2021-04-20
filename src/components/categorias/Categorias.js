import React, { useContext } from 'react';
import ProductoContext from '../../context/ProductosContext';
import Categoria from './Categoria';

const Categorias = () => {

    const productosContext = useContext(ProductoContext);
    
    const {categorias} = productosContext;

    return ( 

        <ul className="nav nav-pills flex-column mb-auto">
            {categorias.map(categoria =>(
                <Categoria
                    key={categoria.id}
                    categoria={categoria}
                />
            ))}
            
        </ul>
     );
}
 
export default Categorias;