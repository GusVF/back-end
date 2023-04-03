const express = require('express');

const Book = require('./controllers/books.controller');

const app = express();

app.use(express.json());

app.get('/books', Book.getAllBooks);

app.get('/books/:id', Book.getById);

app.post('/books', Book.createBook);

app.put('/books/:id', Book.updateBook);

app.delete('/books/:id', Book.deleteById);

module.exports = app;