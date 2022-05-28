import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { css, Global } from '@emotion/react'
import Head from 'next/head'

import { AuthProvider } from '@/contexts/AuthContext'
import { theme } from '@/styles/theme'

const GlobalStyle = () => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
    </>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
