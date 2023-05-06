const sequelize = require("sequelize");
const db = require("../Database/dbConnection");
const queryInterface = db.getQueryInterface();

const AppReply = db.define(
	"AppReply",
	{
		app_reply_id: {
			autoIncrement: true,
			type: sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		user_fid: {
			type: sequelize.INTEGER,
			allowNull: false,
			references: {
				model: "user",
				key: "user_id",
			},
		},
		app_review_fid: {
			type: sequelize.INTEGER,
			allowNull: false,
			references: {
				model: "AppReview",
				key: "app_review_id",
			},
		},
		content: {
			type: sequelize.STRING(255),
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "AppReply",
		timestamps: true,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [{ name: "app_reply_id" }],
			},
			{
				name: "user_fid",
				using: "BTREE",
				fields: [{ name: "user_id" }],
			},
			{
				name: "app_review_fid",
				using: "BTREE",
				fields: [{ name: "app_review_id" }],
			},
		],
	}
);

// Drop table if the Schema changed

// db.sync().then(() => {
// 	AppReply.sync({ force: true });
// });

// AppReply.drop();

//Edit Column

// queryInterface.addColumn("Application", "gender", sequelize.STRING),
// 	queryInterface.addColumn("Application", "birthDate", sequelize.STRING);
// queryInterface.addColumn("Application", "phoneNumber", sequelize.STRING);

module.exports = AppReply;