const categoriesCarousel = document.querySelector('#buttons');

categoriesCarousel.children[0].classList.add('active');

function animateSlide(direction) {
    const active = document.querySelector(".active");
    let newActive;
    if (direction === "next") {
        newActive = active.nextElementSibling;
    } else {
        if (active === categoriesCarousel.children[0]) {
            newActive = categoriesCarousel.children[categoriesCarousel.children.length - 1];
        }
    }

    newActive.classList.add("active");
    active.classList.remove("active");

    let a_active;
    if (direction === "next") {
        a_active = active.cloneNode(true);

        categoriesCarousel.appendChild(a_active);
    } else if (direction === "previous") {
        a_active = newActive.cloneNode(true);

        categoriesCarousel.insertBefore(a_active, categoriesCarousel.children[0]);
        categoriesCarousel.style.left = '-226px';
    }

    if (direction === "next") {
        categoriesCarousel.classList.add('toTheLeft');
    } else {
        categoriesCarousel.classList.add('toTheMiddle');
    }

    setTimeout(() => {
        if (direction === "next") {
            categoriesCarousel.classList.remove('toTheLeft');
            active.remove();
        } else {
            categoriesCarousel.classList.remove('toTheMiddle');
            categoriesCarousel.children[categoriesCarousel.children.length - 1].remove();
            categoriesCarousel.style.left = "0";
        }

    },600)
}

let interval = setInterval(() => {
    animateSlide("next");
}, 3500)

const slideButtons = document.querySelectorAll('.categories__slide');

slideButtons.forEach((button => {
    button.addEventListener("click", e => {

        if (e.target.dataset.slide === "prev") {
            animateSlide("next");
            clearInterval(interval);

            interval = setInterval(() => {
                animateSlide("next");
            }, 3500)
            
        } else if (e.target.dataset.slide === "next") {
            animateSlide("previous");
            clearInterval(interval);
            
            interval = setInterval(() => {
                animateSlide("previous");
            }, 3500)
            
        }
    })
}))