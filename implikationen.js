const questions = [
    {
        id: 1,
        premise: "Alle Ärzte haben ein Medizinstudium abgeschlossen. Maria ist Ärztin.",
        question: "Was folgt daraus?",
        options: [
            "Maria hat ein Medizinstudium abgeschlossen",
            "Maria arbeitet im Krankenhaus",
            "Maria ist Chirurgin",
            "Maria mag ihren Beruf"
        ],
        correct: 0,
        explanation: "Aus 'Alle Ärzte haben ein Medizinstudium' und 'Maria ist Ärztin' folgt logisch, dass Maria ein Medizinstudium hat"
    },
    {
        id: 2,
        premise: "Wenn jemand Fieber hat, dann ist er krank. Peter ist krank.",
        question: "Was können wir daraus schließen?",
        options: [
            "Peter hat Fieber",
            "Peter hat definitiv kein Fieber",
            "Peter könnte Fieber haben, muss aber nicht",
            "Peter geht zum Arzt"
        ],
        correct: 2,
        explanation: "Aus 'krank sein' folgt nicht zwingend 'Fieber haben'. Man kann auch ohne Fieber krank sein"
    },
    {
        id: 3,
        premise: "Alle Chirurgen sind Ärzte. Kein Zahnarzt ist Chirurg.",
        question: "Was folgt daraus?",
        options: [
            "Kein Zahnarzt ist Arzt",
            "Alle Ärzte sind Chirurgen",
            "Einige Zahnärzte sind keine Ärzte",
            "Keine dieser Aussagen folgt zwingend"
        ],
        correct: 3,
        explanation: "Zahnärzte können durchaus Ärzte sein, auch wenn sie keine Chirurgen sind. Die Aussagen lassen dies offen"
    },
    {
        id: 4,
        premise: "Wenn eine Behandlung wirksam ist, wird der Patient gesund. Der Patient wurde gesund.",
        question: "Was können wir schlussfolgern?",
        options: [
            "Die Behandlung war definitiv wirksam",
            "Die Behandlung könnte wirksam gewesen sein",
            "Die Behandlung war nicht wirksam",
            "Der Patient hatte keine Behandlung"
        ],
        correct: 1,
        explanation: "Der Patient könnte auch ohne Behandlung oder durch andere Faktoren gesund geworden sein"
    },
    {
        id: 5,
        premise: "Alle Notfallpatienten werden sofort behandelt. Anna wurde sofort behandelt.",
        question: "Was folgt daraus?",
        options: [
            "Anna ist ein Notfallpatient",
            "Anna könnte ein Notfallpatient sein",
            "Anna ist kein Notfallpatient",
            "Anna hat lange gewartet"
        ],
        correct: 1,
        explanation: "Auch nicht-Notfallpatienten können sofort behandelt werden. Die Aussage 'könnte sein' ist am zutreffendsten"
    },
    {
        id: 6,
        premise: "Keine antibakterielle Behandlung hilft gegen Viren. Diese Krankheit wird durch Viren verursacht.",
        question: "Was können wir schließen?",
        options: [
            "Antibiotika helfen bei dieser Krankheit",
            "Antibiotika helfen nicht bei dieser Krankheit",
            "Die Krankheit ist unheilbar",
            "Die Krankheit ist harmlos"
        ],
        correct: 1,
        explanation: "Da die Krankheit durch Viren verursacht wird und antibakterielle Mittel nicht gegen Viren helfen, sind Antibiotika nicht wirksam"
    },
    {
        id: 7,
        premise: "Alle erfolgreichen Operationen erfordern präzise Planung. Diese Operation war erfolgreich.",
        question: "Was folgt daraus zwingend?",
        options: [
            "Die Operation war gut geplant",
            "Der Chirurg war erfahren",
            "Es gab keine Komplikationen",
            "Die Operation dauerte lange"
        ],
        correct: 0,
        explanation: "Aus 'Alle erfolgreichen OPs erfordern Planung' und 'Diese OP war erfolgreich' folgt: Sie war präzise geplant"
    },
    {
        id: 8,
        premise: "Wenn ein Medikament Nebenwirkungen hat, sollte der Arzt informiert werden. Dieses Medikament hat Nebenwirkungen.",
        question: "Was sollte geschehen?",
        options: [
            "Das Medikament sollte abgesetzt werden",
            "Der Arzt sollte informiert werden",
            "Die Dosis sollte erhöht werden",
            "Nichts, Nebenwirkungen sind normal"
        ],
        correct: 1,
        explanation: "Die Prämisse besagt eindeutig: Wenn Nebenwirkungen auftreten, sollte der Arzt informiert werden"
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function displayQuestion() {
    const question = questions[currentQuestion];
    const container = document.getElementById('question-container');
    
    container.innerHTML = `
        <div class="question-card">
            <div class="question-number">Frage ${currentQuestion + 1} von ${questions.length}</div>
            
            <div style="background: #f3f4f6; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; border-left: 4px solid #2563eb;">
                <strong style="color: #2563eb;">Prämisse:</strong>
                <p style="margin-top: 0.5rem; line-height: 1.6;">${question.premise}</p>
            </div>

            <div class="question-text">${question.question}</div>
            
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option" data-index="${index}">
                        ${option}
                    </div>
                `).join('')}
            </div>
            <div id="explanation" style="margin-top: 1.5rem; padding: 1rem; background: #eff6ff; border-radius: 8px; display: none;">
                <strong>Erklärung:</strong> <span id="explanation-text"></span>
            </div>
        </div>
    `;

    // Add click handlers to options
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            if (!answered) {
                document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
            }
        });
    });
}

document.getElementById('check-btn').addEventListener('click', () => {
    if (answered) return;

    const selectedOption = document.querySelector('.option.selected');
    if (!selectedOption) {
        alert('Bitte wähle eine Antwort aus!');
        return;
    }

    answered = true;
    const selectedIndex = parseInt(selectedOption.dataset.index);
    const question = questions[currentQuestion];

    // Show correct/incorrect
    document.querySelectorAll('.option').forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex && selectedIndex !== question.correct) {
            option.classList.add('incorrect');
        }
        option.style.pointerEvents = 'none';
    });

    // Show explanation
    document.getElementById('explanation').style.display = 'block';
    document.getElementById('explanation-text').textContent = question.explanation;

    if (selectedIndex === question.correct) {
        score++;
    }

    // Show next button or results
    document.getElementById('check-btn').style.display = 'none';
    if (currentQuestion < questions.length - 1) {
        document.getElementById('next-btn').style.display = 'inline-block';
    } else {
        showResults();
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestion++;
    answered = false;
    document.getElementById('check-btn').style.display = 'inline-block';
    document.getElementById('next-btn').style.display = 'none';
    displayQuestion();
});

function showResults() {
    const percentage = Math.round((score / questions.length) * 100);
    const resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = `
        <div class="results-card">
            <h2>Ergebnis</h2>
            <div class="score">${score} / ${questions.length}</div>
            <p style="font-size: 1.3rem;">${percentage}% richtig</p>
            <button class="btn btn-primary" onclick="location.reload()" style="margin-top: 1.5rem; background: white; color: #10b981;">
                Nochmal üben
            </button>
            <a href="index.html" class="btn btn-secondary" style="margin-top: 1rem; display: inline-block; text-decoration: none;">
                Zur Startseite
            </a>
        </div>
    `;
    
    resultsDiv.style.display = 'block';
}

// Initialize
displayQuestion();
