import React from 'react'
import PropTypes from "prop-types";
export const TercerComponente = ({
                                  nombre,
                                  apellido
                                }) => {

    
  return (
    <div>
        <h1>Comunicacion entre componentes y props</h1>
        <h1>Mi nombre es {nombre} </h1>
        <h2>Mi apellido es {apellido}</h2>

    </div>
  )
}

TercerComponente.propTypes={
  nombre:PropTypes.string.isRequired,
  apellido:PropTypes.string
}

TercerComponente.defaultProps={
  nombre:"Lio",
  apellido:"Messi"
}
