const Game = require("../models/games");
// const bcrypt = require("bcrypt-nodejs");

let refreshTokens = [];
const gameControl = {
	getGames: async (req, res) => {
		try {
			const game = await Game.findAll();
			return res.send(game);
		} catch (err) {
			return res.status(500).json({ msg: "error from the server side" });
		}
	},
	getOneGame: async (req, res) => {
		try {
			const game = await game.findOne({
				where: req.game.game_id,
			});
			return res.send(game);
		} catch (err) {
			return res.status(500).json({ msg: "error from the server side" });
		}
	},
	createGame: async (req, res) => {
		try {
			const {
				game_name,
				game_image,
				game_price,
				game_trailer,
				game_rating,
                game_type,
			} = req.body;

			const newgame = await game.create({
				game_name: game_name,
				game_image: game_image,
				game_price: game_price,
				game_trailer: game_trailer,
				game_rating: game_rating,
                game_type: game_type,
			});
			return res.send(newgame);
		} catch (err) {
			return res.status(500).json({ msg: "error from the server side" });
		}
	},
	updateGame: async (req, res) => {
		try {
			const {
				game_name,
				game_image,
				game_price,
				game_trailer,
				game_rating,
                game_type,
			} = req.body;

			const verifygame = await game.findOne({
				where: { game_id: req.params.id },
			});
			if (verifygame) {
				const updatedgame = await game.update(
					{
						game_name: game_name,
						game_image: game_image,
						game_price: game_price,
						game_trailer: game_trailer,
						game_rating: game_rating,
                        game_type: game_type,
					},
					{
						where: {
							game_id: req.params.id,
						},
					}
				);
				return res.send(updatedgame);
			} else {
				return res.status(404).send("Object not found in db");
			}
		} catch (err) {
			return res.status(500).json({ msg: "error from the server side" });
		}
	},
	deleteGame: async (req, res) => {
		try {
			const verifygame = await game.findOne({
				where: { game_id: req.params.id },
			});
			if (!verifygame) return res.status(404).send("Object not found in db");
			await game.delete(req.params.id);
			return res.send(`succesffuly deleted object id  ${req.params.id} `);
		} catch (err) {
			return res.status(500).json({ msg: "error from the server side" });
		}
	},
};

module.exports = gameControl;
