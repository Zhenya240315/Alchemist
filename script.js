document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    // pagination: {
    //   el: ".swiper-pagination",
    // },
    navigation: {
      nextEl: ".swiper-but-next",
      prevEl: ".swiper-but-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    slidesPerView: 3.2,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swipers-easy", {
    pagination: {
      el: ".pagination_for_tabs",
    },
    navigation: {
      nextEl: ".swiper-nav-next",
      prevEl: ".swiper-nav-prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    slidesPerView: "auto",
    spaceBetween: 73,

    slidesPerView: 1.5,
  });
});

// $(document).ready(function () {
//   console.log("ready!");
//   var swiper = new Swiper(".swiper", {});
// });

// TEAM
document.addEventListener("DOMContentLoaded", function () {
  var swipers = new Swiper(".swipers-team", {
    navigation: {
      nextEl: ".swiper-team-prev",
      prevEl: ".swiper-team-next",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    slidesPerView: "auto",
    spaceBetween: 115,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    slidesPerView: 4,
  });
});
