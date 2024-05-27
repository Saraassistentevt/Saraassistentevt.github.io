var voices = [];
var selectedVoice;
var greetingDisplayed = false;

// Verifica se o navegador suporta synthesis de fala
var speechSynthesisSupported = 'speechSynthesis' in window;
var speechRecognitionSupported = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;

// Carrega as vozes disponíveis
function loadVoices() {
    if (speechSynthesisSupported) {
        voices = window.speechSynthesis.getVoices();
        selectedVoice = voices.find(voice => voice.name.toLowerCase().includes("female") || voice.name.toLowerCase().includes("feminina") || voice.name.includes("Google português do Brasil"));
        if (!selectedVoice) {
            selectedVoice = voices[0];
        }

        if (!greetingDisplayed) {
            displayGreeting();
            greetingDisplayed = true;
        }
    } else {
        console.warn("Speech Synthesis não é suportado neste navegador.");
        // Continue sem síntese de fala
        if (!greetingDisplayed) {
            displayGreetingTextOnly();
            greetingDisplayed = true;
        }
    }
}

if (speechSynthesisSupported) {
    window.speechSynthesis.onvoiceschanged = function() {
        loadVoices();
    };
}

// Função para converter texto em fala
function speak(text) {
    if (speechSynthesisSupported && selectedVoice) {
        var msg = new SpeechSynthesisUtterance(text);
        msg.voice = selectedVoice;
        window.speechSynthesis.speak(msg);
    } else {
        console.warn("Speech Synthesis não é suportado neste navegador.");
    }
}

var responses = {
    "olá": "Olá meu nome é Sara! como posso ajuda-lo?",
    "ola": "Olá meu nome é Sara! como posso ajuda-lo?"
};

var mathResponses = {
    "+": (num1, num2) => num1 + num2,
    "-": (num1, num2) => num1 - num2,
    "×": (num1, num2) => num1 * num2,
    "/": (num1, num2) => num2 !== 0 ? num1 / num2 : "Não é possível dividir por zero.",
    "^": (num1, num2) => Math.pow(num1, num2),
    "sqrt": num => num >= 0 ? Math.sqrt(num) : "Número negativo não tem raiz quadrada real."
};

function startConversation() {
    var randomTopics = [
        "Que tal falarmos sobre o clima?",
        "Você já viu algum bom filme recentemente?",
        "Qual é a sua comida favorita?",
        "O que você mais gosta de fazer nas horas vagas?",
        "Você já viajou para algum lugar interessante?"
    ];
    var randomTopic = randomTopics[Math.floor(Math.random() * randomTopics.length)];
    simulateTyping(randomTopic);
}

var timeout;
function resetTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(startConversation, 28 * 60 * 1000);
}

function onUserMessage() {
    resetTimeout();
}

resetTimeout();

function alertaInatividade() {
    setTimeout(() => {
        var audioAlerta = new Audio('caminho/do/seu/audio/alerta/teste/rf.mp3');
        audioAlerta.play();
    }, 5 * 60 * 1000);
}

alertaInatividade();

var idleTimer;
function startIdleTimer() {
    idleTimer = setTimeout(() => {
        askQuestion();
    }, 30 * 60 * 1000);
}

function resetIdleTimer() {
    clearTimeout(idleTimer);
    startIdleTimer();
}

function askQuestion() {
    var question = "Olá! Parece que você se distraiu. Como posso ajudar?";
    simulateTyping(question);
}

document.addEventListener("click", resetIdleTimer);
startIdleTimer();

function checkResponse(userInput) {
    var normalizedInput = userInput.trim().toLowerCase();
    return responses[normalizedInput] || null;
}

function getGreeting() {
    var currentHour = new Date().getHours();
    if (currentHour < 12) {
        return "Bom dia!🥱";
    } else if (currentHour < 18) {
        return "Boa tarde!🤪";
    } else {
        return "Boa noite!😴";
    }
}

function displayGreeting() {
    var chatContainer = document.getElementById("chat-container");
    var botMessageElement = document.createElement("div");
    botMessageElement.classList.add("bot-message");
    chatContainer.appendChild(botMessageElement);

    var greeting = getGreeting();
    botMessageElement.innerHTML = greeting;
    speak(greeting);
}

function displayGreetingTextOnly() {
    var chatContainer = document.getElementById("chat-container");
    var botMessageElement = document.createElement("div");
    botMessageElement.classList.add("bot-message");
    chatContainer.appendChild(botMessageElement);

    var greeting = getGreeting();
    botMessageElement.innerHTML = greeting;
}

function simulateTyping(response) {
    var chatContainer = document.getElementById("chat-container");
    var botMessageElement = document.createElement("div");
    botMessageElement.classList.add("bot-message");
    chatContainer.appendChild(botMessageElement);

    botMessageElement.innerHTML = "Sara está digitando...";

    setTimeout(() => {
        botMessageElement.innerHTML = response;
        chatContainer.scrollTop = chatContainer.scrollHeight;
        speak(response);
    }, 1000);
}

function getBotResponse(userInput) {
    var response = checkResponse(userInput);
    if (response) {
        simulateTyping(response);
    } else {
        var mathRegex = /(\d+)\s*([+\-×/^])\s*(\d+)/;
        var match = userInput.match(mathRegex);
        if (match) {
            var num1 = parseFloat(match[1]);
            var operator = match[2];
            var num2 = parseFloat(match[3]);
            if (mathResponses.hasOwnProperty(operator)) {
                var result = mathResponses[operator](num1, num2);
                simulateTyping("O resultado é " + result + ".");
            } else {
                simulateTyping("Operador matemático inválido.");
            }
        } else {
            simulateTyping("Desculpe, não entendi sua pergunta. Ainda não estou completa, se foi uma pergunta simples, mande uma mensagem para o desenvolvedor adicionar uma resposta! <a href='mailto:rfpds4880@gmail.com?subject=Olá gostaria de obter ajuda com?&body='>Clique aqui</a> para enviar sua pergunta por e-mail.");
        }
    }
}

if (speechRecognitionSupported) {
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'pt-BR';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = function(event) {
        var userInput = event.results[0][0].transcript;
        var chatContainer = document.getElementById("chat-container");
        var userMessageElement = document.createElement("div");
        userMessageElement.classList.add("user-message");
        userMessageElement.innerHTML = userInput;
        chatContainer.appendChild(userMessageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        getBotResponse(userInput);
    };

    recognition.onerror = function(event) {
        console.error("Erro no reconhecimento de fala: " + event.error);
    };

    function startRecognition() {
        recognition.start();
    }
} else {
    console.warn("Speech Recognition não é suportado neste navegador.");
    function startRecognition() {
        console.warn("Speech Recognition não é suportado neste navegador.");
    }
}

// Iniciar carregamento das vozes ao carregar a página
window.addEventListener('load', loadVoices);

// Botão para iniciar a gravação
var recordButton = document.createElement("button");
recordButton.innerHTML = "Falar";
recordButton.classList.add("record-button");
recordButton.onclick = startRecognition;
document.body.appendChild(recordButton);
