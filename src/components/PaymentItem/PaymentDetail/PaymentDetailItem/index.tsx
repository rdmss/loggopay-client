import { Flex, Text } from "@chakra-ui/react";

const PaymentDetailItem = ({ type, value }) => {
    return (
        <>
            <Flex direction={"column"} bg="">
                <Text fontSize='md'>{type}</Text>
                <Text fontSize='md'>{value}</Text>
            </Flex>
        </>
    )
}

export default PaymentDetailItem;