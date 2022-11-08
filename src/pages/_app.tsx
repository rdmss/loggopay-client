import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>LogGo Pay</title>
      </Head>
       <ChakraProvider>  
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
