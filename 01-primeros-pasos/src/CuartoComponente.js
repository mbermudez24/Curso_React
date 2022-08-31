import React from 'react'

export const CuartoComponente = () => {

    const hasDadoClick=(e,nombre)=>{
        alert("Has dado Click al Botón "+nombre+"!!");
    }

    const hasDadoDobleClick=(e)=>{
        alert("Has dado Doble Click ");
    }

    const eventoOnMouse=(e,accion)=>{
        alert(`Has ${accion}  a/de la caja con el mouse`);
    }

    const estasDentro= e =>{
        alert("Estas Dentro del input, ingresa tu nombre!!");
    }
    const estasFuera=e=>{
        alert("Estas Fuera del input, ingresa tu nombre!!");
    }

  return (
    <div>
        <h1>Eventos en react</h1>

        <p>
            {/*evento Click*/}
            <button onClick={e=>hasDadoClick(e,"Manuel")}>Dame Click</button>

        </p>
        
        <p>
            {/*evento doble Click*/}
            <button onDoubleClick={hasDadoDobleClick}>Dame Doble Click</button>

        </p>

        <div id='caja' 
            onMouseEnter={e =>eventoOnMouse(e,"entrado")}
            
            onMouseLeave={e=> eventoOnMouse(e,"salido")}>

            {/*Evento onMouseEnter , onMouseLeave */}
            Pasa por encima

        </div>

        <p>
            {/*Evento onFocus y onBlur */}
            <input type="text" 
                onFocus={ estasDentro}
                onBlur={estasFuera}
                placeholder="introduce tu nombre..."/>
        </p>
                
    </div>
  )
}
