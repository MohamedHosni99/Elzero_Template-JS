let sectionSk = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".progress span");
let sectionStats = document.querySelector(".stats");
let numStat = document.querySelectorAll(".stats .box .number");
let started = false;

window.onscroll = function() {
    if (window.scrollY >= sectionSk.offsetTop) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    } else {
        spans.forEach((span) => {
            span.style.width = 0;
        });
    }
    if (window.scrollY >= sectionStats.offsetTop) {
        if (!started) {
            numStat.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
        clearInterval(count);
    }
    }, 2000 / goal);
}

// ------------------------------------- Events ----------------------------------

let brithday = new Date("september, 28 2023 23:59:59").getTime();
let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let diffDate = brithday - dateNow;

    // Get Units Time
    let months = Math.floor(diffDate / (1000 * 60 * 60  * 24 * 30 ))
    let days = Math.floor(diffDate / (1000 * 60 * 60 * 24 ));

    let hours = Math.floor(diffDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

    let minutes = Math.floor(diffDate % (1000 * 60 * 60) / (1000 * 60));

    let seconds = Math.floor(diffDate % (1000 * 60) / (1000));

    document.querySelector(".events .months").innerHTML = months < 10 ? `0${months}` : months;
    document.querySelector(".events .days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".events .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".events .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".events .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    if (diffDate < 0) {
        clearInterval(counter);
    }
}, 1000);

