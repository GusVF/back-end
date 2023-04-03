const { Book } = require('../models');

const getAllBooks = async () => {
  const allBooks = await Book.findAll();
  return allBooks;
};

const getById = async (id) => {
  const booksById = await Book.findByPk(id);
  return booksById;
};

const createBook = async (title, author, pageQuantity) => {
  const newBook= await Book.create({title, author, pageQuantity});
  console.log(newBook);
  return newBook;
};

const updateBook = async ( id, title, author, pageQuantity) => {
  const [updatingBook] = await Book.update({title, author, pageQuantity}, {where: { id }});
};

const deleteById = async (id) => {
  const deleteBook = await Book.destroy({ where: { id }});
};

module.exports = {
  getAllBooks,
  getById,
  createBook,
  updateBook,
  deleteById,
};
