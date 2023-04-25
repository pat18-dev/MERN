export const badRequest = (error: string) => ({
  statusCode: 400,
  body: error,
});

export const forbidden = (error: string) => ({
  statusCode: 403,
  body: error,
});

export const unauthorized = () => ({
  statusCode: 401,
  body: "Unauthorized",
});

export const serverError = (error: string) => ({
  statusCode: 500,
  body: "Internal server error:" + error,
});

export const ok = (data: string) => ({
  statusCode: 200,
  body: data,
});

export const noContent = () => ({
  statusCode: 204,
  body: null,
});