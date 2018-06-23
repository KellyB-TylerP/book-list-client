'use strict'

var app = app || {};

(function (module) {
    let bookView = {};



    module.bookView.initIndexPage = () => {
        $('.container').hide();
        $('.book-view').show();
        $('.book-view').innerHTML = "";
        Book.one.forEach(a => $('#single-book').append(a.toHtml()));
    }

    function bookViewNav() {
        $('.book-view').hide()

    };
})(app);