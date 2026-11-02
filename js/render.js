// Builds the page from content/site.json (edited through /admin).
(function () {
    var content = null;
    var lang = 'en';

    function get(path) {
        return path.split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, content);
    }
    // A text field is either a plain string or { en: "...", fr: "..." }
    function tr(v) {
        if (v == null) return '';
        if (typeof v === 'object') return v[lang] || v.en || '';
        return String(v);
    }
    function el(tag, cls, text) {
        var n = document.createElement(tag);
        if (cls) n.className = cls;
        if (text != null) n.textContent = text;
        return n;
    }
    function list(id, items, build) {
        var box = document.getElementById(id);
        box.textContent = '';
        (items || []).forEach(function (item, i) { box.appendChild(build(item, i)); });
    }

    function render() {
        var c = content, p = c.profile || {};
        document.documentElement.lang = lang;
        if (c.meta) {
            document.title = c.meta.title || document.title;
            var d = document.querySelector('meta[name="description"]');
            if (d && c.meta.description) d.setAttribute('content', c.meta.description);
        }

        document.querySelectorAll('[data-t]').forEach(function (n) {
            n.textContent = tr(get(n.getAttribute('data-t')));
        });
        var full = [p.first_name, p.last_name].filter(Boolean).join(' ');
        document.querySelectorAll('[data-full-name]').forEach(function (n) { n.textContent = full; });

        var photo = document.getElementById('hero-photo');
        if (p.photo) photo.src = p.photo;
        photo.alt = 'Portrait of ' + full;

        document.getElementById('cv-en').href = p.cv_en || '#';
        document.getElementById('cv-fr').href = p.cv_fr || '#';

        var mail = document.getElementById('contact-mail');
        mail.textContent = p.email || '';
        mail.href = 'mailto:' + (p.email || '');
        var phone = document.getElementById('contact-phone');
        phone.textContent = p.phone || '';
        phone.href = 'tel:' + String(p.phone || '').replace(/[^+\d]/g, '');
        document.getElementById('year').textContent = new Date().getFullYear();

        list('pillars', get('about.pillars'), function (it) {
            var d = el('div', 'pillar');
            d.appendChild(el('h3', 'label', tr(it.title)));
            d.appendChild(el('p', null, tr(it.description)));
            return d;
        });

        var openState = Array.prototype.map.call(document.querySelectorAll('#panel-exp details'), function (x) { return x.open; });
        list('panel-exp', get('experience.jobs'), function (it, i) {
            var det = el('details', 'entry');
            det.open = openState.length ? !!openState[i] : i === 0;
            var s = el('summary');
            s.appendChild(el('span', 'entry-date label', tr(it.date)));
            var body = el('div');
            body.appendChild(el('h3', null, tr(it.title)));
            body.appendChild(el('p', 'entry-org', tr(it.company)));
            s.appendChild(body);
            var sign = el('span', 'entry-sign'); sign.setAttribute('aria-hidden', 'true');
            s.appendChild(sign);
            det.appendChild(s);
            det.appendChild(el('p', 'entry-desc', tr(it.description)));
            return det;
        });

        list('panel-edu', get('experience.education'), function (it) {
            var d = el('div', 'entry static');
            var row = el('div', 'entry-row');
            row.appendChild(el('span', 'entry-date label', tr(it.date)));
            var body = el('div');
            body.appendChild(el('h3', null, tr(it.title)));
            body.appendChild(el('p', 'entry-org', tr(it.school)));
            row.appendChild(body);
            d.appendChild(row);
            return d;
        });

        list('stack-list', get('stack.items'), function (it) {
            var li = el('li');
            li.appendChild(el('span', 'label', tr(it.label)));
            li.appendChild(el('span', null, tr(it.value)));
            return li;
        });

        list('language-list', get('languages.items'), function (it) {
            var d = el('div', 'language');
            d.appendChild(el('h3', null, tr(it.name)));
            d.appendChild(el('p', 'label', tr(it.level)));
            d.appendChild(el('p', null, tr(it.description)));
            return d;
        });

        list('socials', get('contact.socials'), function (it) {
            var a = el('a', 'link-line', tr(it.label));
            a.href = it.url; a.target = '_blank'; a.rel = 'noopener';
            return a;
        });

        // Sections can be switched off from the admin
        ['hero', 'about', 'experience', 'stack', 'languages', 'contact'].forEach(function (key) {
            var visible = !c[key] || c[key].visible !== false;
            document.getElementById(key).hidden = !visible;
            document.querySelectorAll('[data-section="' + key + '"]').forEach(function (n) { n.hidden = !visible; });
        });

        document.querySelectorAll('.lang-btn').forEach(function (b) {
            b.classList.toggle('active', b.getAttribute('data-lang') === lang);
        });
        document.body.classList.remove('is-loading');
    }

    window.setLanguage = function (l) {
        lang = l === 'fr' ? 'fr' : 'en';
        try { localStorage.setItem('preferredLang', lang); } catch (e) {}
        if (content) render();
    };

    try { lang = localStorage.getItem('preferredLang') === 'fr' ? 'fr' : 'en'; } catch (e) {}

    document.addEventListener('click', function (e) {
        var b = e.target.closest('.lang-btn');
        if (b) window.setLanguage(b.getAttribute('data-lang'));
    });

    // Lets the admin preview render unsaved content
    window.renderSite = function (data) { content = data; render(); };
    window.addEventListener('message', function (e) {
        if (e.origin !== window.location.origin) return;
        if (e.data && e.data.type === 'site-preview' && e.data.data) window.renderSite(e.data.data);
    });

    if (window.SITE_CONTENT) {
        window.renderSite(window.SITE_CONTENT);
    } else {
        fetch('content/site.json', { cache: 'no-cache' })
            .then(function (r) { return r.json(); })
            .then(window.renderSite)
            .catch(function (err) {
                console.error('Could not load content/site.json', err);
                document.body.classList.remove('is-loading');
            });
    }
})();
