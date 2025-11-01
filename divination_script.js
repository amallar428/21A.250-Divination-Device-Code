const loomImages = [
    'Looms/ChatGPT Image Nov 1, 2025, 05_18_25 AM.png', // Default image
    'Looms/ChatGPT Image Nov 1, 2025, 03_09_33 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 03_10_26 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 03_12_19 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 03_15_29 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 03_22_38 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 03_24_39 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 03_36_28 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 03_41_33 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 03_55_53 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 03_57_36 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 04_01_57 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 04_03_30 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 04_05_27 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 04_30_58 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 04_32_44 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 04_34_38 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 04_36_20 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 04_38_07 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 04_39_33 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 04_45_54 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 05_08_31 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 05_37_05 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 05_39_49 AM.png',
    'Looms/ChatGPT Image Nov 1, 2025, 05_49_11 AM.png'
];
// ^^images generated at the witching hour for maximum potency

// Convert string to numeric seed
function stringToSeed(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // convert to 32bit 
    }
    return Math.abs(hash);
}

function getSeededIndex(userInput = null) {
    const now = Date.now();
    let seed = now + (performance.now() * 1000);
    
    // incorperate user input into the seed
    if (userInput && userInput.trim()) {
        const inputSeed = stringToSeed(userInput.toLowerCase().trim());
        seed = seed + inputSeed * 1000; // Weight user input heavily, for max divination
    }
    
    // Powerful numbers for hash distribution, I mean to enhance divination
    const THE_MEANING_OF_LIFE = 42;      
    const THIRD_TIME_CHARM = 3;       
    const ANGEL_NUMBER = 444;  
    const LUCKY_SEVEN = 7;         

    // randomization with mystical numbers
    let hash = seed;
    hash = ((hash << THIRD_TIME_CHARM) - hash) + (seed % THE_MEANING_OF_LIFE);
    hash = hash & hash;
    hash = (hash * LUCKY_SEVEN) % (THE_MEANING_OF_LIFE * 13); 
    
    // Golden ratio - divine proportion
    const phi = 1.618033988749895;
    
    // Silver ratio - lesser known sacred ratio
    const delta = 2.414213562373095;
    
    // some trigonometric mysticism
    const cosmic = Math.abs(
        Math.sin(hash * phi) * 
        Math.cos(hash / delta) * 
        (1 + Math.sin(seed / ANGEL_NUMBER))
    );
    
    return Math.floor(cosmic * loomImages.length);
}

function updateLoomImage(userInput = null) {
    const loomContainer = document.querySelector('.loom-container');
    if (!loomContainer) return;
    
    // Get mystically seeded index
    const selectedIndex = getSeededIndex(userInput);
    
    // Remove old image if exists
    const oldImg = loomContainer.querySelector('.loom-image');
    if (oldImg) {
        oldImg.remove();
    }
    
    // Create new image
    const img = document.createElement('img');
    img.src = loomImages[selectedIndex];
    img.alt = 'The Loom of Echoes';
    img.className = 'loom-image loom-image-hidden';
    loomContainer.appendChild(img);
    
    // reveal 
    img.onload = () => {
        setTimeout(() => {
            img.classList.remove('loom-image-hidden');
            img.classList.add('loom-image-revealed');
        }, 100);
    };
}

function initializeLoom() {
    // Show default image (first in array) on initial load
    const loomContainer = document.querySelector('.loom-container');
    if (!loomContainer) return;
    
    const img = document.createElement('img');
    img.src = loomImages[0]; // Always use first image as default
    img.alt = 'The Loom of Echoes';
    img.className = 'loom-image loom-image-hidden';
    loomContainer.appendChild(img);
    
    // reveal 
    img.onload = () => {
        setTimeout(() => {
            img.classList.remove('loom-image-hidden');
            img.classList.add('loom-image-revealed');
        }, 100);
    };
}

function handleUserQuestion() {
    const userQuestion = prompt("Speak your question to the Loom:");
    
    if (userQuestion && userQuestion.trim()) {
        updateLoomImage(userQuestion);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializeLoom();
    
    // button handler
    const recordBtn = document.getElementById('recordBtn');
    if (recordBtn) {
        recordBtn.addEventListener('click', handleUserQuestion);
    }
});
