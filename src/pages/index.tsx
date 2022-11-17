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

const menuItens = [
  {
    menu: "Moeda",
    link: "#",
  },
  {
    menu: "Meus Pagamentos",
    link: "#",
  },
  {
    menu: "Dados Pessoais",
    link: "#",
  },
  {
    menu: "Alterar Senha",
    link: "#",
  },
  {
    menu: "Sair",
    link: "#",
  },
];

const IndexPage = () => {

  const router = useRouter();

  //vou fazer por aqui... não é a melhor forma. mas fazer o que 
  //const [user, setUser]: any = useState(); não é o mais bonito... mas já ajuda
  //ele ta rerenderizzando sozinho?n eu to aertando f5
  //blz, vou continuar aqui, vouf azer o post da ocorrência
  //vlw
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
