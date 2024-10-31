/* --------------------------------------------------------
/* Particle Animation Configuration for Web Interactivity
/* -------------------------------------------------------- */

/* 
   This script customizes particle effects on the 'particles-js' 
   element for enhanced visual interaction. Adjust properties in
   the config below to modify the particle behavior and style.
*/

/* Initialize particlesJS with config for 'particles-js' */

particlesJS('particles-js', {

    "particles": {
        "number": {
            "value": 60,            // Particle count for a clean layout
            "density": {
                "enable": true,
                "value_area": 1000  // Spread particles across canvas
            }
        },
        "color": { "value": "#2e86de" },  // Blue particle color
        "shape": {
            "type": "triangle",      // Triangle particles for modern effect
            "polygon": { "nb_sides": 3 }  // Triangle sides
        },
        "opacity": { 
            "value": 0.6,            // Subtle opacity
            "anim": { "enable": false }
        },
        "size": {
            "value": 7,               // Larger particle size for presence
            "random": true,
            "anim": { "enable": true, "speed": 10, "size_min": 0.5 }
        },
        "line_linked": {
            "enable": true,            // Connect particles with lines
            "distance": 180,
            "color": "#2e86de",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,            // Enable particle movement
            "speed": 4,
            "random": true,
            "out_mode": "out"         // Allow particles to exit canvas
        }
    },

    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "bubble" },   // Hover interaction
            "onclick": { "enable": true, "mode": "push" },     // Click to add particles
            "resize": true
        },
        "modes": {
            "bubble": { 
                "distance": 200, "size": 10, "duration": 2, "opacity": 1
            },
            "push": { "particles_nb": 5 }                     // Add particles on click
        }
    },

    "retina_detect": true,     // Enable for high-res displays
    "config_demo": {
        "hide_card": true,
        "background_color": "#f8f9fa"
    }
});

