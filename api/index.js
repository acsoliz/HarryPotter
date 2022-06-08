const server = require('./src/app.js');
const { default: axios } = require('axios');
const { conn, Character } = require('./src/db.js');

conn.sync({ force: true }).then(async () => {
	try {
		let diexPersonas = [];

		const characters = await axios('http://hp-api.herokuapp.com/api/characters');

		for (let i = 0; i < 25; i++) {
			diexPersonas.push(characters.data[i]);
		}
		diexPersonas = diexPersonas.map((e) => {
			return {
				name     : e.name,
				ancestry : e.ancestry,
				house    : e.house,
				actor    : e.actor,
				image    : e.image
			};
		});
		// await Character.bulkCreate(diexPersonas);  
		for (const characters of diexPersonas) {
			Character.create({
				name     : characters.name,
				ancestry : characters.ancestry.length > 2 ? characters.ancestry : 'No tiene ancestro'  ,
				house    : characters.house.length>2 ?characters.house: 'Unknown',
				actor    : characters.actor,
				image    : characters.image
			});
		}

		
	} catch (e) {
		console.log('Error server', e);
	}

	server.listen(3001, () => {
		console.log('%s listening at 3001'); // eslint-disable-line no-console
	});
});
