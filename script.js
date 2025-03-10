// dark mode toggle

let toggle = document.querySelector("#darkModeToggle");
toggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});


document.querySelector('.cancel-btn').addEventListener('click', function() {
    document.querySelector('form').reset(); // This will clear the form
});