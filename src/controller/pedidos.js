const Pedido = require("../Models/Pedido");
const { Op } = require("sequelize");

module.exports = {
    async adicionarPedido(req, res) {

        const { cliente, produto, quantidade } = req.body;

        try {
            const pedido = await Pedido.create({ cliente, produto, quantidade });

            res.status(202).send(pedido);
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }

    },
    async listarPedidos(req, res) {
        const cliente_params = req.query.cliente;

        if (cliente_params) {
            let cliente = await Pedido.findAll({
                where: {
                    cliente: {
                        [Op.like]: `%${cliente_params}`
                    }
                }
            })
            return res.status(200).send(cliente);
        } else {
            try {
                const pedidos = await Pedido.findAll();

                res.send(pedidos);
            } catch (error) {
                console.log(error);
                res.status(500).send(error);
            }
        }

    }
}