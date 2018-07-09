document.addEventListener('DOMContentLoaded', () => {
    const cubeSides = document.querySelectorAll('.cube_side');

    cubeSides.forEach(side => side.classList.add('animate'));
    if (window.innerWidth < 768) {
        setTimeout(addActive, 3000);
    }

});
const addActive = () => {
    const skillsContainer = document.querySelector('.skills');
    skillsContainer.classList.add('active');
};