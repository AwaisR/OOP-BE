
const UserModel = require("../model/userModel")

class User {

  // method to save a new user
  async createUser(username, email, password) {
    const newUser = new UserModel({
      username,
      email,
      password,
    });
    return newUser.save();
  }
  
  //  method to find a user by email
  async findByEmail(email) {
    return UserModel.findOne({ email });
  }


  //remove duplicated code & make generic methods
}

module.exports = User