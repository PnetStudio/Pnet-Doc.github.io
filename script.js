document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main section');
    const sidebarLinks = document.querySelectorAll('#sidebar a');

    function setActiveLink() {
        let found = false;
        sections.forEach(section => {
            if (isInViewport(section) && !found) {
                const id = section.getAttribute('id');
                const link = document.querySelector(`#sidebar a[href="#${id}"]`);
                if (link) {
                    sidebarLinks.forEach(sidebarLink => {
                        sidebarLink.classList.remove('active');
                    });
                    link.classList.add('active');
                    found = true;

                    // Scroll vers la section active
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    }

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Set initial active link
});


