const questions = [
    {
        id: 1,
        premise: "Alle Studenten haben eine Matrikelnummer. Max ist Student.",
        question: "Was folgt daraus?",
        options: [
            "Max hat eine Matrikelnummer",
            "Max studiert Medizin",
            "Max ist fleißig",
            "Max geht zur Universität"
        ],
        correct: 0,
        explanation: "Aus 'Alle Studenten haben eine Matrikelnummer' und 'Max ist Student' folgt logisch, dass Max eine Matrikelnummer hat"
    },
    {
        id: 2,
        premise: "Wenn es regnet, ist die Straße nass. Die Straße ist nass.",
        question: "Was können wir daraus schließen?",
        options: [
            "Es regnet definitiv",
            "Es hat definitiv nicht geregnet",
            "Es könnte geregnet haben, muss aber nicht",
            "Die Straße ist trocken"
        ],
        correct: 2,
        explanation: "Aus 'nasse Straße' folgt nicht zwingend 'Regen'. Die Straße kann auch auf andere Weise nass geworden sein"
    },
    {
        id: 3,
        premise: "Alle Katzen sind Tiere. Kein Hund ist eine Katze.",
        question: "Was folgt daraus?",
        options: [
            "Kein Hund ist ein Tier",
            "Alle Tiere sind Katzen",
            "Einige Hunde sind keine Tiere",
            "Keine dieser Aussagen folgt zwingend"
        ],
        correct: 3,
        explanation: "Hunde können durchaus Tiere sein, auch wenn sie keine Katzen sind. Die Aussagen lassen dies offen"
    },
    {
        id: 4,
        premise: "Wenn ein Test schwierig ist, braucht man viel Zeit. Man braucht viel Zeit.",
        question: "Was können wir schlussfolgern?",
        options: [
            "Der Test ist definitiv schwierig",
            "Der Test könnte schwierig sein",
            "Der Test ist nicht schwierig",
            "Man braucht keine Zeit"
        ],
        correct: 1,
        explanation: "Man könnte auch aus anderen Gründen viel Zeit brauchen, nicht nur wegen eines schwierigen Tests"
    },
    {
        id: 5,
        premise: "Alle Teilnehmer bekommen eine Urkunde. Anna hat eine Urkunde bekommen.",
        question: "Was folgt daraus?",
        options: [
            "Anna ist Teilnehmerin",
            "Anna könnte Teilnehmerin sein",
            "Anna ist keine Teilnehmerin",
            "Anna hat gewonnen"
        ],
        correct: 1,
        explanation: "Auch Nicht-Teilnehmer könnten eine Urkunde bekommen. Die Aussage 'könnte sein' ist am zutreffendsten"
    },
    {
        id: 6,
        premise: "Keine Zimmerpflanze wächst ohne Licht. Diese Pflanze bekommt kein Licht.",
        question: "Was können wir schließen?",
        options: [
            "Die Pflanze wächst gut",
            "Die Pflanze wächst nicht",
            "Die Pflanze ist eine Outdoor-Pflanze",
            "Die Pflanze braucht kein Licht"
        ],
        correct: 1,
        explanation: "Da keine Zimmerpflanze ohne Licht wächst und diese Pflanze kein Licht bekommt, kann sie nicht wachsen"
    },
    {
        id: 7,
        premise: "Alle erfolgreichen Projekte erfordern gute Planung. Dieses Projekt war erfolgreich.",
        question: "Was folgt daraus zwingend?",
        options: [
            "Das Projekt war gut geplant",
            "Das Team war groß",
            "Es gab keine Probleme",
            "Das Projekt dauerte lange"
        ],
        correct: 0,
        explanation: "Aus 'Alle erfolgreichen Projekte erfordern Planung' und 'Dieses Projekt war erfolgreich' folgt: Es war gut geplant"
    },
    {
        id: 8,
        premise: "Wenn ein Buch interessant ist, wird es oft gelesen. Dieses Buch ist interessant.",
        question: "Was sollte geschehen?",
        options: [
            "Das Buch sollte verliehen werden",
            "Das Buch wird oft gelesen",
            "Das Buch sollte neu aufgelegt werden",
            "Das Buch ist teuer"
        ],
        correct: 1,
        explanation: "Die Prämisse besagt eindeutig: Wenn ein Buch interessant ist, wird es oft gelesen"
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
            
            <div style="background: #1e3a8a; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; border-left: 4px solid #3b82f6;">
                <strong style="color: #60a5fa;">Prämisse:</strong>
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
            <div id="explanation" style="margin-top: 1.5rem; padding: 1rem; background: #1e3a8a; border: 1px solid #3b82f6; border-radius: 8px; display: none; color: #e5e7eb;">
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
            <button class="btn btn-primary" onclick="location.reload()" style="margin-top: 1.5rem; background: #3b82f6; color: #ffffff;">
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
