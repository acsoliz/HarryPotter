const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'character',
		{
			id       : {
				type         : DataTypes.UUID,
				defaultValue : DataTypes.UUIDV4,
				primaryKey   : true,
				allowNull    : false
			},
			name     : {
				type      : DataTypes.STRING,
				allowNull : false
			},
			ancestry : {
				type : DataTypes.STRING
			},
			house    : {
				type      : DataTypes.STRING,
				allowNull : false //
			},
			image    : {
				type         : DataTypes.TEXT,
				allowNull    : false,
				defaultValue : 'https://i.pinimg.com/736x/d9/9c/46/d99c46c56a34df5e29b2e84ae5da3830.jpg'
			},
			actor    : {
				type : DataTypes.STRING
			}
		},
		{ timestamps: false }
	);
};
