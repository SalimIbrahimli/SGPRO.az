// Fade-in animation on scroll
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll(".section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});

// Hero animation on load
const heroContent = document.querySelector(".hero-content");
heroContent.style.opacity = "0";
heroContent.style.transform = "translateY(30px)";

window.addEventListener("load", () => {
  setTimeout(() => {
    heroContent.style.transition = "all 1s ease";
    heroContent.style.opacity = "1";
    heroContent.style.transform = "translateY(0)";
  }, 200);
});

// Value items stagger animation
const valueItems = document.querySelectorAll(".value-item");
valueItems.forEach((item, index) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(30px)";

  setTimeout(() => {
    item.style.transition = "all 0.6s ease";
    item.style.opacity = "1";
    item.style.transform = "translateY(0)";
  }, index * 100);
});

// Team members animation
const teamMembers = document.querySelectorAll(".team-member");
const teamObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }, index * 150);
      teamObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

teamMembers.forEach((member) => {
  member.style.opacity = "0";
  member.style.transform = "translateY(30px)";
  member.style.transition = "all 0.6s ease";
  teamObserver.observe(member);
});

// Timeline animation
const timelineItems = document.querySelectorAll(".timeline-item");
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateX(0)";
      timelineObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

timelineItems.forEach((item, index) => {
  item.style.opacity = "0";
  item.style.transform =
    index % 2 === 0 ? "translateX(-50px)" : "translateX(50px)";
  item.style.transition = "all 0.8s ease";
  timelineObserver.observe(item);
});

// Story section animation
const storyText = document.querySelector(".story-text");
const storyImage = document.querySelector(".story-image");

const storyObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      storyText.style.opacity = "1";
      storyText.style.transform = "translateX(0)";

      setTimeout(() => {
        storyImage.style.opacity = "1";
        storyImage.style.transform = "translateX(0)";
      }, 300);

      storyObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

storyText.style.opacity = "0";
storyText.style.transform = "translateX(-50px)";
storyText.style.transition = "all 0.8s ease";

storyImage.style.opacity = "0";
storyImage.style.transform = "translateX(50px)";
storyImage.style.transition = "all 0.8s ease";

storyObserver.observe(document.querySelector(".story"));

// Parallax effect for hero
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (scrolled < hero.offsetHeight) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});
