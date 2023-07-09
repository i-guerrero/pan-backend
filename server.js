// Server.js
// Will start up server and listen for requests

// Import express app
const app = require("./app");

// Configure PORT #
require("dotenv").config();
const PORT = process.env.PORT || 9000;

// Setup app to listen at defined port
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
