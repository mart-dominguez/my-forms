import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import Link from 'next/link'
import { ReactNode } from 'react';
import { Code } from "@chakra-ui/react"
import Formulario from '../../my-components/Formulario';
import Texto from '../../my-components/Texto';
import Numero from '../../my-components/Numero';
import useForm from '../../my-hooks/useForm.js';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  FormHelperText
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


export default function Generador() {
  const [isSaveForm, setSaveForm] = React.useState(false);
  const handleSaveForm = (event) => setSaveForm(!isSaveForm);

  const [titFrm, setTitFrm] = React.useState("");
  const handleChangeTit = (event) => setTitFrm(event.target.value);

  const [detFrm, setDetFrm] = React.useState("");
  const handleChangeDet = (event) => setDetFrm(event.target.value);
  const API_SERVER_URL = 'http://localhost:8080/api/v1';

  useEffect( () => {
    const guardarForm = () =>{
      axios.post(API_SERVER_URL+'/formulario', {
        titulo: titFrm
      })
      .then(function (response) {
        setSaveForm(false);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    if(isSaveForm){
      guardarForm();
    }
  },[isSaveForm]);

  
  return(
    <>
      <h1>Crear Formulario</h1>
      <FormControl id="titulo">
        <FormLabel>Titulo del relevamiento</FormLabel>
        <Input variant="flushed" placeholder="Titulo del relevamiento" id="titulo"
                value={titFrm}
                onChange={handleChangeTit} />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl id="detalle">
        <FormLabel>Detalle</FormLabel>
        <Textarea    value={detFrm}
              onChange={handleChangeDet}
        placeholder="Here is a sample placeholder" id="detalle"/>
        <FormHelperText>Descripcion del objetivo del relevamiento.</FormHelperText>
      </FormControl>
      <Button colorScheme="teal" size="md" onClick={handleSaveForm}>
        Crear
      </Button>
    </>);

}
