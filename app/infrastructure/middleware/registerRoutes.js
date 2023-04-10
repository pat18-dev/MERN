const express = require("express");

function registerRoutes(routes) {
  const router = express.Router();

  // Loop through each route in the array and add it to the router
  routes.forEach((route) => {
    // Extract properties from the route object
    const { method, path, handler } = route;

    // Use the appropriate method on the router based on the route's HTTP method
    switch (method.toUpperCase()) {
      case "GET":
        router.get(path, handler);
        break;
      case "POST":
        router.post(path, handler);
        break;
      case "PUT":
        router.put(path, handler);
        break;
      case "PATCH":
        router.patch(path, handler);
        break;
      case "DELETE":
        router.delete(path, handler);
        break;
      default:
        throw new Error(`Invalid HTTP method "${method}"`);
    }
  });

  // Return the router middleware
  return router;
}
