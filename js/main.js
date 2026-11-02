(function () {
    var header = document.querySelector('.site-header');
    var menuBtn = document.querySelector('.menu-toggle');
    var cv = document.querySelector('.cv');
    var cvBtn = document.querySelector('.cv-toggle');

    // Header turns solid once the page scrolls past the top
    function onScroll() {
        header.classList.toggle('is-solid', window.scrollY > 24);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile menu
    menuBtn.addEventListener('click', function () {
        var open = header.classList.toggle('menu-open');
        menuBtn.setAttribute('aria-expanded', String(open));
    });
    document.querySelectorAll('.nav a').forEach(function (a) {
        a.addEventListener('click', function () {
            header.classList.remove('menu-open');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // CV dropdown
    cvBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = cv.classList.toggle('open');
        cvBtn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', function () {
        cv.classList.remove('open');
        cvBtn.setAttribute('aria-expanded', 'false');
    });

    // Experience / Education tabs
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (t) {
                var active = t === tab;
                t.setAttribute('aria-selected', String(active));
                document.getElementById(t.getAttribute('aria-controls')).hidden = !active;
            });
        });
    });
})();
