import { Circle, Flex, Heading, Image, ModalCloseButton, ModalHeader } from "@chakra-ui/react";

const PaymentModalHeader = ({ item }) => {

    return (
        <ModalHeader>
            <Flex color={"#666666"}>
                <Circle bg={"#666666"} p="5" mt={-9}>
                    <Image src={item?.tipoTransporte?.tipoTransporte.ttrcod == "2" ? "/image/aviao.png" : "/image/aviao.png"} />
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