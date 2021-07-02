import './sass/main.scss';
import PhotoCard from './markup/photo-card.hbs'


const refs = {
    inputValue: document.querySelector(`input[name="query"]`),
    responseContainer: document.querySelector(`.gallery`),
    loadMore: document.querySelector('.loadMore'),
}

refs.inputValue.addEventListener('input', _.debounce(showImages, 500));
refs.loadMore.addEventListener('click', scrollWindow);
let inputValue = '';
var number = 0;

function showImages(event) {
    refs.responseContainer.innerHTML = ''
    inputValue = event.target.value;
    number = 1;

    if (event.target.value === ''){return}
    fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${event.target.value}&page=${number}&per_page=12&key=22330478-3bd9f5a2d8db4972b1e40fa44`)
        .then(response => {
            return response.json();
        })
        .then(value => {
            responseVarification(value)
        })
        .catch(error => {
            console.log(error);
        })
};

function responseVarification(value) {
    refs.responseContainer.insertAdjacentHTML('beforeend', PhotoCard(value.hits))            
}

function scrollWindow() {
    showMore()
    setTimeout(() => {
    refs.loadMore.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    });
    }, 800);

};

function showMore() {
    number +=1
    fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${inputValue}&page=${number}&per_page=12&key=22330478-3bd9f5a2d8db4972b1e40fa44`)
        .then(response => {
            return response.json();
        })
        .then(value => {
            responseVarification(value)
        })
        .catch(error => {
            console.log(error);
        })
    console.log(number)
};

