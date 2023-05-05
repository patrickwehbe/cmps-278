const sequelize = require("sequelize");
const db = require("../Database/dbConnection");
const queryInterface = db.getQueryInterface();

const BookReview = db.define(
	"BookReview",
	{
		user_fid: {
			type: sequelize.INTEGER,
			allowNull: false,
		},
		book_fid: {
			type: sequelize.INTEGER,
			allowNull: false,
		},

		book_review_id: {
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

module.exports = BookReview;
