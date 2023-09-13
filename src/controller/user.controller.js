
const AppController = require("./app.controller");

class UserController extends AppController {
  constructor(userService) {
    super()
    this.userService = userService;
  }

  signup(req, res) {
    this.userService.signupUser(req, res)
  }

  login(req, res) {
    this.userService.loginUser(req, res)
  }

  forgotPassword(req, res) {
    this.userService.resetPassword(req, res)
  }


}

module.exports = UserController