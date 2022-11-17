import db from '../../../lib/db'
import md5 from 'crypto-js/md5'

export default async (req, res) => {

    try {

        if (req.method == 'POST') {

            const data = await getLogin(req.body.usuario, req.body.senha);
            res.status(200).json(data);

        } else {

            res.status(200).data("Método não implementado");

        }

    } catch (error) {
        console.log(error);
    }

};

async function getLogin(usuarioEmail, usuarioSenha) {

    const sql = `
        select * from contrato_cliente
        where ccldoc = $1 and ccldoc = $2
    `;

    const params = [usuarioEmail, usuarioSenha];

    return db.query(sql, params);

}