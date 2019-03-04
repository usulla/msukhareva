document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelectorAll('.home').length !== 0) {
        setTimeout(countFontSizeHello, 2000);
        moveShadow();
    }
});
window.addEventListener('resize', () => {
    if (document.querySelectorAll('.home').length !== 0) {
        countFontSizeHello();
    }
});

/* Functions */
/* Count font-size for Hello */
var countFontSizeHello = () => {
    const headerTitle = document.querySelector('.h1'),
        headerDescription = document.querySelector('.header__description'),
        headerHello = document.querySelector('.h1__hello');

    let heightTwoBlocks = headerTitle.offsetHeight + headerDescription.offsetHeight;
    headerHello.style.fontSize = `${heightTwoBlocks / 4.8}px`;

};
var moveShadow = () => {
    const hero = document.querySelector('.header-item'),
        text = hero.querySelector('.animate-code1'),
        text2 = hero.querySelector('.animate-code2'),
        walk = 20;

    hero.addEventListener('mousemove', shadow);

    function shadow(e) {
        // const width = hero.offsetWidth;
        // const height = hero.offsetHeight; 
        // It is identically 
        const { offsetWidth: width, offsetHeight: height } = hero;
        let { offsetX: x, offsetY: y } = e;

        if (this !== e.target) {
            x = x + e.target.offsetLeft;
            y = y + e.target.offsetTop;
        }

        const xWalk = (x / width * walk) - (walk / 2),
            yWalk = (y / height * walk) - (walk / 2);

        text.style.textShadow = `${xWalk}px ${yWalk}px 0 #ddd`;
        text2.style.textShadow = `${xWalk}px ${yWalk}px 0 #ddd`;
    }
};