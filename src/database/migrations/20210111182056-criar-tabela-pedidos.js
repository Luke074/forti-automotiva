'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        queryInterface.createTable("pedidos", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            cliente: {
                type: Sequelize.STRING,
                alownNull: false
            },
            produto: {
                type: Sequelize.STRING,
                alownNull: false
            },
            quantidade: {
                type: Sequelize.INTEGER,
                alownNull: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            }
        });
    },

    down: async(queryInterface, Sequelize) => {
        queryInterface.dropTable("pedidos");
    }
};