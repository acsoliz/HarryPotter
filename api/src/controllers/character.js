const express = require("express");
const { Op } = require("sequelize");
const router = express();
const { Character, Activity } = require("../db");

//_______________________ All Characters && Filter By Name______________________________________

async function getAllChars(req, res, next) {
  const { name } = req.query;

  try {
    if (!name) {
      const Allcharacters = await Character.findAll({ includes: Activity });
      return res.send(Allcharacters);
    }

    let characters;
    if (name) {
      characters = await Character.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
    } else {
      {
        console.log("We can't find the character, please check the name");
      }
    }
    return res.send(characters);
  } catch (error) {
    console.log("Error in get request ", error);
    next(error);
  }
}
//_______________________ Filter By Ancestry______________________________________

async function filterAncestry(req, res, next) {
  const { filterCharacters } = req.params;
  console.log(filterCharacters);
  try {
    const newCharacters = await Character.findAll({
      where: {
        ancestry: filterCharacters,
      },
    });
    return res.json(newCharacters);
  } catch (error) {
    next(error);
  }
}

//_______________________ Filter By Id______________________________________

async function filterById(req, res) {
  const { filterId } = req.params;
  console.log("soy el filtro ID, esto es filterId ", filterId, req.params);
  
  try {
    const charactersId = await Character.findAll({
      where: {
        id: filterId,
      },
    });
    return res.json(charactersId);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAllChars, filterAncestry, filterById };
