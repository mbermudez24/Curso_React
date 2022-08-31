//CREACION DE COMPONENTES
//1. Importamos modulos de react
import React from "react";

//2. Creamos la funcion del componente
const MiComponente = () => {

    

    let usuario = {
        nombre: "Manuel",
        apellido:"Bermudez",
        contraseña:"****"
    }

    return (
        //utilizar un div o un Fragmento( Fragment) de codigo para renderizar varias etiquetas en JSX
        <div className="mi-componente">
        
        <h2>Componente Creado</h2>
        <h3>Datos del usuario</h3>
        <ul>
            <li><strong>Todos los datos:</strong>{JSON.stringify(usuario)}</li>
            <li>Nombre: <strong>{usuario.nombre}</strong></li>
            <li>Apellido: <strong>{usuario.apellido}</strong></li>
            <li>Contraseña: <strong>{usuario.contraseña}</strong></li>
        </ul>
        <p>Este es mi primer componente</p>
        <ul>
            <li>
                React
            </li>
            <li>
                Angular
            </li>
            <li>
                Vue
            </li>
        </ul>
        </div>
        )

};
//3. Export

export default MiComponente;