import React, { useState } from 'react';
import  PropTypes  from "prop-types";

export const EjercicioComponente = ({year}) => {

    let [actYear,setYear]=useState(year);

    const avanzar = e =>{
        setYear(actYear + 1);
    };

    const retroceder = e =>{
        setYear(actYear - 1)
    };

    const cambiarYear = (e) =>{
        let dato = parseInt(e.target.value) ;

        if(Number.isInteger(dato)){

            setYear(dato);
        }
        else{
            setYear(year)
        }

        
    };

    
  return (
    <div>
        <h1> Ejercicio de todo lo visto (sec 5 - 11)</h1>

        <p>EL año actual es: <strong className='label label-red'>{actYear}</strong>
        &nbsp;
        <button onClick={e=>avanzar()}>SIGUIENTE</button>
        &nbsp;
        <button onClick={e=>retroceder()}>ATRAS</button>
        </p>
        &nbsp;
        <p> Cambiar Dinamicamente
            &nbsp;
        <input type="text" placeholder='Cambia el año' onChange={cambiarYear}></input>
        </p>

    </div>
  )
}

EjercicioComponente.propTypes={
    year: PropTypes.number.isRequired
};