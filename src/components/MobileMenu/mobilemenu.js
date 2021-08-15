document.addEventListener('DOMContentLoaded', () => {
    toggleMobileMenu();
});

function toggleMobileMenu() {
    const menuToggle = document.querySelector('.toggle-menu'),
        closeBtn = document.querySelector('.mobile-menu__close'),
        mobileMenuItems = document.querySelectorAll('.mobile-menu-inner li');

    mobileMenuItems.forEach(item => item.addEventListener('click', scrollToPage))

    if (menuToggle) {
        menuToggle.addEventListener('click', openMobileMenu);
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMobileMenu);
    }
    function scrollToPage(e) {
        const indexLink = Array.from(mobileMenuItems).indexOf(this);
        const pageList = document.querySelectorAll('#root > div > div > header, #root > div > div> article');
        pageList.forEach((page, index) => {
            page.classList.remove('active');
            if (index === indexLink) {
                page.classList.add('active');
                const pageCoords = page.getBoundingClientRect().top + window.scrollY;
                window.scroll({
                    top: pageCoords,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        });

        closeMobileMenu();
    }
    function openMobileMenu() {
        const fullMobileMenu = document.querySelector('.mobile-menu');
        fullMobileMenu.classList.add('mobile-menu--is-active');
    }

    function closeMobileMenu() {
        const fullMobileMenu = document.querySelector('.mobile-menu');
        fullMobileMenu.classList.remove('mobile-menu--is-active');
    }
}
