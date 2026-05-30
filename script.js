/* MOBILE DROPDOWN */

const dropdowns = document.querySelectorAll(".dropdown, .submenu");

dropdowns.forEach(dropdown => {

    dropdown.addEventListener("click", function(e){

        if(window.innerWidth <= 768){

            e.stopPropagation();
            this.classList.toggle("active");

        }

    });

});

const slider = document.querySelector(".project-slider");
const cards = document.querySelectorAll(".project-card");
const dotsContainer = document.querySelector(".slider-dots");

let currentIndex = 0;
const cardWidth = cards[0].offsetWidth + 20;

/* Create Dots Automatically */

cards.forEach((_, index) => {

    const dot = document.createElement("span");

    if(index === 0){
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
        goToSlide(index);
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".slider-dots span");

function updateDots(){
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

function goToSlide(index){

    currentIndex = index;

    slider.scrollTo({
        left: cards[index].offsetLeft,
        behavior: "smooth"
    });

    updateDots();
}

/* NEXT */

document.querySelector(".next").addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= cards.length){
        currentIndex = 0;
    }

    goToSlide(currentIndex);
});

/* PREV */

document.querySelector(".prev").addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = cards.length - 1;
    }

    goToSlide(currentIndex);
});

/* AUTO SLIDE */

setInterval(() => {

    currentIndex++;

    if(currentIndex >= cards.length){
        currentIndex = 0;
    }

    goToSlide(currentIndex);

}, 4000);
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + '+';
        }
    };

    updateCounter();
});
