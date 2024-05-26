var voices = [];
var selectedVoice;
var greetingDisplayed = false; // Variável para controlar se a saudação já foi exibida

// Carrega as vozes disponíveis
function loadVoices() {
    voices = window.speechSynthesis.getVoices();
    // Tenta encontrar uma voz feminina
    selectedVoice = voices.find(voice => voice.name.toLowerCase().includes("female") || voice.name.toLowerCase().includes("feminina") || voice.name.includes("Google português do Brasil"));
    // Se não encontrar, escolhe a primeira voz disponível
    if (!selectedVoice) {
        selectedVoice = voices[0];
    }

    // Depois de carregar as vozes, exibe a saudação se ainda não foi exibida
    if (!greetingDisplayed) {
        displayGreeting();
        greetingDisplayed = true; // Marca que a saudação foi exibida
    }
}

// Espera as vozes serem carregadas e depois executa a função loadVoices
window.speechSynthesis.onvoiceschanged = function() {
    loadVoices();
};

// Função para converter texto em fala
function speak(text) {
    var msg = new SpeechSynthesisUtterance(text);
    if (selectedVoice) {
        msg.voice = selectedVoice;
    }
    window.speechSynthesis.speak(msg);
}

var responses = {
    // Pessoal chat
    "olá": "Olá, meu nome é Sara! Como posso ajudá-lo?",
    "ola": "Olá, meu nome é Sara! Como posso ajudá-lo?",
};

var mathResponses = {
    "+": function(num1, num2) {
        return num1 + num2;
    },
    "-": function(num1, num2) {
        return num1 - num2;
    },
    "×": function(num1, num2) {
        return num1 * num2;
    },
    "/": function(num1, num2) {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Não é possível dividir por zero.";
        }
    },
    "^": function(num1, num2) {
        return Math.pow(num1, num2);
    },
    "sqrt": function(num) {
        if (num >= 0) {
            return Math.sqrt(num);
        } else {
            return "Número negativo não tem raiz quadrada real.";
        }
    }
};

function startConversation() {
    var randomTopics = [
        "Que tal falarmos sobre o clima?",
        "Você já viu algum bom filme recentemente?",
        "Qual é a sua comida favorita?",
        "O que você mais gosta de fazer nas horas vagas?",
        "Você já viajou para algum lugar interessante?"
    ];

    var randomIndex = Math.floor(Math.random() * randomTopics.length);
    var randomTopic = randomTopics[randomIndex];
    simulateTyping(randomTopic);
}

var timeout;
function resetTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(startConversation, 28 * 60 * 1000); // 28 minutos em milissegundos
}

function onUserMessage() {
    resetTimeout();
}

resetTimeout();

function alertaInatividade() {
    setTimeout(function() {
        var audioAlerta = new Audio('caminho/do/seu/audio/alerta/teste/rf.mp3');
        audioAlerta.play();
    }, 5 * 60 * 1000); // 5 minutos em milissegundos
}

alertaInatividade();

var idleTimer;
function startIdleTimer() {
    idleTimer = setTimeout(function() {
        askQuestion();
    }, 30 * 60 * 1000); // 30 minutos em milissegundos
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
    if (responses.hasOwnProperty(normalizedInput)) {
        return responses[normalizedInput];
    }
    return null;
}

function getGreeting() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var greeting;

    if (currentHour < 12) {
        greeting = "Bom dia!🥱";
    } else if (currentHour < 18) {
        greeting = "Boa tarde!🤪";
    } else {
        greeting = "Boa noite!😴";
    }

    return greeting;
}

function displayGreeting() {
    var chatContainer = document.getElementById("chat-container");
    var botMessageElement = document.createElement("div");
    botMessageElement.classList.add("bot-message");
    chatContainer.appendChild(botMessageElement);

    var greeting = getGreeting();
    botMessageElement.innerHTML = greeting;
    speak(greeting); // Adiciona a fala
}

function simulateTyping(response) {
    var chatContainer = document.getElementById("chat-container");
    var botMessageElement = document.createElement("div");
    botMessageElement.classList.add("bot-message");
    chatContainer.appendChild(botMessageElement);

    botMessageElement.innerHTML = "Sara está digitando...";

    setTimeout(function() {
        botMessageElement.innerHTML = response;
        chatContainer.scrollTop = chatContainer.scrollHeight;
        speak(response); // Adiciona a fala
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
            var result;
            if (mathResponses.hasOwnProperty(operator)) {
                result = mathResponses[operator](num1, num2);
                simulateTyping("O resultado é " + result + ".");
            } else {
                simulateTyping("Operador matemático inválido.");
            }
        } else {
            simulateTyping("Desculpe, não entendi sua pergunta. Ainda não estou completa, se foi uma pergunta simples, mande uma mensagem para o desenvolvedor adicionar uma resposta! <a href='mailto:rfpds4880@gmail.com?subject=Olá gostaria de obter ajuda com?&body='>Clique aqui</a> para enviar sua pergunta por e-mail.");
        }
    }
}

// Adiciona o reconhecimento de fala
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

// Iniciar carregamento das vozes ao carregar a página
window.addEventListener('load', () => {
    loadVoices();
});

// Botão para iniciar a gravação
var recordButton = document.createElement("button");
recordButton.innerHTML = "Falar";
recordButton.classList.add("record-button");
recordButton.onclick = startRecognition;
document.body.appendChild(recordButton);
