const toggleBtn = document.querySelector('.toggle-btn');
    const navLinks = document.querySelector('.nav-links');

    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    window.addEventListener('scroll', function() {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 100) {
        navbar.classList.add('fixed');
      } else {
        navbar.classList.remove('fixed');
      }
    });