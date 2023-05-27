function getBotResponse(input) {
    // Rock paper scissors
    if (input.toLowerCase() === "rock") {
        return "paper";
    } else if (input.toLowerCase() === "paper") {
        return "scissors";
    } else if (input.toLowerCase() === "scissors") {
        return "rock";
    }

    // Simple responses
    if (input.toLowerCase() === "hello" || input.toLowerCase() === "salut" || input.toLowerCase() === "hi") {
        return "Hello there!";
    } else if (input.toLowerCase() === "goodbye" || input.toLowerCase() === "bye" || input.toLowerCase() === "goodnight" || input.toLowerCase() === "good night" || input.toLowerCase() === "good bye") {
        const responses = ["Talk to you later!", "Goodbye", "Good night", "Bye", "See you later"];
        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
    } else if (input.toLowerCase() === "clear") {
        document.getElementById("chatbox").innerHTML = "";
        return "The chat has been cleared";
    } else if (input.toLowerCase() === "how are you?" ||  input.toLowerCase() === "how are you doing?" || input.toLowerCase() === "how are u" || input.toLowerCase() === "how do you feel?" || input.toLowerCase() === "how do you feel") {
        return "I'm doing well, thank you!";
    } else if (input.toLowerCase() === "what's your name?") {
        return "My name is ChatBot.";
    } else if (input.toLowerCase() === "tell me a joke") {
        return "Why don't scientists trust atoms? Because they make up everything!";
    } else if (input.toLowerCase() === "what is the meaning of life?") {
        return "The meaning of life is subjective and can vary for each individual.";
    } else if (input.toLowerCase() === "who is your creator?") {
        return "I was created by OpenAI.";
    } else if (input.toLowerCase() === "do you like pizza?") {
        return "As a bot, I don't have taste buds, but I'm always happy to chat about pizza!";
    } else if (isUkrainian(input)) {
        return "Будь ласка, напишіть своє повідомлення англійською мовою. тому що я не розумію української";
    } else {
        return "I can't understand you, please write something else.";
    }
}

// Функція для перевірки, чи містить рядок українські літери
function isUkrainian(text) {
    const ukrainianPattern = /[\u0400-\u04FF]/; // Діапазон кодових точок для українських літер в Unicode
    return ukrainianPattern.test(text);
}