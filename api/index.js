const server = require("./src/app.js");
const { default: axios } = require("axios");
const { conn, Character } = require("./src/db.js");

conn.sync({ force: false }).then(async () => {
  server.listen(process.env.PORT, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
  try {
    let diexPersonas = [];

    const characters = await axios(
      "http://hp-api.herokuapp.com/api/characters"
    );

    for (let i = 0; i < 25; i++) {
      diexPersonas.push(characters.data[i]);
    }
    diexPersonas = diexPersonas.map((e) => {
      return {
        name: e.name,
        ancestry: e.ancestry,
        house: e.house,
        actor: e.actor,
        image: e.image,

        species: e.species,
        dateOfBirth: e.dateOfBirth,
        wand: e.wand,
      };
    });
    // await Character.bulkCreate(diexPersonas);
    for (const characters of diexPersonas) {
      Character.findOrCreate({
        where: {
          name: characters.name,
          ancestry:
            characters.ancestry.length > 2
              ? characters.ancestry
              : "No tiene ancestro",
          house: characters.house.length > 2 ? characters.house : "Unknown",
          actor: characters.actor,
          image: characters.image,
          species:
            characters.species.length > 2 ? characters.species : "Unknown",
          dateOfBirth: characters.dateOfBirth,
          wand: characters.wand ? JSON.stringify(characters.wand) : "dont have",
        },
      });
    }
  } catch (e) {
    console.log("Error server", e);
  }
});
