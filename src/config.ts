import {environment} from './environments/environment';

export const config = {
  apiUrl: 'http://ui-lib-demo-api.herokuapp.com',
  authRoles: {
    sa: ['SA'], // Only Super Admin has access
    admin: ['SA', 'Admin'], // Only SA & Admin has access
    editor: ['SA', 'Admin', 'Editor'], // Only SA & Admin & Editor has access
    user: ['SA', 'Admin', 'Editor', 'User'], // Only SA & Admin & Editor & User has access
    guest: ['SA', 'Admin', 'Editor', 'User', 'Guest'] // Everyone has access
  },
  appName: 'BeSmartTravel',
  gatewayEndpoint: environment.gatewayEndpoint,


  validationPatterns: {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/
  }
};
