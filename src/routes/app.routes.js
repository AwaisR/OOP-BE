const express = require("express");

const AppController  = require('../controller/app.controller');

const appController = new AppController();

const router = express.Router();

router.get("/welcome", appController.welcome);

module.exports = router;