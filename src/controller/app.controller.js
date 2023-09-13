class AppController {
  constructor() {
    Object.getOwnPropertyNames(this.constructor.prototype)
      .filter((key) => typeof this[key] === "function" && key !== "constructor")
      .forEach((key)=> {
        this[key] = this[key].bind(this);
      });
  }
  welcome(req, res) {
    return res.json({ success: "true" })
  }
}

module.exports = AppController