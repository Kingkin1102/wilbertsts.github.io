const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

ScrollReveal({
  distance: "60px",
  duration: 1500,
  delay: 400,
});
ScrollReveal().reveal(
  " #hero, #banner, #newsletter, #page-header, #about-app h1, #cart",
  {
    delay: 500,
    origin: "top",
  }
);
ScrollReveal().reveal(" #pagination", {
  delay: 500,
  origin: "bottom",
});
ScrollReveal().reveal(
  "#hero h4 ,#hero h2, #product1 h2, footer, #page-header h2, #contact-details .details, #prodetails .single-pro-image",
  {
    delay: 500,
    origin: "left",
  }
);
ScrollReveal().reveal(
  " #hero h1, #product1 p, #banner h2, #page-header p,#contact-details .map, .single-pro-details",
  {
    delay: 600,
    origin: "right",
  }
);
ScrollReveal().reveal(" #hero p, #form-details,#form-details form", {
  delay: 600,
  origin: "left",
});
ScrollReveal().reveal(" #form-details div", {
  delay: 600,
  origin: "right",
  interval: "200",
});
ScrollReveal().reveal(" #hero button, #about-app .video", {
  delay: 600,
  origin: "top",
});
ScrollReveal().reveal(" #banner h4", {
  delay: 2000,
  origin: "left",
});
ScrollReveal().reveal(" #banner h2", {
  delay: 2000,
  origin: "right",
});
ScrollReveal().reveal(" #banner", {
  delay: 2000,
  origin: "top",
});
ScrollReveal().reveal(
  " #feature div, .pro-container div, #sm-banner div, #banner3 div, #cart td",
  {
    delay: 500,
    origin: "top",
    interval: 100,
  }
);
ScrollReveal().reveal("  #sm-banner div, #banner3 div, #cart-add div", {
  delay: 700,
  origin: "top",
  interval: 100,
});
ScrollReveal().reveal("  #blog div, #about-head img", {
  delay: 700,
  origin: "left",
  interval: 500,
});
ScrollReveal().reveal(" #about-head h2", {
  delay: 700,
  origin: "right",
});
ScrollReveal().reveal(" #about-head p", {
  delay: 800,
  origin: "right",
});
ScrollReveal().reveal(" #about-head abbr,#about-head marquee", {
  delay: 900,
  origin: "right",
});
