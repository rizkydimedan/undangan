// Get references to the elements
const index = document.getElementById('index');
const cover = document.getElementById('cover');
const openCover = document.getElementById('openCover');
const videoFrame = document.getElementById('videoFrame');
const toggleButton = document.getElementById('toggleButton');
let isPlaying = false;


openCover.addEventListener('click', function () {

    if (!isPlaying) {
        videoFrame.src = "https://www.youtube.com/embed/VDbVXpJWA-k?si=HTH9oH1X5uoS-SUu&amp;autoplay=1";
        toggleButton.textContent = "Pause";
    }
    
    setTimeout(function () {
        // Hide the cover with fade-out effect
        cover.classList.remove('d-block');
        cover.classList.add('d-none', 'fade-out');
        
        // Show the index with fade-in effect
        index.classList.add('fade-in');
    }, 500);
});


toggleButton.addEventListener('click', function () {
    if (!isPlaying) {
        videoFrame.src = "https://www.youtube.com/embed/VDbVXpJWA-k?si=HTH9oH1X5uoS-SUu&amp;autoplay=1";
        toggleButton.textContent = "Pause";
    } else {
        videoFrame.src = "https://www.youtube.com/embed/VDbVXpJWA-k?si=HTH9oH1X5uoS-SUu&amp;";
        toggleButton.textContent = "Play";
    }

    isPlaying = !isPlaying;
});