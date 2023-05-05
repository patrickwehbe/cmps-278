const sequelize = require("sequelize");
const db = require("../Database/dbConnection");
const queryInterface = db.getQueryInterface();

const game = db.define(
	"games",
	{
		game_id: {
			autoIncrement: true,
			type: sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		game_name: {
			type: sequelize.STRING,
			allowNull: false,
		},
		game_image: {
			type: sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		game_rating: {
			type: sequelize.FLOAT,
			allowNull: false,
		},
		game_price: {
			type: sequelize.FLOAT,
			allowNull: false,
			defaultValue: 0,
		},
		game_trailer: {
			type: sequelize.STRING,
			defaultValue: 0,
		},
		
        game_type: {
            type: sequelize.STRING, 
            allowNull: false,
        }
	},
	{
		sequelize,
        tableName: "games",
		timestamps: true,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [{ name: "game_id" }],
			},
		],
	}
);

// Drop table if the Schema changed

// db.sync().then(() => {
// 	game.sync({ force: true });
// });

//Edit Column

// queryInterface.addColumn("game", "gender", sequelize.STRING),
// 	queryInterface.addColumn("game", "birthDate", sequelize.STRING);
// queryInterface.addColumn("game", "phoneNumber", sequelize.STRING);

module.exports = game;
