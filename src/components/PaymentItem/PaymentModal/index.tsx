import {
    Badge,
    Circle,
    Divider,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Tab,
    Table,
    TableContainer,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import PaymentDetailItem from "../PaymentDetail/PaymentDetailItem";
import moment from "moment";
import { PixQRCode } from "pix-react";
import { useEffect, useState } from "react";
import PaymentModalHeader from "./PaymentModalHeader";

const PaymentModal = ({ isOpen, onClose, item, index }) => {

    const [tabIndex, setTabIndex] = useState(index);
    console.log(index);

    return (
        <Modal onClose={onClose} isOpen={isOpen} size={"6xl"} isCentered>
            <ModalOverlay />

            <ModalContent bg={"#FFF"}>
                <PaymentModalHeader item={item} />
                <ModalBody>
                    <Tabs variant="enclosed" onChange={(index) => setTabIndex(index)} defaultIndex={index}>
                        <TabList>
                            <Tab>
                                <Text color={"#F76224"}>Pagamento</Text>
                            </Tab>
                            <Tab>
                                <Text color={"#F76224"}>Taxas</Text>
                            </Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Heading fontSize="2xl" color={"#ff5100"}>
                                    Dados Básicos
                                </Heading>
                                <Divider mb={2} />
                                <Grid templateColumns="repeat(6, 1fr)">
                                    <GridItem w="" bg="">
                                        <PaymentDetailItem type={"Embarque"} value={item?.embcod} />
                                    </GridItem>
                                    <GridItem w="" bg="">
                                        <PaymentDetailItem
                                            type={"Tipo de Transporte"}
                                            value={item?.tipoTransporte?.tipoTransporte.ttrdes}
                                        />
                                    </GridItem>
                                    <GridItem w="" bg="">
                                        <PaymentDetailItem
                                            type={"Embarque"}
                                            value={moment(item?.embdem).format("L")}
                                        />
                                    </GridItem>
                                    <GridItem w="" bg="">
                                        <PaymentDetailItem
                                            type={"Tipo da Carga"}
                                            value={item?.tipoCarga.tcades}
                                        />
                                    </GridItem>
                                    <GridItem w="" bg="">
                                        <PaymentDetailItem
                                            type={"Quantidade"}
                                            value={item?.embqtd}
                                        />
                                    </GridItem>
                                    <GridItem w="" bg="">
                                        <PaymentDetailItem type={"Peso"} value={item?.embpes} />
                                    </GridItem>
                                </Grid>

                                <Grid templateColumns="repeat(2, 1fr)" mt={5}>
                                    <GridItem w="" bg="">
                                        <PaymentDetailItem
                                            type={"Cliente"}
                                            value={item?.contratoCliente.cclraz}
                                        />
                                    </GridItem>
                                    <GridItem w="" bg="">
                                        <PaymentDetailItem
                                            type={"Transporte"}
                                            value={item?.tipoTransporte?.tranom}
                                        />
                                    </GridItem>
                                </Grid>

                                <Grid templateColumns="repeat(2, 1fr)" mt={5}>
                                    <GridItem w="" bg="">
                                        <Flex
                                            direction={"column"}
                                            rounded={10}
                                            p={3}
                                            mr={2}
                                            shadow="md"
                                            bg={"blackAlpha.50"}
                                        >
                                            <Heading fontSize="2xl" color={"#ff5100"}>
                                                Origem
                                            </Heading>
                                            <Grid templateColumns="repeat(2, 1fr)" mt={5}>
                                                <GridItem w="" bg="">
                                                    <PaymentDetailItem
                                                        type={"Pais"}
                                                        value={item?.embarquePais.painom}
                                                    />
                                                </GridItem>
                                                <GridItem w="" bg="">
                                                    <PaymentDetailItem
                                                        type={"Estado"}
                                                        value={
                                                            item?.embarqueEstado.estnom +
                                                            ", " +
                                                            item?.embarqueEstado.estsig
                                                        }
                                                    />
                                                </GridItem>
                                            </Grid>
                                            <Grid templateColumns="repeat(2, 1fr)" mt={5}>
                                                <GridItem w="" bg="">
                                                    <PaymentDetailItem
                                                        type={"Cidade"}
                                                        value={item?.embarqueCidade.cidnom}
                                                    />
                                                </GridItem>
                                                <GridItem w="" bg="">
                                                    <PaymentDetailItem
                                                        type={"Porto Origim"}
                                                        value={item?.embarquePorto.pornom}
                                                    />
                                                </GridItem>
                                            </Grid>
                                        </Flex>
                                    </GridItem>
                                    <GridItem w="" bg="">
                                        <Flex
                                            direction={"column"}
                                            rounded={10}
                                            p={3}
                                            ml={2}
                                            shadow="md"
                                            bg={"blackAlpha.50"}
                                        >
                                            <Heading fontSize={"2xl"} color={"#ff5100"}>
                                                Destino
                                            </Heading>
                                            <Grid templateColumns="repeat(2, 1fr)" mt={5}>
                                                <GridItem w="" bg="">
                                                    <PaymentDetailItem
                                                        type={"Pais"}
                                                        value={item?.desembarquePais.painom}
                                                    />
                                                </GridItem>
                                                <GridItem w="" bg="">
                                                    <PaymentDetailItem
                                                        type={"Estado"}
                                                        value={
                                                            item?.desembarqueEstado.estnom +
                                                            ", " +
                                                            item?.desembarqueEstado.estsig
                                                        }
                                                    />
                                                </GridItem>
                                            </Grid>
                                            <Grid templateColumns="repeat(2, 1fr)" mt={5}>
                                                <GridItem w="" bg="">
                                                    <PaymentDetailItem
                                                        type={"Cidade"}
                                                        value={item?.desembarqueCidade.cidnom}
                                                    />
                                                </GridItem>
                                                <GridItem w="" bg="">
                                                    <PaymentDetailItem
                                                        type={"Porto Origim"}
                                                        value={item?.desembarquePorto.pornom}
                                                    />
                                                </GridItem>
                                            </Grid>
                                        </Flex>
                                    </GridItem>
                                </Grid>

                                <Heading fontSize="2xl" color={"#ff5100"} mt={5}>
                                    Pagamento
                                </Heading>
                                <Divider my={2} />
                                <Grid templateColumns="repeat(2, 1fr)">
                                    <GridItem w="" bg="">
                                        <Flex direction={"column"}>
                                            <Text>
                                                Faça o pagamento total das taxas para atualizar o status
                                            </Text>
                                            <Text fontWeight={"bold"}>
                                                Total de encargos:{" "}
                                                {item?.total.toLocaleString("pt-br", {
                                                    style: "currency",
                                                    currency: "BRL",
                                                })}
                                            </Text>
                                        </Flex>
                                    </GridItem>
                                    <GridItem w="" bg="">
                                        <Flex direction={"column"}>
                                            <Heading>
                                                <PixQRCode
                                                    pixParams={{
                                                        chave: "renanlnx@gmail.com",
                                                        recebedor: "Renan Miguel",
                                                        cidade: "Capivari",
                                                        identificador: item?.embcod,
                                                        valor: item?.total,
                                                    }}
                                                    renderAs="svg"
                                                    includeMargin={true}
                                                    size={128}
                                                />
                                            </Heading>
                                        </Flex>
                                    </GridItem>
                                </Grid>
                            </TabPanel>
                            <TabPanel>
                                <TableContainer>
                                    <Table variant="striped" colorScheme="gray">
                                        <Thead>
                                            <Tr>
                                                <Th>Taxa</Th>
                                                <Th>Status</Th>
                                                <Th isNumeric>Valor</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {item?.taxas.map((taxa): any => (
                                                <Tr>
                                                    <Td>{taxa.taxaTipo.ttides}</Td>
                                                    <Td>PENDENTE</Td>
                                                    <Td isNumeric>
                                                        {taxa.etxval.toLocaleString("pt-br", {
                                                            style: "currency",
                                                            currency: "BRL",
                                                        })}
                                                    </Td>
                                                </Tr>
                                            ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </ModalBody>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default PaymentModal;
