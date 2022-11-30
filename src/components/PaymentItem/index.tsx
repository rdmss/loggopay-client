import { Button, Circle, Divider, Flex, HStack, Image, Text, WrapItem } from "@chakra-ui/react";
import PaymentDetail from "./PaymentDetail";

const PaymentItem = ({ data, handleItemClick }) => {

    return (
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
                    <Text fontWeight={"bold"}>Total de Encargos: {data?.total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
                    <HStack direction={"row"} justifyContent={"right"} spacing={15} mt={3}>
                        <Button rounded={20} width="100px">Taxas</Button>
                        <Button bg={"#4EA994"} color="white" rounded={20} width="100px" onClick={() => handleItemClick(data)}>Pagar</Button>
                    </HStack>
                </Flex>
            </Flex>
        </WrapItem>
    );

}

export default PaymentItem;