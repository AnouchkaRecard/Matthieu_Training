// Activation du carrousel avec Slick.js
$(document).ready(function() {
    $('.carousel').slick({
        dots: false, // Désactiver les points de pagination
        arrows: true, // Activer les flèches de navigation
        autoplay: true, // Optionnel: faire défiler automatiquement
        autoplaySpeed: 3000, // Optionnel: intervalle de défilement automatique
        speed: 500, // Vitesse de défilement
        infinite: true, // Boucle infinie
        slidesToShow: 1, // Afficher un seul slide à la fois
        slidesToScroll: 1, // Défilement d'un slide à la fois
        prevArrow: '<button type="button" class="slick-prev">&larr;</button>', // Flèche gauche
        nextArrow: '<button type="button" class="slick-next">&rarr;</button>' // Flèche droite
    });
});

// Ajout d'un effet de changement de classe pour le header en fonction du défilement
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// JavaScript pour le menu hamburger
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.fade-in');

    function checkVisibility() {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Vérifie si l'élément est partiellement dans la vue
            if (rect.top < windowHeight && rect.bottom > 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    // Vérifie la visibilité lors du défilement et du chargement de la page
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility(); // Appelle immédiatement pour le cas où l'élément est déjà dans la vue
});


    document.addEventListener('DOMContentLoaded', function() {
        const animatedElements = document.querySelectorAll('.animated-section, .separator');

        function checkVisibility() {
            animatedElements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Vérifie si l'élément est partiellement dans la vue
                if (rect.top < windowHeight && rect.bottom > 0) {
                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                }
            });
        }

        // Vérifie la visibilité lors du défilement et du chargement de la page
        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('resize', checkVisibility);
        checkVisibility(); // Appelle immédiatement pour le cas où l'élément est déjà dans la vue
    });

    document.addEventListener('DOMContentLoaded', function() {
        function handleScroll() {
            const sections = document.querySelectorAll('.animated-section');
            const scrollPosition = window.scrollY + window.innerHeight;
    
            sections.forEach(section => {
                if (scrollPosition > section.offsetTop + section.clientHeight / 4) {
                    section.classList.add('visible');
                }
            });
        }
    
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
    });
    document.addEventListener('DOMContentLoaded', function() {
        const slideBar = document.querySelector('.slide-in-bar');
        let wasVisible = false; // État de visibilité précédent
        let animationTimeout; // Pour gérer le délai avant l'animation
    
        function checkVisibility() {
            const rect = slideBar.getBoundingClientRect();
            const windowHeight = window.innerHeight;
    
            // Vérifie si la barre de séparation est visible dans la fenêtre
            const isVisible = rect.top < windowHeight && rect.bottom > 0;
    
            if (isVisible && !wasVisible) {
                // L'élément devient visible, ajouter un délai avant l'animation
                clearTimeout(animationTimeout); // Annule le précédent délai
                animationTimeout = setTimeout(() => {
                    slideBar.classList.remove('animate'); // Réinitialiser l'animation
                    void slideBar.offsetWidth; // Déclenche le reflow pour réinitialiser l'animation
                    slideBar.classList.add('animate'); // Ajouter la classe pour lancer l'animation
                }, 500); // Délai avant le début de l'animation
            } else if (!isVisible && wasVisible) {
                // La section est sortie de la vue, retirer l'animation
                slideBar.classList.remove('animate');
            }
    
            // Mettre à jour l'état de visibilité
            wasVisible = isVisible;
        }
    
        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('resize', checkVisibility);
        checkVisibility(); // Vérifier la visibilité au chargement
    });
    
   
    document.addEventListener('DOMContentLoaded', () => {
        const section = document.querySelector('.youtube-playlist-section');
        const title = document.querySelector('.btn-en-savoir-plus');
        const container = document.querySelector('.youtube-container');
        const textBlock = document.querySelector('.text-block');
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        }, { threshold: 0.1 });
    
        observer.observe(section);
        observer.observe(title);
        observer.observe(container);
        observer.observe(textBlock);
    });
    