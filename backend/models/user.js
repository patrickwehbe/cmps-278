const sequelize = require("sequelize");
const db = require("../Database/dbConnection");
const queryInterface = db.getQueryInterface();

const User = db.define(
	"user",
	{
		user_id: {
			autoIncrement: true,
			type: sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		user_username: {
			type: sequelize.STRING,
			allowNull: true,
		},
		user_email: {
			type: sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		user_password: {
			type: sequelize.STRING,
			allowNull: false,
		},
		user_points: {
			type: sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		user_role: {
			type: sequelize.INTEGER,
			defaultValue: 0,
		},
		gender: {
			type: sequelize.STRING,
		},
		birthDate: {
			type: sequelize.STRING,
		},
		phoneNumber: {
			type: sequelize.STRING,
		},
		user_image: {
			type: sequelize.STRING,
		},
		wishlist: {
			type: sequelize.TEXT,
		},
	},
	{
		sequelize,
		tableName: "user",
		timestamps: true,
		indexes: [
			{
				name: "PRIMARY",
				unique: true,
				using: "BTREE",
				fields: [{ name: "user_id" }],
			},
		],
	}
);

// Drop table if the Schema changed

// db.sync().then(() => {
// 	User.sync({ force: true });
// });

//Edit Column

// queryInterface
// 	.addColumn("user", "wishlist", {
// 		type: sequelize.TEXT,
// 		allowNull: true,
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
// queryInterface
// 	.addColumn("user", "wishlist", sequelize.DataTypes.ARRAY(sequelize.DataTypes.JSON))
// 	.catch((err) => {
// 		console.log(err);
// 	}),
// 	queryInterface.addColumn("user", "birthDate", sequelize.STRING);
// queryInterface.addColumn("user", "phoneNumber", sequelize.STRING);

module.exports = User;
