// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Enhanced Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");

      //Add staggered animation for cards
      if (entry.target.classList.contains("card-3d")) {
        const cards = document.querySelectorAll(".card-3d");
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("animate");
          }, index * 150);
        });
      }
    }
  });
}, observerOptions);

// Observe all animated elements
document
  .querySelectorAll(".fade-in-up, .slide-in-left, .slide-in-right, .card-3d")
  .forEach((el) => {
    observer.observe(el);
  });

// Parallax effect on scroll
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".parallax");

  parallaxElements.forEach((element) => {
    const rate = scrolled * -0.5;
    element.style.transform = `translateY(${rate}px)`;
  });

  // Navbar background on scroll
  const navbar = document.querySelector("nav");
  if (scrolled > 50) {
    navbar.classList.add("shadow-lg");
    navbar.style.background = "rgba(248, 215, 218, 0.95)";
  } else {
    navbar.classList.remove("shadow-lg");
    navbar.style.background = "rgba(248, 215, 218, 0.9)";
  }
});

// Add loading animation on page load
window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  // Trigger hero animations
  setTimeout(() => {
    document.querySelector(".slide-in-left").classList.add("animate");
    document.querySelector(".slide-in-right").classList.add("animate");
  }, 200);
});

// Smooth reveal animation for sections
const revealSections = () => {
  const sections = document.querySelectorAll("section");
  const windowHeight = window.innerHeight;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;

    if (sectionTop < windowHeight - 100 && sectionTop + sectionHeight > 0) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealSections);
revealSections(); // Initial call

// Add smooth scrolling behavior
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop =
        targetSection.getBoundingClientRect().top + window.pageYOffset - 80;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Add fade-in animation for form elements
const form = document.querySelector("form");
if (form) {
  const formElements = form.querySelectorAll("input, textarea, button");
  formElements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
    element.style.transitionDelay = `${index * 0.1}s`;

    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, 100 + index * 100);
  });
}

// Enhanced typing effect
const typingElement = document.querySelector(".typing-text");
if (typingElement) {
  const text = typingElement.textContent;
  typingElement.textContent = "";
  typingElement.style.width = "auto";

  setTimeout(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
      } else {
        // Remove cursor after typing is complete
        setTimeout(() => {
          typingElement.style.borderRight = "none";
        }, 1000);
      }
    };
    typeWriter();
  }, 1000);
}

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });