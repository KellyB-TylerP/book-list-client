// 'use strict';
// let bookView = {};

// function Book(bookObj) {
//     Object.keys(bookObj).forEach(key => this[key] = bookObj [key]);

// }

// Book.prototype.toHtml = function () {
//     var template = Handlebars.compile($('#book-template').text());
//     return template(this);
// }

// Book.all = [];

// Book.loadAll = rows => {
//     rows.sort(function (a, b) {

//         let authorA = a.title.toUpperCase();
//         let authorB = b.title.toUpperCase();
//         if (authorA < authorB) {
//           return -1;
//         } if (authorA > authorB) {
//           return 1;
//         }
//         return 0;
//       });

//     Book.all = rows.map((info) => new Book(info));
// }

// Book.fetchAll = callback => {
//     $.get('http://localhost:3000/api/v1/books')
//         .then(results => {
//             Book.loadAll(results);
//             callback();
//         });
// }

// bookView.initIndexPage = () => {
//     $('.container').hide();
//     $('.book-view').show();
//     Book.all.forEach(a => $('#book-list').append(a.toHtml()));
// }


// $(document).ready(function () {
//     Book.fetchAll(bookView.initIndexPage);

// });