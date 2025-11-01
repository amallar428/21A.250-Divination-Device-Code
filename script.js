const loomImages = [
    'ChatGPT Image Nov 1, 2025, 03_09_33 AM.png',
    'ChatGPT Image Nov 1, 2025, 03_10_26 AM.png',
    'ChatGPT Image Nov 1, 2025, 03_12_19 AM.png'
];
// ^^images generated at the witching hour for maximum potency

function getSeededIndex() {
    const now = Date.now();
    const seed = now + (performance.now() * 1000);
    
    // Powerful numbers for hash distribution, I mean to enhance divination
    const THE_MEANING_OF_LIFE = 42;      
    const THIRD_TIME_CHARM = 3;       
    const ANGEL_NUMBER = 29.530588;  
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

function initializeLoom() {
    const loomContainer = document.querySelector('.loom-container');
    if (!loomContainer) return;
    
    // Get mystically seeded index
    const selectedIndex = getSeededIndex();
    
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

document.addEventListener('DOMContentLoaded', initializeLoom);
