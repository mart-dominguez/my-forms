import React, { useState } from 'react';

const defaultState = {id:0,titulo:0,contenido:[]};

export default function Formulario({children,titulo}) {
  
  //const [titulo,setTitulo] = useState(pTit?pTit:'');

  return (
    <h1>
      <p>Formulario ....  </p>
      <p>{titulo}</p>
      {children}
    </h1>
  )

}