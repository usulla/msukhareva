(function() {
    document.addEventListener('DOMContentLoaded', () => {
        const menuUl = document.querySelector('.menu-ul');
        const menuLinks = document.querySelectorAll('.menu li');
        const firstLink = document.querySelectorAll('.menu li')[0];
        const highlight = document.createElement('span');
        var firsLoadMetka = 0;
        highlight.classList.add('menuHighlight');
        menuUl.append(highlight);
        setActiveElement(firstLink);

        // define active element in menu
        function setActiveElement(element) {
            var currentEl = (element.tagName === 'LI') ? element : this;
            menuLinks.forEach(a => a.classList.remove('menu-ul__li--active'));
            currentEl.classList.add('menu-ul__li--active');
            menuHighlight();
        }

        // define highlight element in menu
        function menuHighlight() {
            const element = document.querySelector('.menu-ul__li--active');
            const coordsLink = element.getBoundingClientRect();
            const coordsHighlight = {
                width: coordsLink.width,
                height: coordsLink.height,
                top: element.offsetTop,
                left: element.offsetLeft
            };
            highlight.style.width = `${coordsHighlight.width}px`;
            highlight.style.height = `${coordsHighlight.height}px`;
            highlight.style.transform = `translateY(${coordsHighlight.top}px`;
        }


        menuLinks.forEach(a => a.addEventListener('mouseenter', setActiveElement));

        window.addEventListener('resize', menuHighlight);

        menuLinks.forEach(a => a.addEventListener('click', scrollToPage));
        window.metkaScrolling = 0;
        /* Scrolls the page when click on an item */
        function scrollToPage(e) {
            window.metkaScrolling = 1;
            const indexLink = Array.from(menuLinks).indexOf(this);
            const pageList = document.querySelectorAll('#root > div > header, #root > div > article');
            pageList.forEach((page) => {
                page.classList.remove('active');
                if (Array.from(pageList).indexOf(page) === indexLink) {
                    page.classList.add('active');
                    const pageCoords = page.getBoundingClientRect().top + window.scrollY;
                    window.scroll({ top: pageCoords, left: 0, behavior: 'smooth' });
                    window.scrollMetka = 1;
                    document.body.style.overflow = 'hidden';
                    setTimeout(() => {
                        window.metkaScrolling = 0;
                        window.startScroll = document.documentElement.scrollTop || document.body.scrollTop;
                        window.scrollMetka = 0;
                        document.body.style.overflow = '';
                    }, 1300);
                }
            });
        }
    });
}());