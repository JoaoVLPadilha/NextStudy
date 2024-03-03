"use client"
import React from 'react'

const Imc = () => {
    const [peso, setPeso] = React.useState(0);
    const [altura, setAltura] = React.useState(0);
    const [result, setResult] = React.useState(0);
  
    return (
      <>
        <label htmlFor="peso">Peso</label>
        <input
          type="number"
          id="peso"
          value={peso}
          onChange={(e) => setPeso(+e.target.value)}
        />
        <label htmlFor="altura">Altura</label>
        <input
          type="number"
          id="altura"
          value={altura}
          onChange={(e) => setAltura(+e.target.value)}
        />
        <button onClick={() => setResult(peso / (altura * altura))}>
          Calcular
        </button>
  
        {result != 0 && <h2>{result.toFixed(0)}</h2>}
      </>
    );
  
}

export default Imc