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

    // Unmute/Mute button functionality
    if (unmuteButton && video) {
        unmuteButton.addEventListener('click', () => {
            video.muted = !video.muted;
            unmuteButton.textContent = video.muted ? 'Unmute' : 'Mute';
        });
    }

    // Pause/Play button functionality
    if (pauseButton && video) {
        pauseButton.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                pauseButton.textContent = 'Pause';
            } else {
                video.pause();
                pauseButton.textContent = 'Play';
            }
        });
    }

    // Forward button functionality (jumps 10 seconds ahead)
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
