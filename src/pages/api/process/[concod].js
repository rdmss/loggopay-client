import db from '../../../lib/db'
import md5 from 'crypto-js/md5'

export default async (req, res) => {

    try {

        if (req.method == 'GET') {

            const data = await getProcess(req.query.concod);
            res.status(200).json(data);

        } else {

            res.status(200).data("Método não implementado");

        }

    } catch (error) {
        console.log(error);
    }

};

async function getProcess(concod) {

    let params = "";
    let sql = "";

    sql = `
        select * from embarque
        where concod = $1
    `;

    sql = `
        select * from embarque
    `;

    params = [concod];

    //const jsonEmbarque = await db.query(sql, params);
    const jsonEmbarque = await db.query(sql);

    console.log("Linhas: " + jsonEmbarque.rowCount);

    for (let i = 0; i <= jsonEmbarque.rowCount - 1; i++) {

        //console.log(jsonEmbarque.rows[i]);

        jsonEmbarque.rows[i].embarquePais = await getPais(jsonEmbarque.rows[i].embpai);
        jsonEmbarque.rows[i].embarqueEstado = await getEstado(jsonEmbarque.rows[i].embest);
        jsonEmbarque.rows[i].embarqueCidade = await getCidade(jsonEmbarque.rows[i].embcid);

        jsonEmbarque.rows[i].embarquePorto = await getPorto(jsonEmbarque.rows[i].embpor);

        jsonEmbarque.rows[i].desembarquePais = await getPais(jsonEmbarque.rows[i].embdpa);
        jsonEmbarque.rows[i].desembarqueEstado = await getEstado(jsonEmbarque.rows[i].embdes);
        jsonEmbarque.rows[i].desembarqueCidade = await getCidade(jsonEmbarque.rows[i].embdci);

        jsonEmbarque.rows[i].desembarquePorto = await getPorto(jsonEmbarque.rows[i].embdpo);

        jsonEmbarque.rows[i].tipoTransporte = await getTipoTransporte(jsonEmbarque.rows[i].ttrcod);
        jsonEmbarque.rows[i].tipoCarga = await getTipoCarga(jsonEmbarque.rows[i].tcacod);
        jsonEmbarque.rows[i].tipoTransporte = await getTransporte(jsonEmbarque.rows[i].tracod);

        jsonEmbarque.rows[i].contratoCliente = await getContratoCliente(jsonEmbarque.rows[i].cclcod);

        jsonEmbarque.rows[i].taxas = await getTaxas(jsonEmbarque.rows[i].embcod);

        jsonEmbarque.rows[i].total = 0;

        for (let x = 0; x < jsonEmbarque.rows[i].taxas.length; x++) {
            jsonEmbarque.rows[i].total += jsonEmbarque.rows[i].taxas[x].etxval;
        }

    }

    return jsonEmbarque.rows;

}

async function getPais(paicod) {

    let sql = `select * from pais where paicod = $1`;

    let params = [paicod];

    const json = await db.query(sql, params);

    //console.log(json);

    return json.rows[0];

}

async function getEstado(estcod) {

    let sql = `select * from estado where estcod = $1`;

    let params = [estcod];

    const json = await db.query(sql, params);

    //console.log(json);

    return json.rows[0];

}

async function getCidade(cidcod) {

    let sql = `select * from cidade where cidcod = $1`;

    let params = [cidcod];

    const json = await db.query(sql, params);

    //console.log(json);

    return json.rows[0];

}

async function getTipoTransporte(ttrcod) {

    let sql = `select * from tipo_transporte where ttrcod = $1`;

    let params = [ttrcod];

    const json = await db.query(sql, params);

    //console.log(json);

    return json.rows[0];

}

async function getPorto(porcod) {

    let sql = `select * from porto where porcod = $1`;

    let params = [porcod];

    const json = await db.query(sql, params);

    //console.log(json);

    return json.rows[0];

}

async function getTipoCarga(tcacod) {

    let sql = `select * from tipo_carga where tcacod = $1`;

    let params = [tcacod];

    const json = await db.query(sql, params);

    //console.log(json);

    return json.rows[0];

}

async function getTransporte(tracod) {

    let sql = `select * from transporte where tracod = $1`;

    let params = [tracod];

    const json = await db.query(sql, params);

    for (let i = 0; i < json.rowCount; i++) {
        json.rows[i].tipoTransporte = await getTipoTransporte(json.rows[i].ttrcod);
    }


    return json.rows[0];

}

async function getEmbarqueStatus(tracod) {

    let sql = `select * from transporte where tracod = $1`;

    let params = [tracod];

    const json = await db.query(sql, params);

    //console.log(json);

    return json.rows[0];

}

async function getTaxas(embcod) {

    let sql = `select * from embarque_taxa where embcod = $1`;

    let params = [embcod];

    const json = await db.query(sql, params);

    for (let i = 0; i < json.rowCount; i++) {
        json.rows[i].taxaTipo = await getTaxa(json.rows[i].tticod);
        json.rows[i].moeda = await getMoeda(json.rows[i].moecod);
    }

    //console.log(json);

    return json.rows;

}

async function getTaxa(tticod) {

    let sql = `select * from taxa_tipo where tticod = $1`;

    let params = [tticod];

    const json = await db.query(sql, params);

    //console.log(json);

    return json.rows[0];

}


async function getMoeda(moecod) {

    let sql = `select * from moeda where moecod = $1`;

    let params = [moecod];

    const json = await db.query(sql, params);

    //console.log(json);

    return json.rows[0];

}


// async function getTipoTransporte(ttrcod) {

//     let sql = `select * from tipo_transporte where ttrcod = $1`;

//     let params = [ttrcod];

//     const json = await db.query(sql, params);

//     //console.log(json);

//     return json.rows[0];

// }



async function getContratoCliente(cclcod) {

     let sql = `select * from contrato_cliente where cclcod = $1`;

     let params = [cclcod];

     const json = await db.query(sql, params);

     //console.log(json);

     return json.rows[0];

}
