// import Link from 'next/link'
import { ReactNode } from 'react';
import { Code } from "@chakra-ui/react"
import Formulario from '../../my-components/Formulario';
import Texto from '../../my-components/Texto';
import Numero from '../../my-components/Numero';
import useForm from '../../my-hooks/useForm.js';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
const Links = ['Ayuda', 'Contacto'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function PasoUno() {

  const { form, isLoading,isError } = useForm(99);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
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
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
        <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
      <Box p={4}>
        {miForm}
      </Box>
    </>);



}
