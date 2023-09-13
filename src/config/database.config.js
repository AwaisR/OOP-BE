const mongoose = require('mongoose');

class Database {
  constructor(dbconnectionString) {
    this.dbconnectionString = dbconnectionString
    this.isConnected = false
  }

  async connect() {
    try {
      await mongoose.connect(this.dbconnectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      this.isConnected = true
      console.log('Connected to MongoDB');

    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

  async disconnect() {
    if (this.isConnected) {
      await mongoose.connection.close();
      console.log('Disconnected from MongoDB');
      this.isConnected = false;
    }
  }

}
module.exports = Database;
