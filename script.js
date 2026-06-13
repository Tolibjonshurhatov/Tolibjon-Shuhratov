/* ============================================
   TOLIBJON SHURHATOV — PORTFOLIO SCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Joriy yilni footerga yozish ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Navbar: scroll qilganda ko'rinishi o'zgarsin ---------- */
  const navbar = document.getElementById('navbar');

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ---------- Gamburger menyu (mobil) ---------- */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navOverlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('.nav-link');

  const closeMenu = () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
    navOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    navOverlay.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  hamburger.addEventListener('click', toggleMenu);
  navOverlay.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* ---------- Scrollda bo'limga qarab aktiv link ---------- */
  const sections = document.querySelectorAll('section[id]');

  const setActiveLink = () => {
    let current = sections[0].id;
    const offset = window.scrollY + window.innerHeight * 0.35;

    sections.forEach(section => {
      if (offset >= section.offsetTop) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      const isActive = link.getAttribute('href') === `#${current}`;
      link.classList.toggle('active-link', isActive);
    });
  };

  setActiveLink();
  window.addEventListener('scroll', setActiveLink, { passive: true });

  /* ---------- Scroll bilan paydo bo'lish animatsiyasi ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  });

  revealEls.forEach(el => revealObserver.observe(el));

});