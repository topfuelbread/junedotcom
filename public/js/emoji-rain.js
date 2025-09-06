// List of emojis to fall
const emojis = ['⭐', '❤️', '🦄'];

// Get the emoji container element
const emojiRain = document.querySelector('.emoji-rain');

// Function to create falling emojis
function createFallingEmoji() {
    // Randomly choose an emoji
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    // Create a new emoji element
    const emojiElement = document.createElement('span');
    emojiElement.classList.add('emoji');
    emojiElement.innerText = emoji;

    // Set a random position from left (between 0% and 100%)
    emojiElement.style.left = `${Math.random() * 100}%`;

    // Set a random animation delay and duration for variety
    emojiElement.style.animationDuration = `${Math.random() * 3 + 3}s`;  // between 3s and 6s
    emojiElement.style.animationDelay = `${Math.random() * 2}s`;  // random delay

    // Append emoji to the container
    emojiRain.appendChild(emojiElement);

    // Remove emoji after it falls out of view (for cleanup)
    setTimeout(() => {
        emojiElement.remove();
    }, 6000);  // Should match the longest animation time
}

// Continuously create falling emojis
setInterval(createFallingEmoji, 150);  // Creates a new emoji every 150ms
