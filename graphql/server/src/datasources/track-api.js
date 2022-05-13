const { RESTDataSource } = require("apollo-datasource-rest");

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/";
  }

  getToursForHome() {
    return this.get("api/v1/tours");
  }
}

module.exports = TrackAPI;
