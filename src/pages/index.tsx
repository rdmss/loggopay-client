import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import MenuItem from "../components/NavBar/MenuItem";
import NavBar from "../components/NavBar";
import Template from "../components/template";
import { useContext } from "react";
import { UserConext } from "../utils/UserContext";

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

  const msg = useContext(UserConext);
  console.log(msg);

  return (

    <Template>

      {msg}

      {/* <iframe
          src="https://br.widgets.investing.com/live-currency-cross-rates?theme=darkTheme&roundedCorners=true&pairs=2103,1617,1,3,2,4,7,5"
          width="100%"
          height="500px"
        ></iframe> */}
    </Template>

  );
};

export default IndexPage;
