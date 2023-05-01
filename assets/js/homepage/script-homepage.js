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
        } else {
            newActive = active.previousElementSibling;
        }
    }

    active.classList.remove("active");
    const a_active = active.cloneNode(true);
    if (direction === "next") {
        categoriesCarousel.appendChild(a_active);
    } else if (direction === "previous") {
        a_active.style.left = "-226px";
        categoriesCarousel.insertBefore(a_active, categoriesCarousel.children[0]);
    }

    for (let button of categoriesCarousel.children) {   
        if (direction === "next") {
            button.classList.add("toTheLeft");
        } else {
            if (button == categoriesCarousel.children[0]) {
                button.classList.add('toTheMiddle')
            } else {
                
                button.classList.add("toTheRight");
                
            }
        }
        setTimeout(() => {
            if (direction === "next") {
                button.classList.remove("toTheLeft")
            } else {
                button.classList.contains('toTheRight') ?  
                button.classList.remove("toTheRight")
                : button.classList.remove("toTheMiddle");
            }
        }, 600);
        setTimeout(() => {
            button.style.left = "0"
            active.remove();
        },600)
    }
    newActive.classList.add("active");
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
