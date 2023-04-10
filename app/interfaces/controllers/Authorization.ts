import { Errors } from "./errors";
import { Authorization } from "../../application/use_cases/Authorization";

export async function getAccessToken(request) {
  // Context
  // const serviceLocator = request.server.app.serviceLocator;
  const Repository = request.server.app.serviceLocator;

  // Input
  const userId = request.payload["userId"];
  const password = request.payload["password"];

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
    return Errors.unauthorized("Bad credentials");
  }
}

export function verifyAccessToken(request, h) {
  // Context
  const Repository = request.server.app.serviceLocator;

  // Input
  const authorizationHeader = request.headers.authorization;
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    throw Errors.badRequest(
      "Missing or wrong Authorization request header",
      "oauth"
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
    return h.authenticated({
      credentials: { uid },
      artifacts: { accessToken: accessToken },
    });
  } catch (err) {
    return Errors.unauthorized("Bad credentials");
  }
}
