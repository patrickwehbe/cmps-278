const sequelize = require("sequelize");
const db = require("../Database/dbConnection");
const queryInterface = db.getQueryInterface();

const Movie = db.define(
	"movies",
	{
		movie_id: {
			autoIncrement: true,
			type: sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		movie_name: {
			type: sequelize.STRING,
			allowNull: false,
		},
		movie_description: {
			type: sequelize.STRING,
		},
		movie_image: {
			type: sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		movie_rating: {
			type: sequelize.FLOAT,
			allowNull: false,
		},
		movie_price: {
			type: sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		movie_director: {
			type: sequelize.STRING,
			defaultValue: 0,
		},
		date_released: {
			type: sequelize.DATE,
			allowNull: false,
		},
		movie_category: {
			type: sequelize.STRING,
		},
		movie_trailer: {
			type: sequelize.STRING,
		},
		movie_cast: {
			type: sequelize.STRING,
		},
	},
	{
		sequelize,
		tableName: "movies",
		timestamps: true,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [{ name: "movie_id" }],
			},
		],
	}
);

// Drop table if the Schema changed

// db.sync().then(() => {
// 	Movie.sync({ force: true });
// });

//Edit Column

queryInterface.addColumn("movies", "movie_description", sequelize.STRING),
	// 	queryInterface.addColumn("Movie", "birthDate", sequelize.STRING);
	// queryInterface.addColumn("Movie", "phoneNumber", sequelize.STRING);

	(module.exports = Movie);
