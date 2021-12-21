require('dotenv').config();
const express = require('express');
const app = express();
const obrasRoutes = require('./routes/obras');

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

app.use(express.json());
app.use('/obras', obrasRoutes);

app.get('/', (req, res) => {
	res.redirect('https://github.com/philippecarvalho/biblioteca-backend')
})

app.listen(process.env.PORT, () => {
  console.log(`online at ${process.env.PORT}`); 
});
