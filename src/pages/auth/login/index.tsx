import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useToast
} from "@chakra-ui/react";
import axios from "axios";
import { setCookies, deleteCookie } from "cookies-next";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { userAgent } from "next/server";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../contexts/auth";


const Login = () => {

  const { user, setUser }: any = useAuth();
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const toast = useToast();

  if (user) {
    router.push('/');
  }

  const formLogin = data => {

    console.log(data);

    axios.post('/api/user', {
      usuario: data.usuario,
      senha: data.senha
    }).then(function (response) {

      if (response.data.rowCount == 0) {

        toast({
          title: 'Usuário não encontrado!',
          position: 'bottom-right',
          status: "warning",
          containerStyle: {
            background: "red"
          }
        })

      } else if (response.data.rowCount > 1) {

        toast({
          title: 'Problemas no usuário, contato o adminstrador do sistema!',
          position: 'bottom-right',
          status: "warning",
          containerStyle: {
            background: "red"
          }
        })
        return;

      } else {

        setUser(response.data.rows[0]);
        deleteCookie('user');
        setCookies('user', JSON.stringify(response.data.rows[0]));
        router.push("/")
      }

    }).catch(function (error) {
      console.log(error);
    });

    //setuser(data);
  };

  return (
    <Flex
      height="100vh"
      bg="#FFFAF9"
      py={100}
      px={180}
      alignItems="center"
      justifyContent="center"
      color="#000"
    >
      <Flex
        direction="row"
        height="100%"
        width="100%"
        bg="#FFF"
        rounded={30}
        boxShadow="dark-lg"
      >
        <Flex
          direction="column"
          height="100%"
          width="100%"
          bg=""
          roundedLeft={30}
          p={100}
          justifyContent="center"
        >
          <form onSubmit={handleSubmit(formLogin)}>
            <Heading color="#000" mb={10}>
              Entre com a sua conta
            </Heading>
            <Input
              color="#000"
              placeholder="email@loggopay.com.br"
              variant="flushed"
              mb={8}
              type="text"
              _placeholder={{
                color: "#888787"
              }}
              borderColor="#f86124"
              {...register("usuario", { required: true })}
            />
            <Input
              color="#000"
              placeholder="******"
              variant="flushed"
              mb={5}
              type="password"
              borderColor="#f86124"
              _placeholder={{
                color: "#888787"
              }}
              {...register("senha", { required: true })}
            />

            <Flex
              direction="row"
              width="100%"
              justifyContent="right"
              mb="100px"
            >
              <Link href="#">Esqueci minha senha</Link>
            </Flex>

            <Stack alignItems="center" alignContent="center">
              <Box>
                <Button
                  background="#64D9BE"
                  color="#FFF"
                  _hover={{ bg: "#F86124" }}
                  width="300px"
                  height="70px"
                  fontSize="24"
                  rounded={20}
                  type="submit"
                >
                  Entrar
                </Button>
              </Box>
            </Stack>
          </form>
        </Flex>

        <Flex
          direction="column"
          height="100%"
          width="100%"
          bgGradient="linear(to-t, #ff4800, #f17746)"
          roundedRight={30}
          p={50}
          pt={200}
        >
          <Heading>
            <Image src="/image/logo.png" width={251} height={54} />
          </Heading>

          <Text color="#fff" fontSize="3xl" my={5}>
            Olá, seja bem-vindo!
          </Text>
          <Text color="#fff" fontSize="2xl">
            O resultado do seu sucesso é a garantia da nossa eficiência.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
