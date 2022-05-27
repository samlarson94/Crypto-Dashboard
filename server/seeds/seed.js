const db = require("../config/connection");
const { Crypto } = require("../models");
const cryptoSeeds = require("./cryptoSeeds.json");

db.once("open", async () => {
  // await Crypto.deleteMany({});
  await Crypto.create(cryptoSeeds);

  console.log("all done!");
  process.exit(0);
});
