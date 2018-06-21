let homeView = {};

homeView.initIndexPage = () => {
    $('.container').hide();
    $('.book-view').show();
    $('.home-view').innerHTML = "";
    Book.all.forEach(a => $('#book-list').append(a.toHtml()));
}

//