import { Circle, Flex, Heading, Icon, Image, ModalCloseButton, ModalHeader } from "@chakra-ui/react";
import { IoBoatOutline } from 'react-icons/io5';
import { TbPlane } from 'react-icons/tb';

const PaymentModalHeader = ({ item }) => {

    return (
        <ModalHeader>
            <Flex color={"#666666"}>
                <Circle bg={"#666666"} p="5" mt={-9}>
                    <Icon as={item?.tipoTransporte?.tipoTransporte.ttrcod == "2" ? TbPlane : IoBoatOutline} w={10} h={10} color='white' />
                </Circle>
                <Heading ml={5} fontSize="3xl">
                    BL: {item?.embcod} | Pendente
                </Heading>
            </Flex>
            <ModalCloseButton />
        </ModalHeader>
    )

}

export default PaymentModalHeader;