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
        {itens?.map((data) => {
          console.log(data);
          <PaymentItem handleItemClick={handleItemClick} data={data} key={data.embcod }/>
        })}
      </Wrap>

      <PaymentModal isOpen={isOpen} onClose={onClose} item={item} />

    </Template >
  );
};

export default Payment;
