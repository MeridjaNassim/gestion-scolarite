var expect = require("chai").expect;

var request = require("request");

describe("Status And Content of Services", () => {
  it("API Gateway", done => {
    request("http://localhost:8080", (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal("Gateway for microservices!");
      done();
    });
  });

  it("Auth Service", done => {
    request("http://localhost:8080/authService", (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal("Auth Service");
      done();
    });
  });
  it("Gestion Continue Service", done => {
    request(
      "http://localhost:8080/gcontinueService",
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal("Gestion Continue Service");
        done();
      }
    );
  });
  it("Plannification Service", done => {
    request(
      "http://localhost:8080/plannificationService",
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal("Plannification Service!");
        done();
      }
    );
  });
});
