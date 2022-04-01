const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=3c2b113c9d22b4447b7180ba0954ba25&query=${longitude},${latitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (body.error) {
      callback("Unable to find location. Try another search.");
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature}॰C. It feels like ${body.current.feelslike}॰C.`
      );
    }
  });
};

module.exports = forecast;
