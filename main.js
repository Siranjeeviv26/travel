const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", scrollRevealOption);

ScrollReveal().reveal(".header__container h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
ScrollReveal().reveal(".about__container .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__container .about__flex", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__container .btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// discover container
ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card__content", {
  ...scrollRevealOption,
  interval: 500,
  delay: 200,
});

// blogs container
ScrollReveal().reveal(".blogs__card", {
  duration: 1000,
  interval: 400,
});

// journals container
ScrollReveal().reveal(".journals__card", {
  ...scrollRevealOption,
  interval: 400,
});

/* Mobile nav toggle */
const navToggle = document.querySelector('.nav_toggle');
const navLinks = document.querySelector('.nav_links');
const body = document.body;

// Create overlay element
const overlay = document.createElement('div');
overlay.className = 'nav_overlay';
document.body.appendChild(overlay);

function closeMenu() {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    const icon = navToggle.querySelector('i');
    icon.classList.remove('ri-close-line');
    icon.classList.add('ri-menu-line');
    body.style.overflow = '';
}

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpening = !navLinks.classList.contains('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        
        if (isOpening) {
            icon.classList.remove('ri-menu-line');
            icon.classList.add('ri-close-line');
            body.style.overflow = 'hidden';
        } else {
            closeMenu();
        }
    });

    // Close menu when overlay is clicked
    overlay.addEventListener('click', closeMenu);

    // Close menu when a link is clicked
    document.querySelectorAll('.nav_links .link a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
}
