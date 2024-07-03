const images = [
    'img/profile1.jpg',
    'img/profile2.jpg',
    'img/profile4.jpg',
    'img/profile7.jpg',
    'img/profile8.jpg',
    'img/profile9.jpg',
    'img/profile10.jpg',
    'img/profile11.jpg',
    'img/profile12.jpg'
];

let currentIndex = 0;
const profilePic = document.getElementById('profile-pic');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    profilePic.src = images[currentIndex];
}

setInterval(changeImage, 5000);
