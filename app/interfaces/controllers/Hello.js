'use strict';

import { SayHello } from '../../application/use_cases/SayHello';

module.exports = {

  sayHelloWorld() {

    return SayHello();
  },

  sayHelloPerson(request) {

    return SayHello(request.params.name);
  },

};