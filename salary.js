const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars').engine;
const handler = require('./lib/handlers');

app.engine('handlebars', expressHandlebars({
    defaultLayout : 'main',
}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', handler.home);
app.get('/add', handler.add);
app.get('/look', handler.look);
app.get('/sign', handler.sign);
app.get('/log-in', handler.log_in);

app.post('/delete', handler.delete)
app.post('/auth', handler.auth);
app.post('/addHours', handler.addHours);
app.post('/login', handler.login);

app.listen(PORT, () => {
    console.log('Server done');
});