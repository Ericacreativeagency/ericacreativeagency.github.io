document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

 const video = document.getElementById('background-video');
const unmuteButton = document.getElementById('unmute-button');
const pauseButton = document.getElementById('pause-button');
const forwardButton = document.getElementById('forward-button');

// Unmute/Mute functionality
unmuteButton.addEventListener('click', () => {
    video.muted = !video.muted; // Toggles the muted state
    // Update the icon based on the new muted state
    unmuteButton.querySelector('.icon').innerHTML = video.muted ? '&#128266;' : '&#x1F50A;';
});

// Pause/Play functionality
pauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        pauseButton.querySelector('.icon').innerHTML = '&#9616;&#9616;'; // Change to pause icon
    } else {
        video.pause();
        pauseButton.querySelector('.icon').innerHTML = '&#9658;'; // Change to play icon
    }
});

// Forward functionality
forwardButton.addEventListener('click', () => {
    video.currentTime += 10; // Jump forward by 10 seconds
});

    // This ensures the video plays automatically on load
    if (video) {
        video.play();
    }
});
