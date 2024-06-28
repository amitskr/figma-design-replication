/* modal handler */
var modal = document.getElementById("bookForm");
var btn1 = document.getElementById("bookBtn");
var btn2 = document.getElementById("startBtn");
var span1 = document.getElementsByClassName("form-close")[0];

btn1.onclick = function() {
    modal.style.display = "flex";
}

btn2.onclick = function() {
    modal.style.display = "flex";
}

span1.onclick = function() {
    modal.style.display = "none";
}

// closing on clicking outside modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var videoContainers = document.querySelectorAll('.child-video');

    videoContainers.forEach(function(videoContainer) {
        var playCircle = videoContainer.querySelector('.play-circle');
        var youtubeVideo = videoContainer.querySelector('.youtube-video');

        if (youtubeVideo) {
            videoContainer.addEventListener('click', function() {
                playCircle.style.display = 'none';
                youtubeVideo.style.display = 'block';

                var src = youtubeVideo.src;
                youtubeVideo.src = src + "&autoplay=1";
            });
        }
    });
});
