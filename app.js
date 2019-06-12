const express = require('express');
const formRoutes = require('./routes/formRoutes');

const bodyParser = require('body-parser');

const  app = express();

app.use(bodyParser.urlencoded({ extended:true}));

app.use(formRoutes);
app.listen(8080);