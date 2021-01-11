const express = require("express");

const pedidosController = require("./controller/pedidos");

const routes = express.Router();

routes.post("/pedidos", pedidosController.adicionarPedido);

routes.get("/pedidos", pedidosController.listarPedidos);

module.exports = routes;