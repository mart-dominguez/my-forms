import React, { useState } from 'react';

const defaultState = {id:0,posicion:0,mostrar:false,etiqueta:"",nombre:"",lineas:0};
export default function Texto({nombre,etiqueta}) {
  
  return (
    <p>Texto {nombre} + {etiqueta} </p>
    );
    
}