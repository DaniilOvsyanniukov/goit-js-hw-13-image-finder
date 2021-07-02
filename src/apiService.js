const number = 1;
function showCountries(event) {
    fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${event}&page=${number}&per_page=12&key=22330478-3bd9f5a2d8db4972b1e40fa44`)
        .then(response => {
            return response.json();
        })
        .then(value => {
            console.log(responseVarification(value))
        })
        .catch(error => {
            console.log(error);
        })
}

export { showCountries };

