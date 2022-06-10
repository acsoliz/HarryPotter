const express = require("express");
const { Op } = require("sequelize");
const router = express();
const { Character, Activity } = require("../db");
const {
  getActivities,
  createActivities,
} = require("../controllers/activities");

router.get("/", getActivities);

router.post("/create", createActivities);

module.exports = router;
