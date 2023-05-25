function bookAnimation() {
    const favorite = document.querySelector("#favorite");
    const favoritePosition = favorite.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;

    if (favoritePosition < screenPosition) {
        const favorites = document.querySelectorAll('.favorite__container');
        let time = 0;
        favorites.forEach(favorite => {
            const number = favorite.querySelector('.favorite--number');
            const button = favorite.querySelector(".barrow_button");
            const book = favorite.querySelector('.favorite');
            const book_img = book.querySelector('img');
            
            // number from right
            // then book
            // Comment je fais pour que ce soit les uns après les autres
            // Faudra que je rajoute des opacity
            setTimeout(() => {
                book.classList.add('favorite-fromRight');
                button.classList.add('favorite-fromRight');
            }, time);
            
            setTimeout(() => {
                number.classList.add('favorite-fromRight');
            }, time += 250);
            
            setTimeout(() => {
                book_img.classList.add("favorite-fromRight");
            }, time+=150);
        })
    }
}
window.addEventListener('scroll', bookAnimation);