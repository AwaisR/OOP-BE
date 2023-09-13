const express = require("express");

const AppController = require('../controller/app.controller');
const UserController = require('../controller/user.controller');
const UserService = require("../services/userService");

const appController = new AppController();

const userController = new UserController(new UserService());

const router = express.Router();

router.get("/welcome", appController.welcome);
router.post("/user/signup", userController.signup);
router.post("/user/login", userController.login);

module.exports = router;