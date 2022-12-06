const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  openWeatherKey: process.env.OW_KEY,
  yelpKey: process.env.YELP_KEY,
  port: process.env.PORT,
};
