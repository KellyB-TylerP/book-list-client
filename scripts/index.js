
'use strict'

var app = app || {};

(function(module){

// Evaluate for production or development enviroment
let productionApi = 'https://kb-tp-booklist.herokuapp.com/';
let devApi = 'http://localhost:3000';

module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);

module.ENVIRONMENT = {
    apiURL: module.isProduction ? productionApi : devApi
};

// Error callback
function errorCallback(errorObj) {
    console.log(errorObj);
    errorView.initErrorPage(errorObj);
};

})(app);



