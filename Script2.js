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

    // Background video sound control
    const video = document.getElementById('background-video');
    const unmuteButton = document.getElementById('unmute-button');

    // Mute the video by default to satisfy browser policies
    if (video) {
        video.muted = true;
    }

    // Add a click event listener to the button
    if (unmuteButton && video) {
        unmuteButton.addEventListener('click', () => {
            if (video.muted) {
                video.muted = false;
                unmuteButton.textContent = 'Mute';
                video.play();
            } else {
                video.muted = true;
                unmuteButton.textContent = 'Unmute';
            }
        });
    }

    // Optional: Play the video on load
    if (video) {
        video.play();
    }
});
