// makes the menu bar clickable
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//makes the text transition when loaded
const sr = ScrollReveal ({
    distance: '80px',
    duration: 2800,
    reset: true
})

sr.reveal('.text,.social',{delay:300, origin:'bottom'})


document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents actual form submission

// Displays success message
    alert("Form Submitted Successfully!");
});
