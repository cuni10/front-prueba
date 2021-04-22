import React, { Fragment, useContext } from 'react';

import ProductosContext from "../../context/ProductosContext";

const AddProduct = () => {

    const productosContext = useContext(ProductosContext);

    const {categorias} = productosContext;

    return ( 
        <Fragment>
            <div className="container d-flex justify-content-center vh-100 align-items-center">
                <div className="p-3 m-3 w-25 bg-secondary rounded">

                    <h1 className="text-center ">Agregar Producto</h1>

                    <form>
                        <label for="name" className="form-label mt-3">Nombre</label>
                        <input type="text" id="name" className="form-control"></input>

                        <label for="formFile" className="form-label mt-3">Imagen</label>
                        <input className="form-control" type="file" id="formFile"></input>

                        <label for="select" className="form-label mt-3">Categoria</label>
                        <select id="select"className="form-select">
                            {categorias.map(categoria => (
                                <option>{categoria.name}</option>
                            ))}
                        </select>

                        <button type="submit" className="btn btn-primary text-center mt-2">Agregar</button>
                    </form>
                </div>
            </div>
        </Fragment>
     );
}
 
export default AddProduct;