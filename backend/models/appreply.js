const sequelize = require("sequelize");
const db = require("../Database/dbConnection");
const queryInterface = db.getQueryInterface();

const AppReply = db.define(
	"AppReply",
	{
		user_fid: {
			type: sequelize.INTEGER,
			allowNull: true,
		},
		app_fid: {
			type: sequelize.INTEGER,
			allowNull: true,
		},

		app_review_id: {
			type: sequelize.INTEGER,
			allowNull: false,
			unique: true,
			primaryKey: true,
		},

		num_of_likes: {
			type: sequelize.INTEGER,
			allowNull: true,
			unique: true,
		},

		content: {
			type: sequelize.STRING,
			allowNull: true,
		},
		app_review_id: {
			type: sequelize.INTEGER,
			allowNull: false,
			unique: true,
			primaryKey: true,
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
// 	AppReviewx.sync({ force: true });
// });

//Edit Column

// queryInterface.addColumn("Application", "gender", sequelize.STRING),
// 	queryInterface.addColumn("Application", "birthDate", sequelize.STRING);
// queryInterface.addColumn("Application", "phoneNumber", sequelize.STRING);

module.exports = AppReply;
