require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const obrasRoutes = require('./routes/obras');

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

app.use(express.json());
app.use('/obras', obrasRoutes);

app.listen(PORT, () => {
  console.log(`online at ${PORT}`);
});
