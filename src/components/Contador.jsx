import React, { useState } from 'react'

/*
export const Contador = () => {
    return (
        <div>
            <h1>Contador</h1>
        </div>
    )
}*/

const Contador = ({inicial, factor}) => {
    //console.log(props)
    const [contador, setContador] = useState(inicial)
    const aumentar = () => {
       setContador( (valor) => valor + factor)
    }

    const disminuir = () => {
        if(contador <= 0) {
            alert( "el contador es 0" );
        } else {
            setContador( (valor) =>valor - factor)
        }
    }
    return (
        <div>
            <h1>Contador: {contador}</h1>
            <hr/>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    )
}

export default Contador