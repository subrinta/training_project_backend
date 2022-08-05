const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://subrinta:subrinta@cluster0.figuw3i.mongodb.net/?retryWrites=true&w=majority')
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});