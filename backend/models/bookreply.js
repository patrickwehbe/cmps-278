const sequelize = require("sequelize");
const db = require("../Database/dbConnection");
const queryInterface = db.getQueryInterface();

const BookReply = db.define(
	"BookReply",
	{
		user_fid: {
			type: sequelize.INTEGER,
			allowNull: true,
		},
		book_fid: {
			type: sequelize.INTEGER,
			allowNull: true,
		},

		book_review_id: {
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
		book_review_id: {
			type: sequelize.INTEGER,
			allowNull: false,
			unique: true,
			primaryKey: true,
		},
	},
	{
		sequelize,
		tableName: "BookReview",
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
// 	bookReviewx.sync({ force: true });
// });

//Edit Column

// queryInterface.addColumn("booklication", "gender", sequelize.STRING),
// 	queryInterface.addColumn("booklication", "birthDate", sequelize.STRING);
// queryInterface.addColumn("booklication", "phoneNumber", sequelize.STRING);

module.exports = BookReply;
