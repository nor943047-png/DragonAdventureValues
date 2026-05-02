const express = require("express");
const fs = require("fs");
const cron = require("node-cron");
const { updateDatabase } = require("./updater");

const app = express();

// API
app.get("/dragons", (req, res) => {
  const data = JSON.parse(fs.readFileSync("dragons.json"));
  res.json(data);
});

// авто обновление каждые 6 часов
cron.schedule("0 */6 * * *", () => {
  updateDatabase();
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
