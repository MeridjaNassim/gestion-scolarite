var expect = require("chai").expect;
var request = require("request");

it("Gateway Test", function(done) {
  request("http://localhost:8080", function(error, response, body) {
    expect(body).to.equal("Gateway for microservices!");
    done();
  });
});
it("Authentification microservice Test", function(done) {
  request("http://localhost:3001", function(error, response, body) {
    expect(body).to.equal("Auth Service");
    done();
  });
});
it("Plannification microservice Test", function(done) {
  request("http://localhost:3003", function(error, response, body) {
    expect(body).to.equal("Plannification Service!");
    done();
  });
});
it("Gestion-continue microservice Test", function(done) {
  request("http://localhost:3002", function(error, response, body) {
    expect(body).to.equal("Gestion Continue Service!");
    done();
  });
});
