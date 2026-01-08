// main.js - smooth scrolling, mobile nav toggle, and reveal animations

document.addEventListener('DOMContentLoaded', function(){
  // Mobile nav toggle with accessibility
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  
  if(navToggle && nav){
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      const expanded = nav.classList.contains('open');
      navToggle.setAttribute('aria-expanded', expanded);
    });

    // Close nav when link is clicked
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', false);
      });
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // IntersectionObserver reveal animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add fade-in class and observe
  document.querySelectorAll('.card, .card-link').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Add animation to gallery items on scroll
  document.querySelectorAll('.gallery-grid figure').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Countdown Timer for Magh Mela
  function updateCountdown(){
    // Next Magh Mela: January 15, 2027
    const targetDate = new Date('2027-01-15T00:00:00').getTime();
    
    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if(distance < 0){
        clearInterval(timerInterval);
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      document.getElementById('days').textContent = String(days).padStart(2, '0');
      document.getElementById('hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }, 1000);
  }
  
  // Start countdown if timer elements exist
  if(document.getElementById('days')){
    updateCountdown();
  }

  // Cookie Consent Management
  function initCookieConsent(){
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAccept = document.getElementById('cookie-accept');
    const cookieReject = document.getElementById('cookie-reject');
    
    // Check if cookies were already accepted
    const cookieConsent = localStorage.getItem('cookieConsent');
    if(cookieConsent === 'accepted' || cookieConsent === 'rejected'){
      if(cookieBanner){
        cookieBanner.classList.add('hidden');
      }
    }

    // Accept cookies button
    if(cookieAccept){
      cookieAccept.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        if(cookieBanner){
          cookieBanner.classList.add('hidden');
        }
        // Enable analytics and ads scripts here if needed
        console.log('Cookies accepted');
      });
    }

    // Reject cookies button
    if(cookieReject){
      cookieReject.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'rejected');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        if(cookieBanner){
          cookieBanner.classList.add('hidden');
        }
        console.log('Cookies rejected');
      });
    }
  }

  // Initialize cookie consent on page load
  initCookieConsent();
});