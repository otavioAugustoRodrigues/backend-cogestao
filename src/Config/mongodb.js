const mongoose = require('mongoose');
require('dotenv').config();

async function startDB() {
  await mongoose.connect(process.env.MONGO_URI);
}

module.exports = startDB();
