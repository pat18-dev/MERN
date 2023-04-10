"use strict";

module.exports = (() => {
  const badRequest = (error) => ({
    statusCode: 400,
    body: error,
  });

  const forbidden = (error) => ({
    statusCode: 403,
    body: error,
  });

  const unauthorized = () => ({
    statusCode: 401,
    body: "Unauthorized",
  });

  const serverError = (error) => ({
    statusCode: 500,
    body: "Internal server error",
  });

  const ok = (data) => ({
    statusCode: 200,
    body: data,
  });

  const noContent = () => ({
    statusCode: 204,
    body: null,
  });
})();
