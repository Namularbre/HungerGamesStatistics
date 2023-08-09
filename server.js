const express = require('express');
const {config} = require('dotenv');
const helmet = require("helmet");
const bodyparser = require("body-parser");

config();

const app = express();

app.use(helmet());

app.use(bodyparser.urlencoded({extended: false}));

const apiTributesRouter = require('./routers/apiTributesRouter');
const tributeRouter = require('./routers/tributesRouter');

app.use('/api', apiTributesRouter);
app.use('/', tributeRouter);
app.use(express.static('public'));

app.listen(3000, 'localhost', () => {
    console.log(`http://localhost:${3000}`);
});
