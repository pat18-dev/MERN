const Authorization = require("../controllers/Authorization");

module.exports = [
  {
    method: 'GET',
    path: '/token',
    handler: Authorization.getAccessToken,
    summary: 'return hello',
    description: 'Say hello',
    parameter: '',
    responses: ''
  },
  {
    method: 'POST',
    path: '/token',
    handler: Authorization.verifyAccessToken,
    summary: 'return hello',
    description: 'Say hello',
    parameter: '',
    responses: ''
  }
];