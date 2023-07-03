//Disappearing Nav Bar on scroll
let prevScrollpos = window.scrollY;
window.onscroll = () => {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos < currentScrollPos && prevScrollpos > 100) {
    document.getElementById("navigation").classList.add("nav--hidden");
    document.querySelector(".cta").classList.add("cta--hidden");
  } else {
    document.getElementById("navigation").classList.remove("nav--hidden");
    document.querySelector(".cta").classList.remove("cta--hidden");
  }
  prevScrollpos = currentScrollPos;
};

// intersection Observer Animate on Scroll
const sections = document.querySelectorAll(".section1");
const options = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section--animation");
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

// close nav on pressing a button
const btn = document.querySelectorAll(".nav__link--btn");

btn.forEach((bt) => {
  bt.addEventListener("click", () => {
    const width = innerWidth;
    const check = document.querySelector("#checkbox__toggle");
    if (check.checked === true && width < 1200) {
      check.checked = false;
    }
  });
});

// Wedding Party Tabs
const tabBtn = document.querySelectorAll(".wedparty__tab--btn");
const tabCards = document.querySelectorAll(".wedparty__body--card");
const dOn = document.querySelector(".defaultOn");

tabBtn.forEach(function (tabBt, index) {
  tabBt.addEventListener("click", () => {
    for (let i = 0; i < tabCards.length; i++) {
      tabCards[i].style.transform = "translate(0, 900px)";
    }
    tabCards[index].style.transform = "translate(0, 0%)";
  });
});
dOn.click();

// countdown
const deadline = new Date("January 05 2024");

function getValue(endTime) {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total,
    seconds,
    minutes,
    hours,
    days,
  };
}

function initializeClock(id, endtime) {
  const clock = document.querySelector(id);
  const secondSpan = clock.querySelector(".second");
  const minuteSpan = clock.querySelector(".minute");
  const hourSpan = clock.querySelector(".hour");
  const daySpan = clock.querySelector(".day");
  const timeInterval = setInterval(() => {
    const t = getValue(endtime);
    secondSpan.innerHTML = ("0" + t.seconds).slice(-2);
    minuteSpan.innerHTML = ("0" + t.minutes).slice(-2);
    hourSpan.innerHTML = ("0" + t.hours).slice(-2);
    daySpan.innerHTML = ("0" + t.days).slice(-3);
    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

initializeClock("#countdown", deadline);

const test = document.querySelector("#guest-count");
