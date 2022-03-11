const express = require('express');
const { Op } = require('sequelize');
const router = express();
const { Character, Activity } = require('../db');

async function getActivities(req, res, next){
	console.log('Hi Activitie');
	try {
		const activities = await Activity.findAll();
        return res.send(activities)
	} catch (error) {
        console.log(error, "Error in the get request activities")
        next(error)
    }
}

async function createActivities(req, res, next){
    const {}= req.body;
    try {
        console.log("Soy el post ")
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getActivities, createActivities };