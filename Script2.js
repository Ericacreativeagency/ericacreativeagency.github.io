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
    const video = document.getElementById('myVideo'); // Or myAudio for audio
const unmuteButton = document.getElementById('unmute-button');
const pauseButton = document.getElementById('pause-button');
const forwardButton = document.getElementById('forward-button');

    // This makes sure the video is muted on first load
    if (video) {
        video.muted = true;
    }

    // Unmute/Mute functionality
unmuteButton.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        // Change the icon to show it's unmuted
        unmuteButton.querySelector('.icon').textContent = '🔊';
    } else {
        video.muted = true;
        // Change the icon to show it's muted
        unmuteButton.querySelector('.icon').textContent = '🔇';
    }
});
    }

    // Pause/Play functionality
pauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        // Change the icon to show 'pause'
        pauseButton.querySelector('.icon').innerHTML = '&#9616;&#9616;';
    } else {
        video.pause();
        // Change the icon to show 'play'
        pauseButton.querySelector('.icon').innerHTML = '&#9658;'; // Play icon
    }
});
    }

    // Forward functionality
forwardButton.addEventListener('click', () => {
    video.currentTime += 10; // Jump forward by 10 seconds
});
    }

    // This ensures the video plays automatically on load
    if (video) {
        video.play();
    }
});
