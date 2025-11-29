// HOME PAGE INTERACTIONS & ANIMATIONS
document.addEventListener("DOMContentLoaded", () => {
  // ========== MOBILE MENU ==========
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // ========== ACTIVE NAV LINK ON SCROLL ==========
  const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
  const sections = document.querySelectorAll("main section[id]");

  function updateActiveNav() {
    const fromTop = window.scrollY + 120;
    let currentId = null;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (fromTop >= top && fromTop < bottom) {
        currentId = section.id;
      }
    });

    navAnchors.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;
      const id = href.replace("#", "");
      if (!id) return;

      if (id === currentId) {
        link.classList.add("active");
      } else if (href.startsWith("#")) {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();

  // ========== SCROLL REVEAL ==========
  const animatedEls = document.querySelectorAll("[data-animate].reveal-on-scroll");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedEls.forEach((el) => observer.observe(el));
  } else {
    animatedEls.forEach((el) => el.classList.add("is-visible"));
  }

  // ========== SIMPLE PARALLAX ON HERO ==========
  const hero = document.querySelector(".home-hero");
  if (hero) {
    const layers = document.querySelectorAll("[data-parallax-layer]");

    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      layers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute("data-parallax-layer")) || 1;
        const translateX = -x * 16 * speed;
        const translateY = -y * 12 * speed;
        layer.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      });
    });

    hero.addEventListener("mouseleave", () => {
      layers.forEach((layer) => {
        layer.style.transform = "";
      });
    });
  }
});
