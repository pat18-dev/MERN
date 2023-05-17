const AuthorizationController = require("../controllers/Authorization");

module.exports = [
  {
    method: "GET",
    path: "/login",
    handler: AuthorizationController.getAccessToken,
    summary: "return hello",
    description: "Say hello",
    parameter: "",
    responses: "",
  }
];
