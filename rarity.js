const rarityMap = [
  { key: "veidreki", rarity: "Mythic", value: 1000000 },
  { key: "fulong", rarity: "Mythic", value: 950000 },

  { key: "aranga", rarity: "Legendary", value: 500000 },
  { key: "amaris", rarity: "Legendary", value: 600000 },

  { key: "event", rarity: "Event", value: 400000 },
  { key: "season", rarity: "Seasonal", value: 350000 },

  { key: "world", rarity: "Common", value: 10000 }
];

function getDragonData(name) {
  const lower = name.toLowerCase();

  for (let r of rarityMap) {
    if (lower.includes(r.key)) {
      return { rarity: r.rarity, value: r.value };
    }
  }

  return { rarity: "Rare", value: 200000 };
}

module.exports = { getDragonData };
