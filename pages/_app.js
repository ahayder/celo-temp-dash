import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import "@fontsource/poppins"
import "@fontsource/inter"

const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Poppins'
  },
  colors: {
    celo: {
      100: "#3488eb",
      900: "#1e76db",
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp