// import Link from 'next/link'
import { ReactNode } from 'react';
import { Code } from "@chakra-ui/react"
import Formulario from '../../my-components/Formulario';
import Texto from '../../my-components/Texto';
import Numero from '../../my-components/Numero';
import useForm from '../../my-hooks/useForm.js';
import {
  Box,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export default function PasoUno() {

  const { form, isLoading,isError } = useForm(99);
  
  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  const contenido = "HOLA --> "+JSON.stringify(form);

   const miContenido = form.contenido.map( c => {
      console.log(c);
      console.log(c.tipo);
      switch (c.tipo) {
        case "Texto":
          console.log(c.tipo +" es texto");
          return <Texto key={c.id} nombre={c.nombre} etiqueta={c.etiqueta}></Texto>;
        case "Numero":
          console.log(c.tipo +" es Numero");
          return <Numero key={c.id} nombre={c.nombre} etiqueta={c.etiqueta}></Numero>;
        default:
          console.log(c.tipo +" es texto defecto");
          return <Texto key="2" nombre="Martin" etiqueta="ERROR"></Texto>;
      }
    });
    console.log(miContenido);

    const miForm = <Formulario titulo={form.titulo}>{miContenido}</Formulario>;

  return(
    <>      
      <Box p={4}>
        {miForm}
      </Box>
    </>);



}
