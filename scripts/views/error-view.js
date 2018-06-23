'use strict'
app = app || {};
let errorView = {};

(function (module) {

    errorView.initErrorPage = (err) => {
        $('.container').hide();
        $('.error-view').show();
        $('#error-message').empty();
        Handlebars.compile($('#error-template').text(err));
    };

    function errorCallback(errorObj) {
        console.log(errorObj);
        errorView.initErrorPage(errorObj);
    }

    function errorViewNav() {
        $('.book-view').hide()
    }
    module.errorView = errowView;
})(app);
