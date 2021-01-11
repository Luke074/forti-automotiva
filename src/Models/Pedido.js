const { Model, DataTypes } = require("sequelize");

class Pedido extends Model {
    //Campos da tabela
    static init(sequelize) {
        super.init({
            cliente: DataTypes.STRING,
            produto: DataTypes.STRING,
            quantidade: DataTypes.INTEGER
        }, {
            sequelize,
        })
    }
}

module.exports = Pedido;