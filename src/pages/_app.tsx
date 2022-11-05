import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

export default function App({ Component, pagePros }) {
  return (
    <>
      <Head>
        <title>LogGo Pay</title>
      </Head>
      <ChakraProvider>
        <Component {...pagePros} />
      </ChakraProvider>
    </>
  );
}
