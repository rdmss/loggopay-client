import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../NavBar";
import { useSession, signIn } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import { NextResponse } from "next/server";
import { useRouter } from "next/router";
import { UserConext } from "../../utils/UserContext";

const Template = ({ children }) => {

  return (
    <>
      <Flex height="100vh" bg="#F0F0F0" direction="column">

        <Flex
          bgGradient="linear(to-t, #ff4800, #f17746)"
          width="100%"
          height="100px"
          direction="row"
          px="100px"
          alignItems="center"
        >
          <Box>
            <Image src="/image/logo.png" width={251} height={54} />
          </Box>
        </Flex>

        <Flex
          width="100%"
          bg=""
          height="100%"
          direction="row"
          px="100px"
          py="50"
        >
          <NavBar />

          <Flex flex="1" bg="white" rounded={20} px={2} pt={10}>
            {children}
          </Flex>
        </Flex>
      </Flex>
      
    </>
  );

};

export default Template;
