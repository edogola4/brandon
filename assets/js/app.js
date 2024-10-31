/* --------------------------------------------------------
/* Customized Particle Animation for Professional Web Page
/* -------------------------------------------------------- */

/* 
   This script sets up a customized particle animation on the
   'particles-js' element. You can modify the appearance and
   behavior of the particles by adjusting the values in the
   configuration object below.
*/

/* 
   particlesJS function initializes the particle effect directly
   without the need for an external JSON file.
*/

particlesJS('particles-js',  // Target the 'particles-js' element

    {  // Configuration object for the particle effect
      "particles": {  // Control particles' behavior and appearance
        "number": {
          "value": 60,  // Lower particle count for a cleaner look
          "density": {
            "enable": true,
            "value_area": 1000  // Spread particles more across the screen
          }
        },
        "color": {
          "value": "#2e86de"  // Elegant blue color for the particles
        },
        "shape": {
          "type": "triangle",  // Triangular particle shapes for a modern touch
          "stroke": {
            "width": 0,
            "color": "#ffffff"  // No stroke color
          },
          "polygon": {
            "nb_sides": 3  // Sides of the triangle shape
          },
          "image": {  // Optional image-based particles (not used here)
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.6,  // Softer opacity for subtle effect
          "random": false,
          "anim": {  // Opacity animation (disabled for simplicity)
            "enable": false,
            "speed": 1,
            "opacity_min": 0.3,
            "sync": false
          }
        },
        "size": {
          "value": 7,  // Slightly larger particles for a bold presence
          "random": true,  // Randomize particle sizes for visual variety
          "anim": {
            "enable": true,  // Enable size animation
            "speed": 10,  // Smooth size transition for dynamic effect
            "size_min": 0.5,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,  // Enable connections between particles
          "distance": 180,  // Increase connection distance
          "color": "#2e86de",  // Matching blue color for connecting lines
          "opacity": 0.6,  // Slightly transparent lines for a clean look
          "width": 1  // Thin line width
        },
        "move": {
          "enable": true,  // Enable particle movement
          "speed": 4,  // Slower speed for a more calming effect
          "direction": "none",  // No fixed direction for free-flowing movement
          "random": true,  // Randomize particle movement for natural flow
          "straight": false,  // Particles do not move in straight lines
          "out_mode": "out",  // Particles exit the canvas when they move out of bounds
          "attract": {  // Attraction settings (disabled)
            "enable": false,
            "rotateX": 800,
            "rotateY": 1600
          }
        }
      },
      "interactivity": {  // Configure how users can interact with the particles
        "detect_on": "canvas",  // Enable interaction detection on the canvas
        "events": {
          "onhover": {
            "enable": true,  // Enable hover interaction
            "mode": "bubble"  // Particles will "bubble" when hovered over
          },
          "onclick": {
            "enable": true,  // Enable click interaction
            "mode": "push"  // Add more particles when clicked
          },
          "resize": true  // Adjust particle layout when window is resized
        },
        "modes": {
          "grab": {  // Grab interaction (connect particles when hovered)
            "distance": 400,
            "line_linked": {
              "opacity": 0.8  // Higher opacity for visible grab lines
            }
          },
          "bubble": {  // Bubble effect (enlarge particles on hover)
            "distance": 200,
            "size": 10,  // Make the particles larger on hover
            "duration": 2,  // Bubble effect duration
            "opacity": 1,  // Make bubbles fully opaque on hover
            "speed": 3
          },
          "repulse": {
            "distance": 100  // Distance for repulsion on hover
          },
          "push": {
            "particles_nb": 5  // Number of particles added on click
          },
          "remove": {
            "particles_nb": 2  // Number of particles removed on click
          }
        }
      },
      "retina_detect": true,  // Enable retina display detection for high-resolution screens
      "config_demo": {  // Optional demo settings for background customization
        "hide_card": true,  // Hide the configuration card in demo
        "background_color": "#f8f9fa",  // Light grey background for contrast
        "background_image": "",  // No background image
        "background_position": "50% 50%",  // Center the background
        "background_repeat": "no-repeat",  // Do not repeat the background image
        "background_size": "cover"  // Cover the entire area with the background
      }
    }
  
  );
  
