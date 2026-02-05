const questions = [
    {
        id: 1,
        description: "Welche Teile ergeben das Quadrat?",
        target: "Ein vollständiges Quadrat",
        pieces: [
            { id: 'A', shape: '◤' },
            { id: 'B', shape: '◥' },
            { id: 'C', shape: '◢' },
            { id: 'D', shape: '◣' }
        ],
        correctCombination: ['A', 'B', 'C', 'D'],
        options: [
            "A, B, C, D",
            "A, B, C",
            "B, C, D",
            "A, C, D"
        ],
        correct: 0,
        explanation: "Alle vier Dreiecke werden benötigt, um ein vollständiges Quadrat zu bilden"
    },
    {
        id: 2,
        description: "Welche Teile bilden ein Rechteck?",
        target: "Ein Rechteck (doppelt so breit wie hoch)",
        pieces: [
            { id: 'A', shape: '▭' },
            { id: 'B', shape: '▭' },
            { id: 'C', shape: '◢' },
            { id: 'D', shape: '◤' }
        ],
        correctCombination: ['A', 'B'],
        options: [
            "A, B",
            "A, C, D",
            "B, C",
            "C, D"
        ],
        correct: 0,
        explanation: "Die beiden gleichen Rechtecke A und B ergeben zusammen das große Rechteck"
    },
    {
        id: 3,
        description: "Welche Teile bilden einen Kreis?",
        target: "Ein vollständiger Kreis",
        pieces: [
            { id: 'A', shape: '◔' },
            { id: 'B', shape: '◕' },
            { id: 'C', shape: '◐' },
            { id: 'D', shape: '◑' }
        ],
        correctCombination: ['A', 'B'],
        options: [
            "A, B",
            "C, D",
            "A, C",
            "B, D"
        ],
        correct: 0,
        explanation: "Die beiden Hälften A und B ergeben zusammen einen vollständigen Kreis"
    },
    {
        id: 4,
        description: "Welche Teile bilden ein Dreieck?",
        target: "Ein gleichseitiges Dreieck",
        pieces: [
            { id: 'A', shape: '▲' },
            { id: 'B', shape: '▼' },
            { id: 'C', shape: '◢' },
            { id: 'D', shape: '◣' }
        ],
        correctCombination: ['C', 'D'],
        options: [
            "A, B",
            "C, D",
            "A, C",
            "B, D"
        ],
        correct: 1,
        explanation: "Die beiden rechten Dreiecke C und D ergeben zusammen ein gleichseitiges Dreieck"
    },
    {
        id: 5,
        description: "Welche drei Teile bilden ein Sechseck?",
        target: "Ein regelmäßiges Sechseck",
        pieces: [
            { id: 'A', shape: '⬢' },
            { id: 'B', shape: '▱' },
            { id: 'C', shape: '▰' },
            { id: 'D', shape: '▬' }
        ],
        correctCombination: ['B', 'C', 'D'],
        options: [
            "A, B, C",
            "B, C, D",
            "A, C, D",
            "A, B, D"
        ],
        correct: 1,
        explanation: "Die drei Parallelogramme B, C und D bilden zusammen ein Sechseck"
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
            <div class="question-text">${question.description}</div>
            
            <div style="background: #f3f4f6; padding: 2rem; border-radius: 8px; margin: 1.5rem 0; text-align: center;">
                <strong>Ziel-Figur:</strong> ${question.target}
            </div>

            <div style="margin: 1.5rem 0;">
                <strong>Verfügbare Teile:</strong>
                <div class="figure-pieces" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 1rem;">
                    ${question.pieces.map(piece => `
                        <div style="padding: 1.5rem; background: white; border: 2px solid #e5e7eb; border-radius: 8px; text-align: center;">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">${piece.shape}</div>
                            <div style="font-weight: 600; color: #2563eb;">${piece.id}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div style="margin-top: 2rem;">
                <strong>Welche Kombination ist richtig?</strong>
            </div>

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
