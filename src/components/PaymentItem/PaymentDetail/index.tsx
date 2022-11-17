import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import moment from "moment";
import PaymentDetailItem from "./PaymentDetailItem";

const PaymentDetail = ({ payment }) => {

    return (
        <>
            <Grid templateColumns="repeat(3, 1fr)">
                <GridItem w='' bg=''>
                    <PaymentDetailItem type={"Tipo carga"} value={payment.tipoCarga.tcades} />
                </GridItem>
                <GridItem w='' bg=''>
                    <PaymentDetailItem type={"Quantidade"} value={payment.embqtd} />
                </GridItem>
                <GridItem w='' bg=''>
                    <PaymentDetailItem type={"Peso"} value={payment.embpes || 0} />
                </GridItem>
            </Grid>

            <Grid templateColumns="repeat(3, 1fr)" mt={2}>
                <GridItem w='' bg=''>
                    <PaymentDetailItem type={"Porto origem"} value={payment.embarqueCidade.cidnom} />
                </GridItem>
                <GridItem w='' bg=''>
                    <PaymentDetailItem type={"Porto destino"} value={payment.desembarqueCidade.cidnom} />
                </GridItem>
                <GridItem w='' bg=''>
                    <PaymentDetailItem type={"Embarque"} value={moment(payment.embdem).format("L")} />
                </GridItem>
            </Grid>
        </>
    );

}

export default PaymentDetail;