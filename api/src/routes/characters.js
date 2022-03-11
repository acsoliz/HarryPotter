const express = require('express');
const { Op } = require('sequelize');
const router = express();
const { Character, Activity } = require('../db');
const { getAllChars, filterAncestry, filterById } = require('../controllers/character');

router.get('/', getAllChars);

//FILTER BY Ancestry
router.get('/filterAnces/:filterCharacters', filterAncestry);

//FILTER BY ID
router.get('/filterId/:filterId', filterById);

module.exports = router;
