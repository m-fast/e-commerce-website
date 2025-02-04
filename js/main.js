window.onload = function () {
  // Swiper for Categories
  var swiperCategories = new Swiper(".newSwiper", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 24,
      },
    },
  });

  // Swiper for Arrivals
  var Products = new Swiper(".new-swiper", {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      957: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // 768: {
      //   slidesPerView: 2,
      //   spaceBetween: 40,
      // },
      // 1400: {
      //   slidesPerView: 4,
      //   spaceBetween: 24,
      // },
    },
  });
};

// animition
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".hidden").forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
  });
  setTimeout(() => {
    document.querySelectorAll(".hidden").forEach((element) => {
      element.style.transition = "opacity 1s ease-out, transform 1s ease-out";
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    });
  }, 200);
});

gsap.utils.toArray(".animition").forEach((el) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  hiddenElements.forEach((el) => observer.observe(el));
});
