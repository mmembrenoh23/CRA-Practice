import React, { useState } from 'react'

/*
export const Contador = () => {
    return (
        <div>
            <h1>Contador</h1>
        </div>
    )
}*/

const Contador = () => {
    
    const [contador, setContador] = useState(100)
    return (
        <div>
            <h1>Contador: {contador}</h1>
        </div>
    )
}

export default Contador