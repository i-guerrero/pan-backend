// App.js
// Will hold app routes
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  try {
    res.status(200).json({ data: "PAN Server is running." });
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = app;
