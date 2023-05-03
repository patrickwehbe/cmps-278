const Application = require("../models/applications");
// const bcrypt = require("bcrypt-nodejs");

let refreshTokens = [];
const applicationControl = {
	getApplications: async (req, res) => {
		try {
			const application = await Application.findAll();
			return res.send(application);
		} catch (err) {
			return res.status(500).send(err.message);
		}
	},
	getOneApplication: async (req, res) => {
		try {
			const application = await Application.findOne({
				where: req.application.application_id,
			});
			return res.send(application);
		} catch (err) {
			return res.status(500).send(err.message);
		}
	},
	createApplication: async (req, res) => {
		try {
			const {
				application_name,
				application_image,
				application_trailer,
				application_price,
				application_author,
				application_rating,
			} = req.body;

			const newApplication = await Application.create({
				application_name: application_name,
				application_image: application_image,
				application_trailer: application_trailer,
				application_price: application_price,
				application_author: application_author,
				application_rating: application_rating,
			});
			return res.send(newApplication);
		} catch (err) {
			return res.status(500).send({ error: err.message });
		}
	},
	updateApplication: async (req, res) => {
		try {
			const {
				application_name,
				application_image,
				application_trailer,
				application_price,
				application_author,
				application_rating,
			} = req.body;

			const verifyApplication = await Application.findOne({
				where: { application_id: req.params.id },
			});
			if (verifyApplication) {
				const updatedApplication = await Application.update(
					{
						application_name: application_name,
						application_image: application_image,
						application_trailer: application_trailer,
						application_price: application_price,
						application_author: application_author,
						application_rating: application_rating,
					},
					{
						where: {
							application_id: req.params.id,
						},
					}
				);
				return res.send(updatedApplication);
			} else {
				return res.status(404).send("Object not found in db");
			}
		} catch (err) {
			return res.status(500).send(err.message);
		}
	},
	deleteApplication: async (req, res) => {
		try {
			const verifyApplication = await Application.findOne({
				where: { application_id: req.params.id },
			});
			if (!verifyApplication) return res.status(404).send("Object not found in db");
			await Application.delete(req.params.id);
			return res.send(`successfully deleted object id  ${req.params.id} `);
		} catch (err) {
			return res.status(500).send(err.message);
		}
	},
};

module.exports = applicationControl;
