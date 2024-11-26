// JavaScript to handle car image changes

// JavaScript to handle car image changes

// Array of car images
const carImages = [
    "carshow/OIP (1).jpeg", // Blue Car
    "carshow/BMW-M8-Coupe-Fire-Red-005.webp", // Red Car
    "carshow/BMW M8 OIP.jpg" // Black Car
];

// Current index to track which image is being displayed
let currentImageIndex = 0;

function changeCarColor() {
    // Increment the index
    currentImageIndex++;

    // Reset index if it exceeds the number of images
    if (currentImageIndex >= carImages.length) {
        currentImageIndex = 0;
    }

    // Change the car image source
    document.getElementById('carImage').src = carImages[currentImageIndex];
}
