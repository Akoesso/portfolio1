// Ajout d'animation des compétences //


// Animation des barres de progression au scroll
function animerBarresProgression() {
    const barres = document.querySelectorAll('.progression-remplissage');
    
    barres.forEach(barre => {
        const pourcentage = barre.getAttribute('data-pourcentage');
        barre.style.setProperty('--pourcentage', `${pourcentage}%`);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    barre.classList.add('animate');
                }
            });
        });
        
        observer.observe(barre);
    });
}

// Lancer l'animation quand la page est chargée
document.addEventListener('DOMContentLoaded', animerBarresProgression);


// Ajout d'animation des temoignages //

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 Initialisation du carousel...');
    
    const slides = document.querySelectorAll('.temoignage-card');
    const dots = document.querySelectorAll('.dot');
    
    let currentIndex = 0;
    let autoPlay;
    
    function showSlide(index) {
        // Masquer tous
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Afficher l'actuel
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }
    
    function nextSlide() {
        const newIndex = (currentIndex + 1) % slides.length;
        showSlide(newIndex);
    }
    
    function startAutoPlay() {
        autoPlay = setInterval(nextSlide, 4000);
    }
    
    // Événements pour les points
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Démarrer
    showSlide(0);
    startAutoPlay();
    
    console.log('✅ Carousel activé avec auto-play!');
});



// Ajout du pied de page //

document.addEventListener('DOMContentLoaded', function() {
    // Animation douce au scroll
    const footer = document.querySelector('.footer');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footer.style.opacity = '1';
                footer.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Appliquer l'animation initiale
    footer.style.opacity = '0';
    footer.style.transform = 'translateY(20px)';
    footer.style.transition = 'all 0.6s ease';
    
    observer.observe(footer);
});
