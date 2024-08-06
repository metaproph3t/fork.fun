function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    // use the market emoji as confetti
    confetti.innerText = '🎲'; // market emoji
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

function confettiLoop() {
    createConfetti();
    setTimeout(confettiLoop, 350);
}

confettiLoop();

// Smooth scrolling for navigation
// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Check if this is an external link
        if (this.getAttribute('href').startsWith('http')) {
            // If it's an external link, let the default behavior happen
            return;
        }
        
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Rest of your JavaScript code...
// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const sectionId = this.getAttribute('href');
//         document.querySelector(sectionId).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// Continuous spinning for images
const images = document.querySelectorAll('.content .image img');
images.forEach(img => {
    setInterval(() => {
        img.style.transform = `rotate(${Math.random() * 360}deg)`;
    }, 3000);
});
