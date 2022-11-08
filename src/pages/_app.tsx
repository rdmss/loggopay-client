import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import{AuthProvider}from '../contexts/auth';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>LogGo Pay</title>
      </Head>
      <AuthProvider>
        <ChakraProvider>  
          <Component {...pageProps} />
        </ChakraProvider>
      </AuthProvider>
    </>
  );
}
