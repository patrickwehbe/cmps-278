const sequelize = require("sequelize");
const db = require("../Database/dbConnection");
const queryInterface = db.getQueryInterface();

const Application = db.define(
	"applications",
	{
		application_id: {
			autoIncrement: true,
			type: sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		application_name: {
			type: sequelize.STRING,
			allowNull: false,
		},

		application_image: {
			type: sequelize.STRING,
			allowNull: false,
			unique: true,
		},

		application_trailer: {
			type: sequelize.STRING,
			allowNull: false,
			unique: true,
		},

		application_rating: {
			type: sequelize.FLOAT,
			allowNull: false,
		},
		application_price: {
			type: sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		application_author: {
			type: sequelize.STRING,
			defaultValue: 0,
		},
	},
	{
		sequelize,
		tableName: "applications",
		timestamps: true,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [{ name: "application_id" }],
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

module.exports = Application;
