const prompts = [
    "Look around. Take a photo of something that interests you.",
    "Open your notes app. Write down 3 things you are grateful for today.",
    "Close your eyes (if safe) and focus on your breath. During your ride, take deep, slow breaths to release tension.",
    "For every stop you pass, repeat a positive affirmation, such as 'I am calm and capable.'",
    "Set an intention for what you will do after your commute. Focus your energy on what you hope to achieve today.",
    // Add more prompts as needed
];

// Function to generate a random prompt
function generatePrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const promptElement = document.getElementById("prompt");
    promptElement.textContent = prompts[randomIndex];
}

window.onload = generatePrompt;
