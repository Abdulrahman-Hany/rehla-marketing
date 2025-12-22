// FAQ Accordion
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains("active");

    // Close all other items
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active");
    });

    // Toggle current item
    if (!isActive) {
      faqItem.classList.add("active");
    }
  });
});

// Scroll Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Smooth Scroll
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

// Add hover effect to social media icons
document.querySelectorAll("footer a").forEach((link) => {
  link.addEventListener("mouseenter", function () {
    this.style.color = "#841624";
  });
  link.addEventListener("mouseleave", function () {
    this.style.color = "#DACCB7";
  });
});

document.querySelectorAll(".video-wrapper").forEach((wrapper) => {
  const video = wrapper.querySelector("video");
  const overlay = wrapper.querySelector(".play-overlay");

  overlay.addEventListener("click", () => {
    wrapper.classList.add("playing");
    video.setAttribute("controls", "controls");
    video.play();
  });

  video.addEventListener("pause", () => {
    wrapper.classList.remove("playing");
  });
});

const lightbox = document.getElementById("imageLightbox");
const lightboxImg = document.getElementById("lightboxImage");
const closeBtn = document.querySelector(".lightbox-close");

document.querySelectorAll(".result-card img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}
