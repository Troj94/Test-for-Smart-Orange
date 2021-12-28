
const backButton = document.querySelector('.project__button--back');
const forwardButton = document.querySelector('.project__button--forward');
const image = document.querySelector('.project__image');
const number = document.querySelector('.project__number');

function imageToggler() {

    switch (number.textContent) {
        case '01':
            number.textContent = '02'
            image.src = 'img/project-home_2.jpg'
        break;

        default:
            number.textContent = '01'
            image.src = 'img/project-home.jpg'
        break;
    }

}

backButton.addEventListener('click', imageToggler )
forwardButton.addEventListener('click', imageToggler)


