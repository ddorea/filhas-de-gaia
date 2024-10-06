const images = [
    "img/brinco_1.png",
    "img/brinco_2.png",
    "img/brinco_3.png"
];
let currentIndex = 0;

function showImage(index) {
    const imageElement = document.getElementById("carousel-image");
    imageElement.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}
