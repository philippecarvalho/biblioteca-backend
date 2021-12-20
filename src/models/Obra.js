require('dotenv').config();
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.createConnection(process.env.DB_URL);

autoIncrement.initialize(connection);

const ObraSchema = mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  editora: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  autores: {
    type: Array,
    required: true,
  },
});

ObraSchema.plugin(autoIncrement.plugin, 'Obra');
module.exports = mongoose.model('Obra', ObraSchema);
