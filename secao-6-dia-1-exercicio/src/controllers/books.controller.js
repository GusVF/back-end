const booksService = require('../services/books.service');

const getAllBooks = async (_req, res) => {
  try {
    const books = await booksService.getAllBooks();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Error in your request!' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await booksService.getById(id);
    if (!books) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(books);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await booksService.createBook(title, author, pageQuantity);
    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Deu ruim criando livro' });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const updatingBook = await booksService.updateBook(
      id,
      title,
      author,
      pageQuantity
    );
    return res.status(200).json({ message: 'Book updated' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Book not found!' });
  }
};

const deleteById = async ( req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await booksService.deleteById(id);
    return res.status(200).json( {message: 'Book deleted with success' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Book not found'});
  }

}

module.exports = {
  getAllBooks,
  getById,
  createBook,
  updateBook,
  deleteById,
};
