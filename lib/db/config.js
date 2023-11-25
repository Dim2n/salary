const Sequelize = require('sequelize');

const sequelize = new Sequelize('Hour', 'root', '', { // Указываем конфигурацию БД
    dialect : 'mysql',
    host : '127.0.0.1',

});

const Hours = require('./Hours')(sequelize);

module.exports = {
    sequelize : sequelize,
    hour : Hours
}