const Movie = require("../models/movies");
// const bcrypt = require("bcrypt-nodejs");

let refreshTokens = [];
const movieControl = {
	getMovies: async (req, res) => {
		try {
			const movies = await Movie.findAll();
			return res.send(movies);
		} catch (err) {
			return res.status(500).send(err.message);
		}
	},
	getOneMovie: async (req, res) => {
		try {
			const movie = await Movie.findOne({
				where: req.movie.movie_id,
			});
			return res.send(movie);
		} catch (err) {
			return res.status(500).send(err.message);
		}
	},
	createMovie: async (req, res) => {
		try {
			const {
				movie_name,
				movie_image,
				movie_price,
				movie_director,
				movie_rating,
				date_released,
				movie_category,
				movie_cast,
				movie_trailer,
			} = req.body;

			const newMovie = await Movie.create({
				movie_name: movie_name,
				movie_image: movie_image,
				movie_price: movie_price,
				movie_director: movie_director,
				movie_rating: movie_rating,
				date_released: date_released,
				movie_category: movie_category,
				movie_cast: movie_cast,
				movie_trailer: movie_trailer,
			});

			return res.send(newMovie);
		} catch (err) {
			return res.status(500).send({ error: err.message });
		}
	},
	updateMovie: async (req, res) => {
		try {
			const {
				movie_name,
				movie_image,
				movie_price,
				movie_director,
				movie_rating,
				date_released,
				movie_category,
				movie_cast,
				movie_trailer,
			} = req.body;

			const verifyMovie = await Movie.findOne({
				where: { movie_id: req.params.id },
			});
			if (verifyMovie) {
				const updatedMovie = await Movie.update(
					{
						movie_name: movie_name,
						movie_image: movie_image,
						movie_price: movie_price,
						movie_director: movie_director,
						movie_rating: movie_rating,
						date_released: date_released,
						movie_category: movie_category,
						movie_cast: movie_cast,
						movie_trailer: movie_trailer,
					},
					{
						where: {
							movie_id: req.params.id,
						},
					}
				);
				return res.send(updatedMovie);
			} else {
				return res.status(404).send("Object not found in db");
			}
		} catch (err) {
			return res.status(500).send(err.message);
		}
	},
	deleteMovie: async (req, res) => {
		try {
			const verifyMovie = await Movie.findOne({
				where: { movie_id: req.params.id },
			});
			if (!verifyMovie) return res.status(404).send("Object not found in db");
			await Movie.destroy({
				where: { movie_id: req.params.id },
			});
			return res.send(`successfully deleted object id ${req.params.id}`);
		} catch (err) {
			return res.status(500).send(err.message);
		}
	},
};

module.exports = movieControl;
