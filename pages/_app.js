import React, { useContext } from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import Header from "../my-components/Header"
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  }
  const theme = extendTheme({ colors });

  const user = {
    loggedIn: false,
    showNavBar: true,
    name: {},
    mail: {}
  };
  
export const UserContext = React.createContext(user);

function MyApp({ Component, pageProps }) {
  const usuario = useContext(UserContext);
  console.log(usuario.loggedIn);
  return (
    <ChakraProvider  theme={theme}>
      <UserContext.Provider value={user}>
        {usuario.showNavBar && <Header ></Header>}
        <Component {...pageProps} />
      </UserContext.Provider>
    </ChakraProvider>
  )
}
export default MyApp;