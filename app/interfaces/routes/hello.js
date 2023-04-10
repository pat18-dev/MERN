const HelloController = require("../controllers/Hello");

module.exports = [
  {
    method: "GET",
    path: "/hello",
    handler: HelloController.sayHelloWorld,
    summary: "return hello",
    description: "Say hello",
    parameter: "",
    responses: "",
  },
  {
    method: "GET",
    path: "/hello/{name}",
    handler: HelloController.sayHelloPerson,
    summary: "return hello for especific name",
    description: "Say hello to",
    parameter: "",
    responses: "",
  },
];
