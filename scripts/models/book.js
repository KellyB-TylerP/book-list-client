
//Array of all books
Book.all = [];
//Array of limited books
Book.limited = []; 
//Array of one book
Book.one = []; 


//book object
function Book(bookObj) {
    Object.keys(bookObj).forEach(key => this[key] = bookObj[key]);
}

//append to html
Book.prototype.toHtml = function () {
    var template = Handlebars.compile($('#book-list-template').text());
    return template(this);
}


//load all books
Book.loadAll = rows => { 
    rows.sort(function (a, b) {

        let authorA = a.title.toUpperCase();
        let authorB = b.title.toUpperCase();
        if (authorA < authorB) {
            return -1;
        } if (authorA > authorB) {
            return 1;
        }
        return 0;
    });

    Book.all = rows.map((info) => new Book(info));
}

//Fetch all books
Book.fetchAll = callback => {
    $.get(`${app.ENVIRONMENT.apiURL}/api/v1/books`)
        .then(function(results) {
            Book.loadAll(results);
            callback();
        })
};


Book.prototype.postOne = function (callback) {
    console.log(this);
    $.ajax({
        url: `${app.ENVIRONMENT.apiURL}/api/v1/books`,
        method: 'POST',
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

//load a book with limited info
Book.loadLimited = rows => {
    rows.sort(function (a, b) {
        let authorA = a.title.toUpperCase();
        let authorB = b.title.toUpperCase();
        if (authorA < authorB) {
            return -1;
        } if (authorA > authorB) {
            return 1;
        }
        return 0;
    });

    Book.limited = rows.map((info) => new Book(info));
}

//Loads one book
Book.loadOne = rows => {
    rows.sort(function (a, b) {

        let authorA = a.title.toUpperCase();
        let authorB = b.title.toUpperCase();
        if (authorA < authorB) {
            return -1;
        } if (authorA > authorB) {
            return 1;
        }
        return 0;
    });

    Book.one = rows.map((info) => new Book(info));
}

