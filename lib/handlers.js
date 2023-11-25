const data = require('./db/index');

exports.home = (req, res) => {
    res.render('home', {tittle : 'Головна сторiнка'});
}

exports.add = (req, res) => {
    res.render('add', {tittle : 'Додати години'});
}

exports.look = async function(req, res) {
    const salaryArray = await data.findAll();

    let sumSalary = 0;

    for (let i = 0; i < salaryArray.length; i++) {
        sumSalary += parseFloat((salaryArray[i].salaryFor8hour * 8) + ((salaryArray[i].endTime - salaryArray[i].startTime - 8) * salaryArray[i].salaryAfter8hour));
    }
    
    res.render('look', {salaryArray : salaryArray, sumSalary});
}

exports.sign = (req, res) => {
    res.render('sign', {tittle : 'Авторизація'});
}

exports.log_in = (req, res) => {
    res.render('login', {tittle : 'Авторизацiя'});
}

exports.delete = async function(req, res) {
    data.deleteRow(req.body);

    const salaryArray = await data.findAll();

    let sumSalary = 0;

    for (let i = 0; i < salaryArray.length; i++) {
        sumSalary += parseFloat((salaryArray[i].salaryFor8hour * 8) + ((salaryArray[i].endTime - salaryArray[i].startTime - 8) * salaryArray[i].salaryAfter8hour));
    }

    res.redirect(301, 'look');
}

exports.addHours = (req, res) => {
    console.log(req.url);
    const body = req.body;

    const salaryFor8hour = parseFloat(body.salary_for_8hour);
    const salaryAfter8hour = parseFloat(body.salary_after_8hour);
    const startTime = parseFloat(body['start-time']);
    const endTime = parseFloat(body['end-time']);

    const salaryData = {
        date : body.date,
        salaryFor8hour : salaryFor8hour,
        salaryAfter8hour : salaryAfter8hour,
        startTime : startTime,
        endTime : endTime
    }
    data.create(salaryData);

    res.render('add');
}

exports.auth = (req, res) => {
    console.log(req.url);
    console.log(req.body);
}

exports.login = (req, res) => {
    console.log(req.url);
    console.log(req.body);
}