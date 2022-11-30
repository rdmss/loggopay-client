import { Avatar, Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import MenuItem from "../components/NavBar/MenuItem";
import NavBar from "../components/NavBar";
import Template from "../components/template";
import { useContext, useEffect, useState } from "react";
import { UserConext } from "../utils/UserContext";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/auth";
import { getCookie } from "cookies-next";

const IndexPage = () => {

  const router = useRouter();

  const { user, setUser } : any = useAuth();

  useEffect(() => {
    if(!user){
      router.push("/auth/login");
    }
  })
  

  return (

    <Template>      
      { <iframe
          src="https://br.widgets.investing.com/live-currency-cross-rates?theme=darkTheme&roundedCorners=true&pairs=2103,1617,1,3,2,4,7,5"
          width="100%"
          height="500px"
        ></iframe> }
    </Template>

  );
};

export default IndexPage;
