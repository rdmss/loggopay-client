import { Flex, Text } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

const menuItens = [
  {
    menu: "Moeda",
    link: "/",
  },
  {
    menu: "Meus Pagamentos",
    link: "/payment",
  },
  {
    menu: "Dados Pessoais",
    link: "/profile",
  },
  {
    menu: "Alterar Senha",
    link: "/change-password",
  },
  {
    menu: "Sair",
    link: "#",
  },
];

const NavBar = () => {
  return (
    <Flex width="250px" bg="white" rounded={20} p={5} mr="5" direction="column">
      <Text fontWeight={"bold"} fontSize="26px" color="#666666">
        Olá, Renan!
      </Text>
      <Text color="#666666" mb={5}>
        bem-vindo a LogGo Pay
      </Text>

      {menuItens.map((menuItem) => (
        <MenuItem key={menuItem.link} menuItem={menuItem} />
      ))}
    </Flex>
  );
};

export default NavBar;
