const db = require('./config');
const Hours = db.hour;


exports.create = function(salaryData){
    Hours.create(salaryData)
    .then(console.log("Создана запись"));
}

exports.findAll = async function(){
    return await Hours.findAll({raw : true})
}

exports.deleteRow = function(params){
    Hours.destroy({
        where : params
    }).then(console.log('Успешно удалена запись'))
}