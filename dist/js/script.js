// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Comeback To My Portfolio

document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Fajar Fauzian";
    $("#favicon").attr("href", "dist/img/f.png");
  } else {
    document.title = "Come Back To Portfolio";
    $("#favicon").attr("href", "dist/img/favhand.png");
  }
});


// <!-- Typing effect -->
var typed = new Typed(".typing-text", {
  strings: ["Front End Developer", "UI Design", "Web Development", "Design Graphics", "Programmer"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});


if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
function showProjects() {
  document.getElementById("projects").style.display = "flex";
  document.getElementById("certificates").style.display = "none";
  document.getElementById("projects-btn").classList.add('active');
  document.getElementById("certificates-btn").classList.remove('active');
}

function showCertificates() {
  document.getElementById("projects").style.display = "none";
  document.getElementById("certificates").style.display = "flex";
  document.getElementById("projects-btn").classList.remove('active');
  document.getElementById("certificates-btn").classList.add('active');
}