import React, { useState } from 'react';
import {Link} from "react-router-dom";

const Register = () => {


    const [usuario,setUsuario] = useState({
        name:"",
        email:"",
        password:"",
        confirma:""
    });
    const {name,email,password,confirma} = usuario;
    
    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault();

        //Validar

        //Espacios vacios

        //Passoword minimo 6 caracteres

        //Passwords iguales

        //pasarlo al action

    }

    return ( 
        <div className="global-container vh-100">
            <div className="card login-form" >
                
                    <div className="card-body">
                        <h1 className="card-title text-center">Crear Cuenta</h1>
                        <div className="card-text">
                            <form 
                                className="d-grid gap-2 formulario"
                                onSubmit={onSubmit}
                            >
                                <div className="form-group">
                                    <label 
                                        htmlFor="name" 
                                        className="form-label"
                                    >Nombre</label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        name="name"
                                        className="form-control" 
                                        placeholder="Hernan Salamandra"
                                        value={name}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label 
                                        htmlFor="email" 
                                        className="form-label"
                                    >Correo Electronico</label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        name="email"
                                        className="form-control" 
                                        placeholder="example@example.com"
                                        value={email}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label 
                                        htmlFor="password" 
                                        className="form-label"
                                    >Contraseña</label>
                                    <input 
                                        type="password" 
                                        id="password"
                                        name="password"
                                        className="form-control" 
                                        placeholder="Tu Contraseña"
                                        value={password}
                                        onChange={onChange}
                                    />
                                    
                                </div>
                                <div className="form-group">
                                    <label 
                                        htmlFor="confirma" 
                                        className="form-label"
                                    >Confirmar Contraseña</label>
                                    <input 
                                        type="password" 
                                        id="confirma"
                                        name="confirma"
                                        className="form-control" 
                                        placeholder="Repite la Contraseña"
                                        value={confirma}
                                        onChange={onChange}
                                    />
                                    
                                </div>

                                <button type="submit" className="btn btn-block btn-primary">Registrarme</button>
                            </form>
                            
                        </div>
                        <div className="registrarse">
                            ¿Ya tienes cuenta? <Link to="/login" className="link card-link">Iniciar Sesion</Link>
                            </div>
                            
                    </div>
                
            </div>
        </div>
     );
}
 
export default Register;