import React, { useState } from 'react';

/*     COMPONENTE HIJO    */

function ItemListContainer({greeting}) {

  const [mensaje, setMensaje] = useState(greeting); // Estado inicial con el greeting

  const handleClick = (greeting) => {
    alert("Lista de artículos actualizada!!!");
    setMensaje("Carga finalizada"); // Cambia el mensaje del h2
  };

  return (
    <>
      <div className="ItemListContainer">

        <h2>{mensaje}</h2>
        <button onClick={handleClick}>Actualizar lista</button>

      </div>
    </>
  )
}

export default ItemListContainer