const sequelize = require("sequelize");
const db = require("../Database/dbConnection");
const queryInterface = db.getQueryInterface();

const book = db.define(
	"books",
	{
		book_id: {
			autoIncrement: true,
			type: sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		book_name: {
			type: sequelize.STRING,
			allowNull: false,
		},
		book_cover: {
			type: sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		book_rating: {
			type: sequelize.FLOAT,
			allowNull: false,
		},
		book_price: {
			type: sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		book_author: {
			type: sequelize.STRING,
			defaultValue: 0,
		},
	},
	{
		sequelize,
        tableName: "books",
		timestamps: true,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [{ name: "book_id" }],
			},
		],
	}
);

// Drop table if the Schema changed

// db.sync().then(() => {
// 	book.sync({ force: true });
// });

//Edit Column

// queryInterface.addColumn("book", "gender", sequelize.STRING),
// 	queryInterface.addColumn("book", "birthDate", sequelize.STRING);
// queryInterface.addColumn("book", "phoneNumber", sequelize.STRING);

module.exports = book;
