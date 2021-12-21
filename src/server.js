require('dotenv').config();
const express = require('express');
const app = express();
const obrasRoutes = require('./routes/obras');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger.json')

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(express.json());
app.use('/obras', obrasRoutes);

app.listen(process.env.PORT, () => {
  console.log(`online at ${process.env.PORT}`); 
});
