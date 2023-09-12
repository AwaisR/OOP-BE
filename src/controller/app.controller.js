class AppController {
  constructor() { }
  welcome(req, res) {
    return res.json({ success: "true" })
  }
}

module.exports = AppController