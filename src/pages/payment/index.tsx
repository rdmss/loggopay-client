import { Box, Button, Center, Circle, Divider, Flex, Grid, GridItem, Heading, HStack, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Tab, Table, TableCaption, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import Template from "../../components/template";
import Aviao from "../../../public/image/Aviao.svg"
import PaymentDetailItem from "../../components/PaymentDetail/PaymentDetailItem";
import PaymentDetail from "../../components/PaymentDetail";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { PixQRCode } from "pix-react";
import Head from "next/head";
import axios from "axios";
import moment from "moment";

const itensX = [
  {
    tipo: "nautico",
    bl: "431412",
    status: "pendente",
    tipo_carga: "Container",
    total: 12.10
  },
  {
    tipo: "nautico",
    bl: "1423",
    status: "pendente",
    tipo_carga: "Container",
    total: 33.10
  },
  {
    tipo: "nautico",
    bl: "1342",
    status: "pendente",
    tipo_carga: "Container",
    total: 100.10
  },
  {
    tipo: "nautico",
    bl: "512341",
    status: "pendente",
    tipo_carga: "Container",
    total: 53.10
  },
  {
    tipo: "nautico",
    bl: "6123",
    status: "pendente",
    tipo_carga: "Container",
    total: 432.10
  },
  {
    tipo: "nautico",
    bl: "513414354",
    status: "pendente",
    tipo_carga: "Container",
    total: 65.10
  },
  {
    tipo: "nautico",
    bl: "53146711",
    status: "pendente",
    tipo_carga: "Container",
    total: 44.10
  },
  {
    tipo: "nautico",
    bl: "1423513",
    status: "pendente",
    tipo_carga: "Container",
    total: 11.10
  },
  {
    tipo: "nautico",
    bl: "15611",
    status: "pendente",
    tipo_carga: "Container",
    total: 51.18,
    peso: "99,97"
  }
]



const Payment = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [item, setItem] = useState();
  const [itens, setItens] = useState([]);

  const handleItemClick = (itemModal) => {
    setItem(itemModal);
    onOpen();
  }

  useEffect(() => {
    getItens()
  }, [])

  const getItens = async () =>
    await axios.get('/api/process/2').then(function (response) {
      setItens(response.data)
    });

  return (
    <Template>
      <Wrap spacing='50px' align='center' p={5} pt={10} color={"gray.700"} overflow="scroll">

        {itens?.map((data) => (
          <WrapItem key={data.bl} w='410px' rounded={10} border="2px" borderColor={"#F76224"} p={3} shadow="md">

            <Flex direction={"column"} w={"100%"}>
              <Flex direction={"row"} w="100%" mb={2}>
                <Circle bg={"#666666"} p={5} mt={-9} ml={3}>
                  <Image src="/image/aviao.png" />
                </Circle>
                <Text fontSize='2xl' ml={5} color="#666666">
                  Bl: {data.embcod}
                </Text>
              </Flex>

              {/* Linha 1 */}
              <PaymentDetail payment={data} />
              <Divider my={2} />
              <Flex direction={"column"} background={""}>
                <Text>Status: Pendente</Text>
                <Text fontWeight={"bold"}>Total de Encargos: {data?.total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                <HStack direction={"row"} justifyContent={"right"} spacing={15} mt={3}>
                  <Button rounded={20} width="100px">Taxas</Button>
                  <Button bg={"#4EA994"} color="white" rounded={20} width="100px" onClick={() => handleItemClick(data)}>Pagar</Button>
                </HStack>
              </Flex>
            </Flex>
          </WrapItem>
        ))}

      </Wrap>

      <Modal onClose={onClose} isOpen={isOpen} size={"6xl"} isCentered>
        <ModalOverlay />
        <ModalContent bg={"#FFF"}>
          <ModalHeader>
            <Flex color={"#666666"}>
              <Circle bg={"#666666"} p="5" mt={-9}>
                <Image src="/image/aviao.png" />
              </Circle>
              <Heading ml={5} fontSize="3xl">
                BL: {item?.embcod} | Pendente
              </Heading>
            </Flex>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>

            <Tabs variant='enclosed'>
              <TabList>
                <Tab><Text color={"#F76224"}>Pagamento</Text></Tab>
                <Tab><Text color={"#F76224"}>Taxas</Text></Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Heading fontSize='2xl' color={"#ff5100"}>Dados Básicos</Heading>
                  <Divider mb={2} />
                  <Grid templateColumns="repeat(6, 1fr)">
                    <GridItem w='' bg=''>
                      <PaymentDetailItem type={"Embarque"} value={item?.embcod} />
                    </GridItem>
                    <GridItem w='' bg=''>
                      <PaymentDetailItem type={"Tipo de Transporte"} value={item?.tipoTransporte?.tipoTransporte.ttrdes} />
                    </GridItem>
                    <GridItem w='' bg=''>
                      <PaymentDetailItem type={"Embarque"} value={moment(item?.embdem).format("L")} />
                    </GridItem>
                    <GridItem w='' bg=''>
                      <PaymentDetailItem type={"Tipo da Carga"} value={item?.tipoCarga.tcades} />
                    </GridItem>
                    <GridItem w='' bg=''>
                      <PaymentDetailItem type={"Quantidade"} value={item?.embqtd} />
                    </GridItem>
                    <GridItem w='' bg=''>
                      <PaymentDetailItem type={"Peso"} value={item?.embpes} />
                    </GridItem>
                  </Grid>

                  <Grid templateColumns="repeat(2, 1fr)" mt={5}>
                    <GridItem w='' bg=''>
                      <PaymentDetailItem type={"Cliente"} value={item?.contratoCliente.cclraz} />
                    </GridItem>
                    <GridItem w='' bg=''>
                      <PaymentDetailItem type={"Transporte"} value={item?.tipoTransporte?.tranom} />
                    </GridItem>
                  </Grid>

                  <Grid templateColumns="repeat(2, 1fr)" mt={5}>
                    <GridItem w='' bg=''>
                      <Flex direction={"column"} rounded={10} p={3} mr={2} shadow="md" bg={"blackAlpha.50"}>
                        <Heading fontSize='2xl' color={"#ff5100"}>Origem</Heading>
                        <Grid templateColumns="repeat(2, 1fr)" mt={5}>
                          <GridItem w='' bg=''>
                            <PaymentDetailItem type={"Pais"} value={item?.embarquePais.painom} />
                          </GridItem>
                          <GridItem w='' bg=''>
                            <PaymentDetailItem type={"Estado"} value={item?.embarqueEstado.estnom + ", " + item?.embarqueEstado.estsig} />
                          </GridItem>
                        </Grid>
                        <Grid templateColumns="repeat(2, 1fr)" mt={5}>
                          <GridItem w='' bg=''>
                            <PaymentDetailItem type={"Cidade"} value={item?.embarqueCidade.cidnom} />
                          </GridItem>
                          <GridItem w='' bg=''>
                            <PaymentDetailItem type={"Porto Origim"} value={item?.embarquePorto.pornom} />
                          </GridItem>
                        </Grid>
                      </Flex>
                    </GridItem>
                    <GridItem w='' bg=''>
                      <Flex direction={"column"} rounded={10} p={3} ml={2} shadow="md" bg={"blackAlpha.50"}>
                        <Heading fontSize={"2xl"} color={"#ff5100"}>Destino</Heading>
                        <Grid templateColumns="repeat(2, 1fr)" mt={5}>
                          <GridItem w='' bg=''>
                            <PaymentDetailItem type={"Pais"} value={item?.desembarquePais.painom} />
                          </GridItem>
                          <GridItem w='' bg=''>
                            <PaymentDetailItem type={"Estado"} value={item?.desembarqueEstado.estnom + ", " + item?.desembarqueEstado.estsig} />
                          </GridItem>
                        </Grid>
                        <Grid templateColumns="repeat(2, 1fr)" mt={5}>
                          <GridItem w='' bg=''>
                            <PaymentDetailItem type={"Cidade"} value={item?.desembarqueCidade.cidnom} />
                          </GridItem>
                          <GridItem w='' bg=''>
                            <PaymentDetailItem type={"Porto Origim"} value={item?.desembarquePorto.pornom} />
                          </GridItem>
                        </Grid>
                      </Flex>
                    </GridItem>
                  </Grid>

                  <Heading fontSize='2xl' color={"#ff5100"} mt={5}>Pagamento</Heading>
                  <Divider my={2} />
                  <Grid templateColumns="repeat(2, 1fr)" >
                    <GridItem w='' bg=''>
                      <Flex direction={"column"} >
                        <Text>Faça o pagamento total das taxas para atualizar o status</Text>
                        <Text fontWeight={"bold"}>Total de encargos: {item?.total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                      </Flex>
                    </GridItem>
                    <GridItem w='' bg=''>
                      <Flex direction={"column"} >
                        <Heading><PixQRCode
                          pixParams={{
                            chave: 'renanlnx@gmail.com',
                            recebedor: 'Renan Miguel',
                            cidade: 'Capivari',
                            identificador: item?.embcod,
                            valor: item?.total
                          }}
                          renderAs="svg"
                          includeMargin={true}
                          size={128}
                        /></Heading>
                      </Flex>
                    </GridItem>
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <TableContainer>
                    <Table variant='striped' colorScheme='gray'>
                      <Thead>
                        <Tr>
                          <Th>Taxa</Th>
                          <Th>Status</Th>
                          <Th isNumeric>Valor</Th>
                        </Tr>
                      </Thead>
                      <Tbody>

                        {
                          item?.taxas.map((taxa): any => (
                            <Tr>
                              <Td>{taxa.taxaTipo.ttides}</Td>
                              <Td>PENDENTE</Td>
                              <Td isNumeric>{taxa.etxval.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Td>
                            </Tr>
                          ))
                        }

                      </Tbody>
                    </Table>
                  </TableContainer>
                </TabPanel>
              </TabPanels>
            </Tabs>


          </ModalBody>
          <ModalFooter>

          </ModalFooter>
        </ModalContent>
      </Modal>

    </Template >
  );
};

export default Payment;
