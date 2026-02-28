// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  toggle.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    toggle.classList.remove('active');
  });
});

// Gallery filter
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

// Lightbox
const lightbox = document.getElementById('lightbox');

if (lightbox) {
  const lbImg = lightbox.querySelector('img');
  const lbClose = lightbox.querySelector('.lightbox-close');

  // Click any work or gallery image to open
  document.querySelectorAll('.work-item img, .gallery-item img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close on X button
  lbClose.addEventListener('click', (e) => {
    e.stopPropagation();
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Close on background click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}