import { Box, Button, Center, Circle, Divider, Flex, Grid, GridItem, Heading, HStack, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Tab, Table, TableCaption, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import Template from "../../components/template";
import Aviao from "../../../public/image/Aviao.svg"
import PaymentDetailItem from "../../components/PaymentItem/PaymentDetail/PaymentDetailItem";
import PaymentDetail from "../../components/PaymentItem/PaymentDetail";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { PixQRCode } from "pix-react";
import Head from "next/head";
import axios from "axios";
import moment from "moment";
import PaymentItem from "../../components/PaymentItem";
import PaymentModal from "../../components/PaymentItem/PaymentModal";

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
          <PaymentItem handleItemClick={handleItemClick} data={data} />
        ))}
      </Wrap>

      <PaymentModal isOpen={isOpen} onClose={onClose} item={item} />

    </Template >
  );
};

export default Payment;
