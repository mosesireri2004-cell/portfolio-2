document.querySelector("#menu-icon").addEventListener("click", () => {
  document.querySelector("#menu-icon").classList.toggle("bx-x");
  document.querySelector(".navbar").classList.toggle("active");
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const fullName = formData.get("full-name");
  const email = formData.get("email");
  const phoneNumber = formData.get("phone-number");
  const emailSubject = formData.get("email-subject");
  const message = formData.get("message");

  console.log("Full Name: ", fullName);
  console.log("Email: ", email);
  console.log("Phone Number: ", phoneNumber);
  console.log("Email Subject: ", emailSubject);
  console.log("Message: ", message);
});

document.querySelector("#darkMode-icon").addEventListener("click", () => {
  document.querySelector("#darkMode-icon").classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
});

window.onscroll = () => {
  document.querySelectorAll("section").forEach((sect) => {
    let top = window.scrollY;
    let offset = sect.offsetTop - 150;
    let height = sect.offsetHeight;
    let id = sect.getAttribute("id");

    if (top >= offset && top < offset + height) {
      document.querySelectorAll("header nav a").forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  document
    .querySelector(".header")
    .classList.toggle("sticky", window.scrollY > 100);

  document.querySelector("#menu-icon").classList.remove("bx-x");
  document.querySelector(".navbar").classList.remove("active");
};

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

ScollReaveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScollReaveal().reveal(".home-content, .heading", { origin: "top" });

ScollReaveal().reveal(
  ".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact-form",
  { origin: "bottom" },
);

ScollReaveal().reveal(".home-content h1, .about-img img", { origin: "left" });

ScollReaveal().reveal(".home-content h3, .home-content p, .about-img img", {
  origin: "right",
});
