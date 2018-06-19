'use strict';

function Book(bookObj) {
    Object.keys(bookObj).forEach(key => this[key] = bookObj[key]);

}

Book.all = [];

Book.prototype.toHtml = function () {
    var template = Handlebars.compile($('#book-template').text());
    return template(this);
}



Book.loadAll = rows => {
    rows.forEach(bookObj => Book.all.push(new Book(rows)))
};



Book.fetchAll = callback => {
    $.get('/api/v1/books')
        .then(results => {
            Book.loadAll(results);
            callback();
        });
}

Book.prototype.insertRecord = function (callback) {
    $.post('/index', { title: this.title, author: this.author })
        .then(data => {
            console.log(data);
            if (callback) callback();
        })
};