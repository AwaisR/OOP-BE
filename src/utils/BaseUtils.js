const bcrypt = require("bcrypt")

class Helpers {
  static SALT_ROUNDS = 10

  static async hashPassword(password) {
    const salt = await bcrypt.genSalt(this.SALT_ROUNDS)
    const hashed = await bcrypt.hash(password, salt)
    return hashed
  }

  static async comparePassword(password, hashed) {
    const match = await bcrypt.compare(password, hashed)
    return match
  }

  static async response(res, statusCode, message,status,data) {
    if(data){
      return res.status(statusCode).json({ data,message, status });
    }
    return res.status(statusCode).json({ message, status });
  }
}
module.exports = Helpers