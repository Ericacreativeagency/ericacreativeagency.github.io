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

    // This makes sure the video is muted on first load
    if (video) {
        video.muted = true;
    }

    // This code block runs when the button is clicked
    if (unmuteButton && video) {
        unmuteButton.addEventListener('click', () => {
            if (video.muted) {
                video.muted = false; // This line enables the sound
                unmuteButton.textContent = 'Mute'; // Changes the text to 'Mute'
                video.play();
            } else {
                video.muted = true; // This line mutes the sound
                unmuteButton.textContent = 'Unmute'; // Changes the text to 'Unmute'
            }
        });
    }

    // This ensures the video plays automatically on load
    if (video) {
        video.play();
    }
});
