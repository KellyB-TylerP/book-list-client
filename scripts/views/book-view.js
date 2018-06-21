let bookView = {};

bookView.initIndexPage = () => {
    $('.container').hide();
    $('.book-view').show();
    $('.book-view').innerHTML = "";
    Book.one.forEach(a => $('#single-book').append(a.toHtml()));
}


//