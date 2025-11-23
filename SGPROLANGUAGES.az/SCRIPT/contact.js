// =====================================================
// ========== CONTACT CARD ENTRANCE ANIMATION ==========
// =====================================================
const contactCard = document.querySelector(".contact-container");

if (contactCard && "IntersectionObserver" in window) {
  contactCard.style.opacity = "0";
  contactCard.style.transform = "translateY(30px)";

  const contactObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contactCard.style.transition = "all 0.6s ease";
          contactCard.style.opacity = "1";
          contactCard.style.transform = "translateY(0)";
          contactObserver.unobserve(contactCard);
        }
      });
    },
    { threshold: 0.3 }
  );

  contactObserver.observe(contactCard);
}

// =====================================================
// ========== FORM HANDLING ==========
// =====================================================
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const submitBtn = document.querySelector(".submit-btn");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    clearErrors();

    if (validateForm()) {
      let originalText = "Send Message";
      if (submitBtn) {
        originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.classList.add("loading");
        submitBtn.textContent = "Sending...";
      }

      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };

      console.log("Form submitted:", formData);

      setTimeout(() => {
        if (successMessage) {
          successMessage.style.display = "block";
        }

        form.reset();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.classList.remove("loading");
          submitBtn.textContent = originalText;
        }

        setTimeout(() => {
          if (successMessage) successMessage.style.display = "none";
        }, 5000);
      }, 800);
    } else {
      if (contactCard) {
        contactCard.classList.add("shake");
        setTimeout(() => contactCard.classList.remove("shake"), 500);
      }
    }
  });
}

function validateForm() {
  let isValid = true;

  const name = document.getElementById("name");
  if (name.value.trim() === "") {
    showError("name", "nameError");
    isValid = false;
  }

  const email = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    showError("email", "emailError");
    isValid = false;
  }

  const subject = document.getElementById("subject");
  if (subject.value.trim() === "") {
    showError("subject", "subjectError");
    isValid = false;
  }

  const message = document.getElementById("message");
  if (message.value.trim() === "") {
    showError("message", "messageError");
    isValid = false;
  }

  return isValid;
}

function showError(inputId, errorId) {
  document.getElementById(inputId).classList.add("error");
  const errorEl = document.getElementById(errorId);
  if (errorEl) errorEl.style.display = "block";
}

function clearErrors() {
  const inputs = document.querySelectorAll("input, textarea");
  const errors = document.querySelectorAll(".error-message");

  inputs.forEach((input) => input.classList.remove("error"));
  errors.forEach((error) => (error.style.display = "none"));
}

// =====================================================
// ========== REAL-TIME VALIDATION ==========
// =====================================================
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach((input) => {
  input.addEventListener("input", function () {
    if (this.classList.contains("error") && this.value.trim() !== "") {
      this.classList.remove("error");
      const errorId = this.id + "Error";
      const errorEl = document.getElementById(errorId);
      if (errorEl) errorEl.style.display = "none";
    }
  });
});

// =====================================================
// ========== INPUTLARIN BİR-BİR AÇILMASI ==========
// =====================================================
const formGroups = document.querySelectorAll(".form-group");

function showFormGroupsSequentially() {
  formGroups.forEach((group, index) => {
    setTimeout(() => {
      group.classList.add("show");
    }, 200 * index);
  });
}

window.addEventListener("load", showFormGroupsSequentially);

// =====================================================
// ========== MESSAGE CHARACTER COUNTER ==========
// =====================================================
const messageInput = document.getElementById("message");

if (messageInput) {
  const maxChars = 500;
  messageInput.setAttribute("maxlength", maxChars);

  const counter = document.createElement("small");
  counter.id = "messageCounter";
  counter.className = "message-counter";
  counter.textContent = `0 / ${maxChars}`;
  messageInput.parentElement.appendChild(counter);

  messageInput.addEventListener("input", () => {
    counter.textContent = `${messageInput.value.length} / ${maxChars}`;
  });
}
// =====================================================
// ========== MOBILE MENU TOGGLE (NAVBAR) ==========
// =====================================================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// =====================================================
// ========== NAVBAR SCROLL EFFECT ==========
// =====================================================
const navbar = document.querySelector(".navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });
}

// =====================================================
// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
// =====================================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId && targetId !== "#") {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

// =====================================================
// ========== FOOTER ANIMATIONS & INTERACTIONS ==========
// =====================================================

// Footer yuxarıdan fade-in
const footer = document.querySelector(".footer");

if (footer) {
  footer.style.opacity = "0";
  footer.style.transform = "translateY(40px)";
  footer.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";

  const footerObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footer.style.opacity = "1";
          footer.style.transform = "translateY(0)";
          observer.unobserve(footer);
        }
      });
    },
    { threshold: 0.1 }
  );

  footerObserver.observe(footer);
}

// Sosial ikon hover effekti
document.querySelectorAll(".social-link").forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.15)";
    icon.style.boxShadow = "0 0 20px rgba(102, 126, 234, 0.6)";
  });

  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1)";
    icon.style.boxShadow = "none";
  });
});

// Footer menyu linklərinin animasiyası
document.querySelectorAll(".footer-nav .nav-link").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.letterSpacing = "1px";
    link.style.color = "#764ba2";
  });

  link.addEventListener("mouseleave", () => {
    link.style.letterSpacing = "0px";
    link.style.color = "rgba(255,255,255,0.9)";
  });
});

// Logo pulse effekti
const logoImg = document.querySelector(".logo-image");

if (logoImg && logoImg.animate) {
  setInterval(() => {
    logoImg.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.05)" },
        { transform: "scale(1)" },
      ],
      {
        duration: 2500,
        easing: "ease-in-out",
      }
    );
  }, 3000);
}
