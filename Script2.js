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

   // Video controls
    const video = document.getElementById('background-video');
    const unmuteButton = document.getElementById('unmute-button');
    const pauseButton = document.getElementById('pause-button');
    const forwardButton = document.getElementById('forward-button');

    // This makes sure the video is muted on first load
    if (video) {
        video.muted = true;
    }

    // Mute/Unmute button functionality
    if (unmuteButton && video) {
        unmuteButton.addEventListener('click', () => {
            video.muted = !video.muted;
            const icon = unmuteButton.querySelector('.icon');
            icon.textContent = video.muted ? '&#128266;' : '&#128265;'; // Toggles speaker icons
        });
    }

    // Pause/Play button functionality
    if (pauseButton && video) {
        pauseButton.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                pauseButton.querySelector('.icon').textContent = '&#9616;&#9616;'; // Pause icon
            } else {
                video.pause();
                pauseButton.querySelector('.icon').textContent = '&#9658;'; // Play icon
            }
        });
    }

    // Forward button functionality
    if (forwardButton && video) {
        forwardButton.addEventListener('click', () => {
            video.currentTime += 10;
        });
    }

    // This ensures the video plays automatically on load
    if (video) {
        video.play();
    }
});
