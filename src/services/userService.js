const User = require("../dao/userClass")
const Helpers = require("../utils/BaseUtils")

const config = require("../config/app.config")
const jwt = require('jsonwebtoken');

class UserService {
  constructor() {
    this.userDao = new User();
  }

  async signupUser(req, res) {
    try {
      const { username, email, password } = req.body;
      const emailExists = await this.userDao.findByEmail(email)
      if (!emailExists) {
        const hashed = await Helpers.hashPassword(password)
        const createdUser = await this.userDao.createUser(username, email, hashed)
        return Helpers.response(res, '201', 'User created successfully', 'true', createdUser)
      } else {
        return Helpers.response(res, '403', 'User already exist', 'false')
      }
    } catch (error) {
      console.log('Test ~ error:', error)
      return Helpers.response(res, '500', 'Internal Server Error', 'false')
    }
  }

  async loginUser(req, res) {
    try {
      const { email, password } = req.body
      const findUser = await super.findByEmail(email)
      if (!findUser) {
        return Helpers.response(res, '403', 'Incorrect email and password', 'false')
      }
      const comparePassword = await Helpers.comparePassword(password, findUser.password)
      if (!comparePassword) {
        return Helpers.response(res, '403', 'Incorrect email and password', 'false')
      }
      let userInfo = {
        _id: findUser._id,
        username: findUser.username,
        email: findUser.email,
      };
      //Prepare JWT token for authentication
      const jwtPayload = userInfo;
      const jwtData = {
        expiresIn: config.get('jwt.timeout'),
      };
      const secret = config.get('jwt.secret');
      // //Generated JWT token with Payload and secret.
      userInfo.token = jwt.sign(jwtPayload, secret, jwtData);

      return Helpers.response(res, '200', 'Acccount login sccuessfully', 'true', userInfo)

    } catch (error) {
      return Helpers.response(res, '500', 'Internal Server Error', 'false')
    }
  }
}

module.exports = UserService