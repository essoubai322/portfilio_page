// Create stars
function createStars() {
    const space = document.getElementById('space');
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2;
        const duration = 3 + Math.random() * 4;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--duration', `${duration}s`);
        
        space.appendChild(star);
    }
}

// Create floating diamonds
function createDiamonds() {
    const space = document.getElementById('space');
    const diamondCount = 8;

    for (let i = 0; i < diamondCount; i++) {
        const diamond = document.createElement('div');
        diamond.className = 'diamond';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const delay = Math.random() * 5;
        
        diamond.style.left = `${x}%`;
        diamond.style.top = `${y}%`;
        diamond.style.animationDelay = `${delay}s`;
        
        space.appendChild(diamond);
    }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createDiamonds();
    
    // Animate skill cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${index * 0.1}s`;
                entry.target.style.opacity = 1;
            }
        });
    });

    document.querySelectorAll('.skill-card').forEach((card) => {
        observer.observe(card);
    });
});

// Parallax effect for diamonds
document.addEventListener('mousemove', (e) => {
    const diamonds = document.querySelectorAll('.diamond');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    diamonds.forEach(diamond => {
        const offsetX = (mouseX - 0.5) * 40;
        const offsetY = (mouseY - 0.5) * 40;
        diamond.style.transform = `rotate(45deg) translate(${offsetX}px, ${offsetY}px)`;
    });
});