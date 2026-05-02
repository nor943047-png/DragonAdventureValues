const fs = require("fs");
const { parseAll } = require("./parser");

async function updateDatabase() {
  console.log("🔄 Updating dragons...");

  const data = await parseAll();

  fs.writeFileSync("dragons.json", JSON.stringify(data, null, 2));

  console.log("✅ Database updated:", data.length);
}

module.exports = { updateDatabase };
