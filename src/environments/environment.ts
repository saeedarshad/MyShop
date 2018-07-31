// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCTqKjFprhFdTQ5tq4Q7tn1A9eQVLpa6Vk",
    authDomain: "myshop-95.firebaseapp.com",
    databaseURL: "https://myshop-95.firebaseio.com",
    projectId: "myshop-95",
    storageBucket: "myshop-95.appspot.com",
    messagingSenderId: "656205270109"
  }
};
