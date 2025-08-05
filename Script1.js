// 1. Good Morning / Afternoon / Evening message
window.addEventListener('DOMContentLoaded', () => {
    const roleText = document.getElementById('roleText');
    const now = new Date();
    const hour = now.getHours();

    let greeting;
    if (hour < 12) {
        greeting = "Good Morning! I'm a Junior Software Developer";
    } else if (hour < 18) {
        greeting = "Good Afternoon! I'm a Junior Software Developer";
    } else {
        greeting = "Good Evening! I'm a Junior Software Developer";
    }

    // Typing effect
    let index = 0;
    function typeWriter() {
        if (index < greeting.length) {
            roleText.innerHTML += greeting.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();
});


// 2. Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader)
});
// 3. Dynamic passion rotator under your name
const passions = ["Junior Software Developer", "Web Designer", "Tech Enthusiast", "Open Source Learner"];
let passionIndex = 0;

function rotatePassion() {
    const passionEl = document.getElementById("passionText");
    passionEl.textContent = passions[passionIndex];
    passionIndex = (passionIndex + 1) % passions.length;
}

setInterval(rotatePassion, 2000);
rotatePassion();