'use strict';

module.exports = {
    up: function (queryInterface, Sequelize, done) {
        return queryInterface.createTable("admin_uv", {
            type_name: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: "",
                comment: "统计类型"
            },
            today_time: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            num: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
                comment: "统计今日时间"
            }
        }).then(function () {
            queryInterface.addIndex("admin_uv", ["type_name", 'today_time']);
        }).then(function () {
            queryInterface.addIndex("admin_uv", ["type_name"]);
        }).then(function () {
            queryInterface.addIndex("admin_uv", ["type_name", 'today_time'], {
                indexName: 'tnt',
                indicesType: 'UNIQUE'
            });
        }).then(function () {
            done();
        })
    },

    down: function (queryInterface, Sequelize) {
        /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.

         Example:
         return queryInterface.dropTable('users');
         */
    }
};