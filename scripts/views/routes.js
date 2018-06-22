'use strict'

Book.fetchLimited = callback => {
    $.get(`${app.ENVIRONMENT.apiURL}/api/v1/books`)
        .then(results => {
            Book.loadLimited(results);
            callback();
        })
};

Book.fetchOne = callback => {
    $.get(`${app.ENVIRONMENT.apiURL}/api/v1/books`)
        .then(results => {
            Book.loadOne(results);
            callback();
        })
};

Book.deleteBook = (id, callback) => {
    $.ajax({
        url: `${app.ENVIRONMENT.apiURL}/api/v1/books${id}`,
        method: 'DELETE',
        data: {
            book_id: 1,
        }
    })
        .then(results => {
            Book.loadOne(results);
            callback();
        })
};

Book.prototype.postBook = function (callback) {
    console.log(this);
    $.post(`${app.ENVIRONMENT.apiURL}/api/v1/books`, {
        title: this.title,
        author: this.author,
        isbn: this.isbn,
        image_url: this.image_url,
        description: this.description
    })
        .then(results => {
            Book.loadLimited(results);
            callback();
        })
};


Book.prototype.putBook = function (callback) {
    console.log(this);
    $.ajax({
        url: `${app.ENVIRONMENT.apiURL}/api/v1/books`,
        method: 'PUT',
        data: {
            book_id: this.book_id,
            title: this.title,
            author: this.author,
            isbn: this.isbn,
            image_url: this.image_url,
            description: this.description
        }
    })
        .then(console.log)
        .then(callback);
};

//