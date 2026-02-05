const questions = [
    {
        id: 1,
        question: "Welches Wort passt NICHT zu den anderen?",
        words: ["Löffel", "Gabel", "Messer", "Teller"],
        options: ["Löffel", "Gabel", "Messer", "Teller"],
        correct: 3,
        explanation: "Löffel, Gabel und Messer sind Besteck - Teller ist Geschirr"
    },
    {
        id: 2,
        question: "Welches Wort passt am besten zu: Lehrer - Schüler?",
        options: ["Trainer - Sportler", "Buch - Seite", "Auto - Straße", "Haus - Dach"],
        correct: 0,
        explanation: "Beide Paare beschreiben eine Lehr-/Trainingsbeziehung"
    },
    {
        id: 3,
        question: "Welches Wort ist das Gegenteil von 'schnell'?",
        options: ["langsam", "klein", "groß", "hell"],
        correct: 0,
        explanation: "Schnell und langsam sind Antonyme (Gegensätze)"
    },
    {
        id: 4,
        question: "Welches Wort passt NICHT in die Gruppe?",
        words: ["Stuhl", "Tisch", "Sofa", "Apfel"],
        options: ["Stuhl", "Tisch", "Sofa", "Apfel"],
        correct: 3,
        explanation: "Stuhl, Tisch und Sofa sind Möbelstücke - Apfel ist eine Frucht"
    },
    {
        id: 5,
        question: "Vervollständige die Analogie: Buch : Lesen = Musik : ?",
        options: ["Sehen", "Hören", "Schmecken", "Riechen"],
        correct: 1,
        explanation: "Ein Buch wird gelesen, Musik wird gehört"
    },
    {
        id: 6,
        question: "Welches Wort ist ein Synonym für 'groß'?",
        options: ["riesig", "klein", "mittel", "eng"],
        correct: 0,
        explanation: "Groß und riesig haben eine ähnliche Bedeutung"
    },
    {
        id: 7,
        question: "Welches Wort gehört NICHT zur Gruppe?",
        words: ["Rot", "Blau", "Grün", "Kreis"],
        options: ["Rot", "Blau", "Grün", "Kreis"],
        correct: 3,
        explanation: "Rot, Blau und Grün sind Farben - Kreis ist eine Form"
    },
    {
        id: 8,
        question: "Welches Wort vervollständigt die Reihe: Winter - Frühling - Sommer - ?",
        options: ["Herbst", "Januar", "Kalt", "Jahr"],
        correct: 0,
        explanation: "Die Jahreszeiten in ihrer natürlichen Reihenfolge"
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function displayQuestion() {
    const question = questions[currentQuestion];
    const container = document.getElementById('question-container');
    
    let questionHTML = `
        <div class="question-card">
            <div class="question-number">Frage ${currentQuestion + 1} von ${questions.length}</div>
            <div class="question-text">${question.question}</div>
    `;

    // Show word group if exists
    if (question.words) {
        questionHTML += `
            <div style="display: flex; gap: 1rem; justify-content: center; margin: 1.5rem 0; flex-wrap: wrap;">
                ${question.words.map(word => `
                    <div style="padding: 1rem 1.5rem; background: #1e293b; border: 1px solid #334155; border-radius: 8px; font-weight: 600;">
                        ${word}
                    </div>
                `).join('')}
            </div>
        `;
    }

    questionHTML += `
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
    
    container.innerHTML = questionHTML;

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
