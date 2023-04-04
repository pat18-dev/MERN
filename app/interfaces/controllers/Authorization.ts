import { Errors } from './errors';
import { Authorization } from '../../application/use_cases/Authorization';
import { Login } from '../../domain/Login';


export async function getAccessToken(request) {
  // Context
  // const serviceLocator = request.server.app.serviceLocator;
  const Repository =  

  // Input
  const email = request.payload['username'];
  const password = request.payload['password'];

  //Object
  User = Login(email, password) 

  // Treatment
  try {
    const accessToken = await Authorization.getAccessToken(User, serviceLocator);

    // Output
    return accessToken;
  } catch (err) {
    return Errors.unauthorized('Bad credentials');
  }
}

export function verifyAccessToken(request, h) {

  // Context
  const serviceLocator = request.server.app.serviceLocator;

  // Input
  const authorizationHeader = request.headers.authorization;
  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    throw Errors.badRequest('Missing or wrong Authorization request header', 'oauth');
  }
  const accessToken = authorizationHeader.replace(/Bearer/gi, '').replace(/ /g, '');

  // Treatment
  try {
    const { uid } = Authorization.verifyAccessToken(accessToken, serviceLocator);

    // Output
    return h.authenticated({
      credentials: { uid },
      artifacts: { accessToken: accessToken }
    });
  } catch (err) {
    return Errors.unauthorized('Bad credentials');
  }
}