const express = require("express");
const { Op } = require("sequelize");
const router = express();
const { Character, Activity } = require("../db");

async function getActivities(req, res, next) {
  console.log("Hi Activitie");
  try {
    const activities = await Activity.findAll();
    res.send(activities);
  } catch (error) {
    console.log(error, "Error in the get request activities");
    next(error);
  }
}

async function createActivities(req, res, next) {
  const { name, date, place, comments } = req.body;
  try {
    const activity = await Activity.create({
      name,
      date,
      place,
      comments,
    });
    console.log("Soy el post ", activity);
    res.send("Request created successfully");
  } catch (error) {
    console.log(error);
    res.status(400).send("Oh uh, something went wrong");
  }
}

module.exports = { getActivities, createActivities };
