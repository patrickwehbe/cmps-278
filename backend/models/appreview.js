const sequelize = require("sequelize");
const db = require("../Database/dbConnection");
const queryInterface = db.getQueryInterface();

const AppReview = db.define(
	"AppReview",
	{
		user_fid: {
			type: sequelize.INTEGER,
			allowNull: false,
		},
		app_fid: {
			type: sequelize.INTEGER,
			allowNull: false,
		},

		app_review_id: {
			type: sequelize.INTEGER,
			allowNull: false,
			unique: true,
            primaryKey: true,
		},

		num_of_likes: {
			type: sequelize.INTEGER,
			allowNull: false,
			unique: true,
		},

		content: {
			type: sequelize.STRING,
			allowNull: false,
		},
		review_rating: {
			type: sequelize.FLOAT,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "AppReview",
		timestamps: true,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [{ name: "review_id" }],
			},
		],
	}
);


// Drop table if the Schema changed

// db.sync().then(() => {
// 	Application.sync({ force: true });
// });

//Edit Column

// queryInterface.addColumn("Application", "gender", sequelize.STRING),
// 	queryInterface.addColumn("Application", "birthDate", sequelize.STRING);
// queryInterface.addColumn("Application", "phoneNumber", sequelize.STRING);

module.exports = AppReview;
