// Array of random words
const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];

// Function to generate a random word
function generateRandomWord() {
    // Generate a random index between 0 and the last index of the array
    const randomIndex = Math.floor(Math.random() * words.length);

    // Select the word at the random index
    const randomWord = words[randomIndex];

    // Display the random word in the HTML
    document.getElementById('random-word').innerText = randomWord;
}