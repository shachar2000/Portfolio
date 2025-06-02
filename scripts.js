// Simple fade-in animation on page load
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('header, .about, .projects, .project-card');
  
    fadeElements.forEach((el, index) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, index * 200);
    });
  });
  
