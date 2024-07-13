const images = [
    'img/profile12.jpg'
];

let currentIndex = 0;
const profilePic = document.getElementById('profile-pic');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    profilePic.src = images[currentIndex];
}

setInterval(changeImage, 5000);
