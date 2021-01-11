const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Pedido = require("../Models/Pedido");
const conexao = new Sequelize(dbConfig);

Pedido.init(conexao);