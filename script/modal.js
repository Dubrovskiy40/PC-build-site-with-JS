const modalBtn = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');
const addCourseBtn = document.querySelector('.course__button');
const closeBtn = document.querySelector('.modal__close');

modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

modal.addEventListener('click', (event) => {
    const modalContent = event.target.closest('.modal__inner');

    if (!modalContent) {
        modal.style.display = '';
    }
});

addCourseBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', (event) => {
        modal.style.display = '';
});