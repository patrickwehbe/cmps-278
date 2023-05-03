const book = require("../models/books");
// const bcrypt = require("bcrypt-nodejs");

let refreshTokens = [];
const bookControl = {
	getBooks: async (req, res) => {
		try {
			const book = await book.findAll();
			return res.send(book);
		} catch (err) {
			return res.status(500).json({ msg: "error from the server side" });
		}
	},
	getOneBook: async (req, res) => {
		try {
			const book = await book.findOne({
				where: req.book.book_id,
			});
			return res.send(book);
		} catch (err) {
			return res.status(500).json({ msg: "error from the server side" });
		}
	},
	createBook: async (req, res) => {
		try {
			const { book_name, book_cover, book_price, book_author, book_rating } =
				req.body;

			const newbook = await book.create({
				book_name: book_name,
				book_cover: book_cover,
				book_price: book_price,
				book_author: book_author,
				book_rating: book_rating,
			});
			return res.send(newbook);
		} catch (err) {
			return res.status(500).json({ msg: "error from the server side" });
		}
	},
	updateBook: async (req, res) => {
		try {
			const { book_name, book_cover, book_price, book_author, book_rating } =
				req.body;

			const verifybook = await book.findOne({
				where: { book_id: req.params.id },
			});
			if (verifybook) {
				const updatedbook = await book.update(
					{
						book_name: book_name,
						book_cover: book_cover,
						book_price: book_price,
						book_author: book_author,
						book_rating: book_rating,
					},
					{
						where: {
							book_id: req.params.id,
						},
					}
				);
				return res.send(updatedbook);
			} else {
				return res.status(404).send("Object not found in db");
			}
		} catch (err) {
			return res.status(500).json({ msg: "error from the server side" });
		}
	},
	deleteBook: async (req, res) => {
		try {
			const verifybook = await book.findOne({
				where: { book_id: req.params.id },
			});
			if (!verifybook) return res.status(404).send("Object not found in db");
			await book.delete(req.params.id);
			return res.send(`succesffuly deleted object id  ${req.params.id} `);
		} catch (err) {
			return res.status(500).json({ msg: "error from the server side" });
		}
	},
};

module.exports = bookControl;
