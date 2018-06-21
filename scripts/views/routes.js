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

//