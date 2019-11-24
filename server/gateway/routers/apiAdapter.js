const axios = require("axios");

module.exports = baseURL => {
  return axios.default.create({
    baseURL: baseURL
  });
};
