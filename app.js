const express = require("express");
const app = express();

const { port } = require("./config");

const { getWeatherFromCity } = require("./utility");

/**
 * GET /weatherReport
 * @param {string} cities  a string of the target cities separated by a comma ","
 * Gets a weather report and lists businesses from the specified cities given
 */
app.get("/weatherReport", async (req, res) => {
  const cities = req.query.cities?.split(",");
  let weatherInfo = [];

  if (cities === undefined || cities[0].trim().length === 0) {
    res.status(400).send('Missing required query parameter: "cities"');
    return;
  }

  const cityWeatherInfo = cities.map((city) => getWeatherFromCity(city));

  weatherInfo = await Promise.all(cityWeatherInfo);
  res.send(weatherInfo);
});

app.listen(port, () => console.log(`App listening on port ${port}`));
