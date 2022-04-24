const contents = document.querySelectorAll('.program-line__content');

contents.forEach(content => {
    const title = content.querySelector('.program-line__title');
    const descr = content.querySelector('.program-line__descr');

    title.addEventListener('click', () => {
        descr.classList.toggle('active');
    });
});