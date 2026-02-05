const textContent = `
Der folgende Text dient als Beispiel für Textverständnisaufgaben. In der echten MEDAT-Prüfung 
werden Texte zu verschiedenen wissenschaftlichen und allgemeinen Themen gestellt.

Die Texte können unterschiedliche Längen und Schwierigkeitsgrade aufweisen. Wichtig ist es, 
die Kernaussagen zu erfassen und die Zusammenhänge im Text zu verstehen. Neben dem reinen 
Textverständnis wird auch die Fähigkeit geprüft, Implikationen zu erkennen und Schlussfolgerungen 
aus dem Gelesenen zu ziehen.

Bei der Bearbeitung sollte systematisch vorgegangen werden: Zunächst den Text aufmerksam lesen, 
dann die Fragen studieren und schließlich die relevanten Textstellen nochmals genau durchgehen. 
Zeitmanagement spielt eine wichtige Rolle, da mehrere Texte in begrenzter Zeit bearbeitet werden müssen.
`;

const questions = [
    {
        id: 1,
        question: "Welche Fähigkeit wird NICHT im Text erwähnt?",
        options: ["Kernaussagen erfassen", "Zusammenhänge verstehen", "Mathematische Berechnungen", "Implikationen erkennen"],
        correct: 2,
        explanation: "Mathematische Berechnungen werden im Text nicht erwähnt"
    },
    {
        id: 2,
        question: "Was wird im Text als wichtig für die Bearbeitung genannt?",
        options: ["Schnelles Lesen", "Systematisches Vorgehen", "Auswendiglernen", "Raten"],
        correct: 1,
        explanation: "Der Text betont die Wichtigkeit eines systematischen Vorgehens"
    },
    {
        id: 3,
        question: "Welche Rolle spielt Zeitmanagement laut Text?",
        options: [
            "Keine Rolle",
            "Eine unwichtige Rolle",
            "Eine wichtige Rolle",
            "Die einzige wichtige Rolle"
        ],
        correct: 2,
        explanation: "Der Text sagt explizit, dass Zeitmanagement eine wichtige Rolle spielt"
    },
    {
        id: 4,
        question: "Was sollte nach dem ersten Lesen erfolgen?",
        options: [
            "Den Text nochmals komplett lesen",
            "Die Fragen studieren",
            "Sofort antworten",
            "Eine Pause machen"
        ],
        correct: 1,
        explanation: "Laut Text sollten nach dem Lesen die Fragen studiert werden"
    },
    {
        id: 5,
        question: "Welche Eigenschaft der Texte wird erwähnt?",
        options: [
            "Alle Texte sind gleich lang",
            "Unterschiedliche Längen und Schwierigkeitsgrade",
            "Nur wissenschaftliche Themen",
            "Immer dieselben Themen"
        ],
        correct: 1,
        explanation: "Der Text erwähnt explizit unterschiedliche Längen und Schwierigkeitsgrade"
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

// Display text
document.getElementById('text-content').innerHTML = textContent;

function displayQuestion() {
    const question = questions[currentQuestion];
    const container = document.getElementById('question-container');
    
    container.innerHTML = `
        <div class="question-card">
            <div class="question-number">Frage ${currentQuestion + 1} von ${questions.length}</div>
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
