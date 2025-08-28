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
    video.muted = true;

    // Add a click event listener to the button
    if (unmuteButton) { // Check if the button exists before adding the event listener
        unmuteButton.addEventListener('click', () => {
            if (video.muted) {
                video.muted = false;
                unmuteButton.textContent = 'Mute'; // Change button text
            } else {
                video.muted = true;
                unmuteButton.textContent = 'Unmute'; // Change button text back
            }
        });
    }

    // Optional: Play the video on load
    video.play();
});
