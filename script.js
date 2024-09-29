
const texts = ["Fullstack Developer", "Cybersecurity Major", "Web Developer", "Web Designer", "UI/UX Designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = isDeleting ? currentText.slice(0, --index) : currentText.slice(0, ++index);

    const animatedTextElement = document.querySelector("#animated-text");
    if (animatedTextElement) {
        animatedTextElement.textContent = letter;

        let typingSpeed = isDeleting ? 100 : 150;
        if (!isDeleting && letter.length === currentText.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && letter.length === 0) {
            isDeleting = false;
            count++;
            typingSpeed = 500;
        }
        setTimeout(type, typingSpeed);
    }
})();

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
