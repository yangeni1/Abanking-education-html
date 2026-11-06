const likeButtons = document.querySelectorAll('.card__action_like');
const saveButtons = document.querySelectorAll('.card__action_save');
const searchForm = document.querySelector('.search');

likeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('card__action_active');
    });
});

saveButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('card__action_saved');
    });
});

if (searchForm) {
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
    });
}
