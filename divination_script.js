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
    const now = Date.now(); // the present moment is powerful
    let seed = now + (performance.now() * 1000);
    
    // incorperate user query into the seed
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
    hash = hash * LUCKY_SEVEN + ANGEL_NUMBER;
    hash = ((hash << 13) ^ hash) >>> 0; // Additional mixing for better divinitive distribution
    
    // Golden ratio - divine proportion
    const phi = 1.618033988749895;
    
    // Silver ratio - lesser known sacred ratio
    const delta = 2.414213562373095;
    
    // some trigonometric mysticism
    // Use sine with golden ratio for uniform distribution
    // The fractional part of sin(large_number) is uniformly distributed
    const cosmic = Math.abs(Math.sin(hash * phi) * Math.cos(hash * delta));
    
    // Map to uniform [0,1) range using fractional part
    const cosmic_fraction = (cosmic * 10000) % 1;
    
    // Exclude index 0 (default image) from fate results
    return Math.floor(cosmic_fraction * (loomImages.length - 1)) + 1;
}

function updateLoomImage(userInput = null) {
    const loomContainer = document.querySelector('.loom-container');
    if (!loomContainer) return;
    
    // Get mystically seeded index
    const selectedIndex = getSeededIndex(userInput);
    
    // remove old image if exists
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
    
    // for image load errors
    img.onerror = () => {
        console.error(`Failed to load loom image: ${loomImages[selectedIndex]}`);
        // loading default image as fallback
        if (selectedIndex !== 0) {
            img.src = loomImages[0];
        }
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
