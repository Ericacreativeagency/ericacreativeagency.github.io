document.addEventListener('DOMContentLoaded', () => {

    // --- Video Controls Section ---

    // Get references to the HTML elements
    const video = document.getElementById('background-video');
    const unmuteButton = document.getElementById('unmute-button');
    const pauseButton = document.getElementById('pause-button');
    const forwardButton = document.getElementById('forward-button');

    // Mute/Unmute functionality
    unmuteButton.addEventListener('click', () => {
        // Toggle the 'muted' property of the video
        video.muted = !video.muted;
        
        // Change the button icon based on the new muted state
        if (video.muted) {
            unmuteButton.querySelector('.icon').innerHTML = '&#128266;'; // Muted speaker
        } else {
            unmuteButton.querySelector('.icon').innerHTML = '&#x1F50A;'; // Unmuted speaker
        }
    });

    // Pause/Play functionality
    pauseButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            // Change the button icon to the pause icon
            pauseButton.querySelector('.icon').innerHTML = '&#9616;&#9616;';
        } else {
            video.pause();
            // Change the button icon to the play icon
            pauseButton.querySelector('.icon').innerHTML = '&#9658;';
        }
    });
    
    // Optional: Listen to the video's own play/pause events to keep button in sync
    video.addEventListener('play', () => {
        pauseButton.querySelector('.icon').innerHTML = '&#9616;&#9616;';
    });
    
    video.addEventListener('pause', () => {
        pauseButton.querySelector('.icon').innerHTML = '&#9658;';
    });


    // Forward functionality
    forwardButton.addEventListener('click', () => {
        // Jump the video's current playback time forward by 10 seconds
        video.currentTime += 10;
    });

    // --- Header and Hero Section Interactions ---

    // A simple example of a scroll-based effect for the header
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Example for adding a class to the hero section on page load for animation
    const heroSection = document.querySelector('.hero-section');
    heroSection.classList.add('is-visible');

});
