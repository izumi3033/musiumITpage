// ===========================
// Everyday Choices Exhibition - JavaScript
// dairy.html用のスクリプト
// ===========================

// Create 50 particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particlesContainer.appendChild(particle);
}

// Scroll progress
window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrolled + '%';
});

// Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

document.querySelectorAll('.section-header, .theme-card, .feature-card').forEach(el => {
    observer.observe(el);
});

// Stagger animation
document.querySelectorAll('.theme-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Scroll to Top
const scrollBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// === Lightbox (photo zoom) ===
(function initLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;

  const lbImg = lb.querySelector('.lightbox-image');
  const lbCap = lb.querySelector('.lightbox-caption');
  const lbClose = lb.querySelector('.lightbox-close');

  const openLightbox = (src, caption) => {
    if (!src) return;
    lbImg.src = src;
    lbImg.alt = caption || '';
    lbCap.textContent = caption || '';
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    lbImg.src = '';
    document.body.style.overflow = '';
  };

  // 画像クリックで開く
  document.querySelectorAll('.photo-card img').forEach(img => {
    img.addEventListener('click', () => {
      const caption = img.alt || img.closest('figure')?.querySelector('.photo-caption')?.textContent || '';
      openLightbox(img.currentSrc || img.src, caption);
    });
  });

  // 閉じる操作（×ボタン・背景クリック・Esc）
  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lb.classList.contains('open')) closeLightbox(); });
})();