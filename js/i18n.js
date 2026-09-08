const i18n = {
    en: {
        nav_home: "Home",
        nav_about: "About Me",
        nav_expedu: "Experiences/Education",
        nav_language: "Language",
        nav_contact: "Contact",
        nav_download_cv: "Download CV",

        hero_greeting: "Hello Everybody, I am",
        hero_title: "Software Engineer | Full Stack & Systems",
        hero_desc: "Software Engineer and Computer Engineering student at ESPRIT University specializing in scalable full-stack architecture, microservices, and real-time backend engines. Proven track record of architecting low-latency synchronization protocols, containerized code execution sandboxes, and cloud-ready systems using TypeScript, Node.js, NestJS, Fastify, Spring Boot, and Docker.",
        location: "Tunis, Tunisia",

        about_title: "About Myself",
        about_desc: "Software Engineer and Computer Engineering student specializing in building high-performance, production-ready full-stack systems. With hands-on expertise spanning Code-Dual (real-time competitive coding engine with containerized sandboxes), Nutriwell-Store (full-stack e-commerce & health platform), KiddySafe Monorepo (location-aware monorepo template), and enterprise microservices, I design scalable backend architectures, real-time synchronization protocols, and robust frontend applications.",
        card1_title: "Software & Architecture",
        card1_desc: "Microservices, RESTful APIs, Real-Time (WebSockets), Event-Driven Architecture, OOP, CI/CD",
        card2_title: "Backend & Cloud",
        card2_desc: "Node.js, NestJS, Fastify, Express.js, Spring Boot, Docker, Redis, VPS Deployment",
        card3_title: "Frontend & Databases",
        card3_desc: "React, Next.js, Angular, Ionic React, Tailwind CSS, PostgreSQL, MySQL, Prisma ORM",

        skills_title: "Technical Expertise",
        skill1: "TypeScript / JavaScript / Node.js / NestJS / Fastify",
        skill2: "React / Next.js / Angular / Ionic React / Tailwind CSS",
        skill3: "Spring Boot / Java / C++ / Python",
        skill4: "PostgreSQL / MySQL / Prisma ORM / Redis",
        skill5: "Docker / Docker Compose / CI/CD / GitHub Actions / Jest",

        tab_exp: "My Experiences",
        tab_edu: "My Education",

        // Experiences
        exp1_title: "Code-Dual (Real-Time Competitive Coding Engine)",
        exp1_company: "Software Engineer Intern • Medianet (Tunis, Tunisia)",
        exp1_date: "Jun 2026 – Aug 2026",
        exp1_desc: "Architected low-latency duel synchronization protocol using Socket.io and WebSockets (React, Fastify stack), maintaining sub-100ms state updates and live code state restoration across concurrent sessions. Engineered secure multi-tenant code execution engine utilizing containerized Docker sandboxes (Judge0) to process polyglot submissions (JavaScript, Python, C++, Java, Rust, Go) under strict CPU, memory, and timeout constraints. Designed event-driven tournament engine with single-elimination bracket generation, ELO-based seeding, and automated forfeit routines. Implemented enterprise security layer with JWT HTTP-only refresh tokens, Fastify rate-limiting, and PostgreSQL models via Prisma ORM.",

        exp2_title: "Nutriwell-Store (E-Commerce & Health Retail Platform)",
        exp2_company: "Software Engineer • Personal Project (Remote)",
        exp2_date: "Present",
        exp2_desc: "Designed full-stack e-commerce architecture using NestJS and React, implementing transactional database operations, dynamic order ref generation, and real-time calculations. Integrated geo-location engine utilizing Leaflet and OpenStreetMap APIs to support real-time radius calculations, GPS mapping, and pharmacy availability filtering. Configured multi-container Docker infrastructure with automated SSH deployment pipelines via GitHub Actions to a remote VPS. Optimized asynchronous state management using TanStack Query to reduce redundant network overhead.",

        exp3_title: "KiddySafe Monorepo Starter",
        exp3_company: "Software Engineer • Remote (Switzerland)",
        exp3_date: "Jul 2025 – Aug 2025",
        exp3_desc: "Architected production-grade monorepo template for location-aware family safety software utilizing Next.js, Ionic React, Node.js, Express, Prisma (PostgreSQL), and Docker. Implemented real-time tracking pipelines leveraging WebSockets, end-to-end encryption helpers, JWT session binding, and secure cookie storage. Established comprehensive unit and integration testing frameworks with Jest and React Testing Library to ensure high system reliability across micro-deployments.",

        exp4_title: "Field Intervention Management Platform",
        exp4_company: "Software Developer • Iprecision (Tunis, Tunisia)",
        exp4_date: "Jan 2022 – Jul 2022",
        exp4_desc: "Engineered full-stack enterprise solution handling 100+ operational interventions using Angular and Spring Boot REST microservices. Decreased system response times by 20% through Spring Boot backend optimizations and MySQL indexing strategies, ensuring 99.9% data availability. Enforced software quality standards, utilizing SonarQube static analysis to reduce code smells by 40% and resolving 95% of API issues via Postman test suites.",

        exp5_title: "Shop Management System",
        exp5_company: "Software Developer • Siamo Startup (Tunis, Tunisia)",
        exp5_date: "Jan 2021 – Feb 2021",
        exp5_desc: "Engineered inventory tracking system managing 200+ product entities with Spring Boot and MySQL. Reduced server processing overhead by 25% by optimizing service layers and SQL data access patterns.",

        // Education
        edu1_title: "Engineering Degree in Web Technology & Cloud Computing",
        edu1_school: "ESPRIT University • Tunis, Tunisia",
        edu1_date: "2024 – Present",

        edu2_title: "License Degree in Computer Science Technology",
        edu2_school: "ISET Mahdia • Mahdia, Tunisia",
        edu2_date: "2020 – 2023",

        edu3_title: "Bachelor’s Degree in Computer Science",
        edu3_school: "Ibin Arafa High School • Tunisia",
        edu3_date: "2018 – 2019",

        // Languages section
        lang_sec_title: "Language Skills",
        lang_sec_desc: "Effective communication across languages enables seamless collaboration in international software engineering teams, clear technical documentation, and cross-cultural project execution.",
        lang1_title: "Arabic",
        lang1_level: "Native",
        lang1_desc: "Native proficiency in technical discussions, client requirements, and software engineering documentation.",

        lang2_title: "English",
        lang2_level: "Advanced / Proficient",
        lang2_desc: "Full professional proficiency in technical architectural discussions, reading demanding specifications and API docs, sprint communication, and international collaboration.",

        lang3_title: "French",
        lang3_level: "Intermediate",
        lang3_desc: "Professional working ability for technical team meetings, code reviews, and software architecture exchanges.",

        // Footer
        footer_about_title: "About Me",
        footer_about_desc: "Jasser Nahali — Software Engineer specialized in scalable full-stack architecture, microservices, and real-time backend engines using TypeScript, Node.js, NestJS, Fastify, Spring Boot, and Docker.",
        footer_social_title: "Follow Me",
        footer_social_desc: "Let us be social"
    },
    fr: {
        nav_home: "Accueil",
        nav_about: "À Propos",
        nav_expedu: "Expériences / Formation",
        nav_language: "Langues",
        nav_contact: "Contact",
        nav_download_cv: "Télécharger CV",

        hero_greeting: "Bonjour tout le monde, je suis",
        hero_title: "Ingénieur Logiciel | Full Stack & Systèmes",
        hero_desc: "Ingénieur Logiciel et étudiant en génie informatique à l'Université ESPRIT, spécialisé dans l'architecture full-stack évolutive, les microservices et les moteurs backend en temps réel. Expérience avérée dans la conception de protocoles de synchronisation à faible latence, de sandboxes d'exécution de code conteneurisées et de systèmes cloud utilisant TypeScript, Node.js, NestJS, Fastify, Spring Boot et Docker.",
        location: "Tunis, Tunisie",

        about_title: "À Propos de Moi",
        about_desc: "Ingénieur Logiciel et étudiant en génie informatique spécialisé dans le développement de systèmes full-stack performants et prêts pour la production. Fort d'une expérience concrète sur des projets majeurs tels que Code-Dual (moteur de codage compétitif en temps réel avec sandboxes conteneurisées), Nutriwell-Store (plateforme e-commerce & santé), KiddySafe Monorepo (template monorepo géolocalisé) et des microservices d'entreprise, je conçois des architectures backend évolutives, des protocoles de synchronisation en temps réel et des applications frontend robustes.",
        card1_title: "Génie Logiciel & Architecture",
        card1_desc: "Microservices, API RESTful, Temps réel (WebSockets), Architecture événementielle, POO, CI/CD",
        card2_title: "Backend & Infrastructure Cloud",
        card2_desc: "Node.js, NestJS, Fastify, Express.js, Spring Boot, Docker, Redis, Déploiement VPS",
        card3_title: "Frontend & Bases de Données",
        card3_desc: "React, Next.js, Angular, Ionic React, Tailwind CSS, PostgreSQL, MySQL, Prisma ORM",

        skills_title: "Compétences Techniques",
        skill1: "TypeScript / JavaScript / Node.js / NestJS / Fastify",
        skill2: "React / Next.js / Angular / Ionic React / Tailwind CSS",
        skill3: "Spring Boot / Java / C++ / Python",
        skill4: "PostgreSQL / MySQL / Prisma ORM / Redis",
        skill5: "Docker / Docker Compose / CI/CD / GitHub Actions / Jest",

        tab_exp: "Mes Expériences",
        tab_edu: "Ma Formation",

        // Experiences
        exp1_title: "Code-Dual (Moteur de codage compétitif en temps réel)",
        exp1_company: "Stagiaire Ingénieur Logiciel • Medianet (Tunis, Tunisie)",
        exp1_date: "Juin 2026 – Août 2026",
        exp1_desc: "Conception d'un protocole de synchronisation de duels à faible latence avec Socket.io et WebSockets (stack React & Fastify), maintenant des mises à jour sous les 100ms et la restauration d'état de code en direct. Développement d'un moteur d'exécution de code multi-locataire sécurisé basé sur des sandboxes Docker conteneurisées (Judge0) pour traiter des soumissions multilingues (JS, Python, C++, Java, Rust, Go) sous contraintes strictes. Conception d'un moteur de tournois événementiel à élimination directe avec seeding ELO. Mise en œuvre d'une couche de sécurité entreprise avec JWT HTTP-only, Fastify rate-limiting et modèles PostgreSQL via Prisma ORM.",

        exp2_title: "Nutriwell-Store (Plateforme E-Commerce & Santé)",
        exp2_company: "Ingénieur Logiciel • Projet Personnel (À distance)",
        exp2_date: "Présent",
        exp2_desc: "Conception d'une architecture e-commerce full-stack avec NestJS et React, incluant des opérations de base de données transactionnelles, la génération dynamique de références de commande et des calculs en temps réel. Intégration d'un moteur de géolocalisation Leaflet et OpenStreetMap pour le calcul de rayon, le cartographiage GPS et le filtrage des pharmacies. Configuration d'une infrastructure Docker multi-conteneurs avec pipeline CI/CD GitHub Actions via SSH vers un VPS. Optimisation de la gestion d'état asynchrone avec TanStack Query.",

        exp3_title: "KiddySafe Monorepo Starter",
        exp3_company: "Ingénieur Logiciel • À distance (Suisse)",
        exp3_date: "Juil 2025 – Août 2025",
        exp3_desc: "Conception d'un modèle monorepo prêt pour la production pour des logiciels de sécurité familiale géolocalisés utilisant Next.js, Ionic React, Node.js, Express, Prisma (PostgreSQL) et Docker. Intégration de pipelines de suivi en temps réel via WebSockets, chiffrement de bout en bout, liaison de session JWT et cookies sécurisés. Mise en place de frameworks de tests unitaires et d'intégration complets avec Jest et React Testing Library.",

        exp4_title: "Plateforme de Gestion des Interventions sur le Terrain",
        exp4_company: "Développeur Logiciel • Iprecision (Tunis, Tunisie)",
        exp4_date: "Jan 2022 – Juil 2022",
        exp4_desc: "Développement d'une solution d'entreprise full-stack gérant plus de 100 interventions opérationnelles avec des microservices Angular et Spring Boot. Réduction des temps de réponse de 20% grâce à l'optimisation backend Spring Boot et l'indexation MySQL, garantissant 99,9% de disponibilité des données. Application des standards de qualité avec analyse statique SonarQube (-40% code smells) et résolution de 95% des problèmes d'API via Postman.",

        exp5_title: "Système de Gestion de Magasin",
        exp5_company: "Développeur Logiciel • Siamo Startup (Tunis, Tunisie)",
        exp5_date: "Jan 2021 – Fév 2021",
        exp5_desc: "Conception d'un système de suivi d'inventaire gérant plus de 200 produits avec Spring Boot et MySQL. Réduction de la charge serveur de 25% grâce à l'optimisation des couches de service et des accès aux données SQL.",

        // Education
        edu1_title: "Diplôme d'Ingénieur en Technologies Web & Cloud Computing",
        edu1_school: "Université ESPRIT • Tunis, Tunisie",
        edu1_date: "2024 – Présent",

        edu2_title: "Licence en Technologies de l'Informatique",
        edu2_school: "ISET Mahdia • Mahdia, Tunisie",
        edu2_date: "2020 – 2023",

        edu3_title: "Baccalauréat en Informatique",
        edu3_school: "Lycée Ibin Arafa • Tunisie",
        edu3_date: "2018 – 2019",

        // Languages section
        lang_sec_title: "Compétences Linguistiques",
        lang_sec_desc: "Une communication fluide à travers plusieurs langues garantit une collaboration efficace au sein d'équipes d'ingénierie logicielle internationales et une documentation technique rigoureuse.",
        lang1_title: "Arabe",
        lang1_level: "Langue maternelle",
        lang1_desc: "Maîtrise parfaite pour les échanges techniques, les spécifications et la documentation logicielle.",

        lang2_title: "Anglais",
        lang2_level: "Courant / Avancé",
        lang2_desc: "Maîtrise professionnelle complète pour les discussions d'architecture technique, la lecture de spécifications et documentation d'API exigeantes, les cérémonies agiles et la collaboration internationale.",

        lang3_title: "French",
        lang3_level: "Intermédiaire",
        lang3_desc: "Capacité professionnelle de travail pour les réunions d'équipe technique, les revues de code et les échanges d'architecture logicielle.",

        // Footer
        footer_about_title: "À Propos de Moi",
        footer_about_desc: "Jasser Nahali — Ingénieur Logiciel spécialisé en architectures full-stack évolutives, microservices et moteurs backend temps réel avec TypeScript, Node.js, NestJS, Fastify, Spring Boot et Docker.",
        footer_social_title: "Suivez-moi",
        footer_social_desc: "Restons connectés"
    }
};

function setLanguage(lang) {
    if (!i18n[lang]) return;
    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');

    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) {
            el.textContent = i18n[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    setLanguage(savedLang);
});
