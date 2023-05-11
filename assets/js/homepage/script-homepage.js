const categoriesCarousel = document.querySelector('#buttons');

categoriesCarousel.children[0].classList.add('active');

function animateSlide(direction) {
    const active = document.querySelector(".categories__button.active");
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
        a_active.classList.replace('position-relative', 'position-absolute');
        a_active.style.left = '-226px';
        categoriesCarousel.insertBefore(a_active, categoriesCarousel.children[0]);
    }
    const buttons = categoriesCarousel.children;

    if (direction === "next") {
        for (let button of buttons) {   
            button.classList.add('toTheLeft');
            setTimeout(() => {
                if (button !== categoriesCarousel.children[0]) {
                    button.classList.remove('toTheLeft');
                }
            }, 650)
        }
        
    } else {
        for (let button of buttons) {
            if (button == a_active) {
                a_active.classList.add("toTheMiddle");
            } else {
                button.classList.add('toTheRight')
            }
        }
    }
    
    setTimeout(() => {
        if (direction === "next") {
            active.remove();
        } else {
            for (let button of buttons) {
                if (button == a_active) {
                    a_active.classList.replace('position-absolute', 'position-relative');
                    a_active.classList.remove('toTheMiddle');
                } else {
                    button.classList.remove('toTheRight');
                }
            }
            categoriesCarousel.children[categoriesCarousel.children.length - 1].remove();
            a_active.style.left = "0";
        }

    },650)
}

let interval = setInterval(() => {
    animateSlide("next");
}, 3500)

const slideButtons = document.querySelectorAll('.categories__slide');

slideButtons.forEach((button => {
    button.addEventListener("click", e => {

        if (e.target.dataset.slide === "prev") {
            button.disabled = true;
            setTimeout(() => {
                button.disabled = false;
            }, 650);

            animateSlide("next");
            clearInterval(interval);

            interval = setInterval(() => {
                animateSlide("next");
            }, 3500)
            
        } else if (e.target.dataset.slide === "next") {
            button.disabled = true;
            setTimeout(() => {
                button.disabled = false;
            }, 650);
            
            animateSlide("previous");
            clearInterval(interval);
            
            interval = setInterval(() => {
                animateSlide("previous");
            }, 3500)
            
        }
    })
}))