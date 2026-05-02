const axios = require("axios");
const cheerio = require("cheerio");
const { getDragonData } = require("./rarity");

const BASE = "https://dragon-adventures.fandom.com";

async function getLinks() {
  const { data } = await axios.get(BASE + "/wiki/Category:Dragons");
  const $ = cheerio.load(data);

  const links = [];

  $(".category-page__member-link").each((i, el) => {
    links.push($(el).attr("href"));
  });

  return links;
}

async function parseDragon(url) {
  try {
    const { data } = await axios.get(BASE + url);
    const $ = cheerio.load(data);

    const name = $("h1").text().trim();
    const img = $("figure img").first().attr("src") || "";

    const { rarity, value } = getDragonData(name);

    return { name, value, rarity, img };

  } catch {
    return null;
  }
}

async function parseAll() {
  const links = await getLinks();
  const result = [];

  for (let link of links) {
    const d = await parseDragon(link);
    if (d) result.push(d);
  }

  return result;
}

module.exports = { parseAll };
