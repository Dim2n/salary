const Sequelize = require('sequelize');

module.exports = function(sequelize) { //Создаем модель
    return sequelize.define('myHour', {
        date : {
            type: Sequelize.STRING(10),
            primaryKey : true
        },
        salaryFor8hour : {
            type : Sequelize.FLOAT.UNSIGNED,
        },
        salaryAfter8hour : {
            type : Sequelize.FLOAT.UNSIGNED,
        },
        startTime : {
            type : Sequelize.FLOAT.UNSIGNED,
        },
        endTime : {
            type : Sequelize.FLOAT.UNSIGNED,
        }
    }, {
        timestamps : false,
        tableName : 'myHour'
    })
}