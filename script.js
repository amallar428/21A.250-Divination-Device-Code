const loomImages = [
    'ChatGPT Image Nov 1, 2025, 03_09_33 AM.png',
    'ChatGPT Image Nov 1, 2025, 03_10_26 AM.png',
    'ChatGPT Image Nov 1, 2025, 03_12_19 AM.png'
];

function initializeLoom() {
    const loomContainer = document.querySelector('.loom-container');
    if (!loomContainer) return;
    //randomizing
    const randomIndex = Math.floor(Math.random() * loomImages.length);
    const img = document.createElement('img');
    img.src = loomImages[randomIndex];
    img.alt = 'The Loom of Echoes';
    img.className = 'loom-image';
    loomContainer.appendChild(img);
}

document.addEventListener('DOMContentLoaded', initializeLoom);
