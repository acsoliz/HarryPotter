const express = require('express');
const router = express.Router();

router.use(express.json());

const authCharacters = require('./characters.js');
const authActivities = require('./activities.js');

router.use('/characters', authCharacters);
router.use('/activities', authActivities);

module.exports = router;
