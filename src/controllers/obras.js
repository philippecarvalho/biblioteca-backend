const Obra = require('../models/Obra');

exports.getBooks = async function (req, res) {
  try {
    const obras = await Obra.find();
    res.json(obras);
  } catch (error) {
    res.json({ message: error });
  }
};

exports.getBook = async function (req, res) {
  try {
    const obra = await Obra.findById(req.params.id);
    res.json(obra);
  } catch (error) {
    res.json({ message: error });
  }
};

exports.addBook = async (req, res) => {
  const obra = new Obra({
    titulo: req.body.titulo,
    editora: req.body.editora,
    foto: req.body.foto,
    autores: req.body.autores,
  });

  try {
    const saved = await obra.save();
    res.json(saved);
  } catch (error) {
    res.json({ message: error });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const obra = await Obra.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(obra);
  } catch (error) {
    res.json({ message: error });
  }
};

exports.removeBook = (req, res) => {
  try {
    Obra.deleteOne({ _id: req.params.id }).then(() => {
      res.status(200).json({});
    });
  } catch (error) {
    res.json({ message: error });
  }
};
