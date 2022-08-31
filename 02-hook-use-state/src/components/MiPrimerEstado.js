import React, { useState } from 'react'

export const MiPrimerEstado = () => {

    /*

    //  Pronblematica
    let nombre ="Manuel Bermudez";

    const cambiarNombre=e=>{

        nombre= "Alejandro Giraldo"

    };
    */

    let [nombre, setNombre] = useState("Manuel Bermudez");

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
        console.log(e.target);

    };



    return (
        <div>

            <h3>Componente MiPrimerEstado</h3>
            <strong className='label'>
                {nombre}
            </strong>

            &nbsp;
            <button onClick={e => cambiarNombre(e, "Alejandro")}> cambiar nombre a alejandro </button>
            &nbsp;
            <input type="text" onChange={ e => cambiarNombre(e, e.target.value) } placeholder="Cambia el nombre" />

        </div>
    )
}
