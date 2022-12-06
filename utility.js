const axios = require("axios").default;

const { openWeatherKey, yelpKey } = require("./config");

/**
 * Gets weather info and a list of businesses from a city
 * @param {string} city the city to get weather info from
 * @returns {object}
 */
async function getWeatherFromCity(city) {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${openWeatherKey}`
    );


    return {
      city: res.data.name,
      lat: res.data.coord.lat,
      lon: res.data.coord.lon,
      temp: res.data.main.temp,
      description: res.data.weather[0].description,
      businesses: await getBusinessInfoFromLatitudAndLongitude(res.data.coord.lat, res.data.coord.lon),
    };

  } catch (error) {
    if (error.response) {
      console.error(`Error: ${error.response.data?.message}`);
      console.error(error.response.status);
      console.error(error.response.headers);

      return {
        error: error.response.data?.message,
        city: city,
      };
    } else if (error.request) {
      console.error(`Error: ${error.request}`);

    } else {
      console.error(`Error: ${error.message}`);

      return {
        error: error.message,
        city: city,
      };
    }
  }
}


/**
 * Gets businesses info based on the provided latitud and longitud
 * @param {number} lat latitud of the location
 * @param {number} lon longitud of the location
 * @returns an array of businesses info in the provided area
 */
async function getBusinessInfoFromLatitudAndLongitude(lat, lon) {
  try {
    const res = await axios.get("https://api.yelp.com/v3/businesses/search", {
      params: {
        latitude: lat,
        longitude: lon,
        limit: 5,
      },
      headers: { Authorization: `Bearer ${yelpKey}` },
    });


    const businesses = await Promise.all(res.data.businesses.map(async (business) => {
      const reviewsObject = await getReviewsFromBusinesses(business.alias);

      return {
        name: business.name,
        rating: business.rating,
        price: business.price,
        url: business.url,
        reviews: reviewsObject.reviews.map((review) => ({
          text: review.text,
          rating: review.rating,
          time_created: review.time_created,
          user: review.user.name
        })),
      };
    }));


    return businesses;
  } catch (error) {
    if (error.response) {
      console.error(`Error: ${error.response.data?.message}`);
      console.error(error.response.status);
      console.error(error.response.headers);
      return {
        error: error.response.data?.message,
        business: business.name,
      }
    } else if (error.request) {
      console.error(`Error: ${error.request}`);
      return {
        error: error.request,
        business: business.name,
      }
    } else {
      console.error(`Error: ${error.message}`);
      return {
        error: error.request,
        business: business.name,
      }
    }
  }

  /**
   * Gets reviews from a business
   * @param {string} business the alias of the business
   * @returns an array of reviews
   **/
  async function getReviewsFromBusinesses(business) {
    try {
      business = encodeURIComponent(business);
      const res = await axios.get(`https://api.yelp.com/v3/businesses/${business}/reviews`, {
        params: {
          limit: 3,
        },
        headers: { Authorization: `Bearer ${yelpKey}` },
      });

      return res.data;
    } catch (error) {
      if (error.response) {
        console.error(`Error: ${error.response.data?.message}`);
        console.error(error.response.status);
        console.error(error.response.headers);
        return {
          error: error.response.data?.message,
          business: business,
        }
      } else if (error.request) {
        console.error(`Error: ${error.request}`);
        return {
          error: error.request,
          business: business,
        }
      } else {
        console.error(`Error: ${error.message}`);
        return {
          error: error.message,
          business: business,
        }
      }

    }
  }
}


module.exports.getWeatherFromCity = getWeatherFromCity;
