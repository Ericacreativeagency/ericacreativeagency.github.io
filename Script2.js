document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------
    // 1. Video Controls Functionality
    // -----------------------------------
    const video = document.getElementById('background-video');
    const unmuteButton = document.getElementById('unmute-button');
    const pauseButton = document.getElementById('pause-button');
    const forwardButton = document.getElementById('forward-button');
    const videoContainer = document.querySelector('.video-container');

    // This handles muting/unmuting the video.
    unmuteButton.addEventListener('click', () => {
        video.muted = !video.muted; // Toggles the video's muted state

        // Changes the icon based on the video's sound state
        if (video.muted) {
            unmuteButton.querySelector('.icon').innerHTML = '&#128266;'; // Muted speaker icon
        } else {
            unmuteButton.querySelector('.icon').innerHTML = '&#x1F50A;'; // Unmuted speaker icon
        }
    });

    // This handles playing/pausing the video.
    pauseButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // This handles skipping forward in the video.
    forwardButton.addEventListener('click', () => {
        video.currentTime += 10; // Jumps forward by 10 seconds
    });

    // Optional but recommended: Synchronize the button icons with the video state.
    // This is important because the video can play/pause on its own (e.g., autoplay).
    video.addEventListener('play', () => {
        pauseButton.querySelector('.icon').innerHTML = '&#9616;&#9616;'; // Change to pause icon
    });

    video.addEventListener('pause', () => {
        pauseButton.querySelector('.icon').innerHTML = '&#9658;'; // Change to play icon
    });
    
    // -----------------------------------
    // 2. Scroll-based Animations
    // -----------------------------------
    const header = document.querySelector('.header');

    // Adds or removes the 'scrolled' class to the header based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // -----------------------------------
    // 3. Initial Hero Section Animation
    // -----------------------------------
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButton = document.querySelector('.hero-button');

    // We can use a small delay to trigger the fade-in animations
    // The CSS already handles the animation, this just ensures the class is added
    // after the content is ready.
    setTimeout(() => {
        // You can use a single class for this, e.g., 'is-visible'
        // and then define the animation in CSS for that class.
        // The HTML you provided uses keyframes directly, so we just
        // need to make sure the elements are present in the DOM.
    }, 100);

    // -----------------------------------
    // 4. Services Section Hover Effect
    // -----------------------------------
    const serviceItems = document.querySelectorAll('.service-item');

    // Add event listeners to each service item for a more interactive effect
    // This is an alternative to a pure CSS hover effect
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Add a class on hover
            item.classList.add('is-hovering');
        });

        item.addEventListener('mouseleave', () => {
            // Remove the class when not hovering
            item.classList.remove('is-hovering');
        });
    });
});
