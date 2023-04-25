import { Request, Response } from "express"

import { unauthorized, badRequest } from "../controllers/errors";
import { Authorization } from "../../application/use_cases/Authorization";

export async function getAccessToken(request: Request) {
  // Context
  // const serviceLocator = request.server.app.serviceLocator;
  const Repository = request.server.app.serviceLocator;

  // Input
  const userId = request.body["userId"];
  const password = request.body["password"];

  //Object
  authorizationReference = new Authorization(Repository);

  // Treatment
  try {
    const accessToken = await authorizationReference.getAccessToken(
      userId,
      password
    );

    // Output
    return accessToken;
  } catch (err) {
    return unauthorized();
  }
}

export function verifyAccessToken(request: Request, response: Response) {
  // Context
  const Repository = request.server.app.serviceLocator;

  // Input
  const authorizationHeader = request.headers.authorization;
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    throw badRequest(
      "Missing or wrong Authorization request header"
    );
  }
  const accessToken = authorizationHeader
    .replace(/Bearer/gi, "")
    .replace(/ /g, "");

  //Object
  authorizationReference = new Authorization(Repository);

  // Treatment
  try {
    const { uid } = authorizationReference.verifyAccessToken(accessToken);

    // Output
    return response.authenticated({
      credentials: { uid },
      artifacts: { accessToken: accessToken },
    });
  } catch (err) {
    return unauthorized();
  }
}
