const questions = [
    {
        id: 1,
        sequence: "2, 4, 6, 8, ?",
        options: ["9", "10", "11", "12"],
        correct: 3,
        explanation: "Die Zahlen erhöhen sich jeweils um 2"
    },
    {
        id: 2,
        sequence: "1, 1, 2, 3, 5, 8, ?",
        options: ["11", "12", "13", "14"],
        correct: 2,
        explanation: "Fibonacci-Folge: Jede Zahl ist die Summe der beiden vorigen"
    },
    {
        id: 3,
        sequence: "100, 90, 80, 70, ?",
        options: ["55", "60", "65", "50"],
        correct: 1,
        explanation: "Die Zahlen verringern sich jeweils um 10"
    },
    {
        id: 4,
        sequence: "3, 6, 12, 24, ?",
        options: ["36", "42", "48", "52"],
        correct: 2,
        explanation: "Jede Zahl wird verdoppelt"
    },
    {
        id: 5,
        sequence: "5, 10, 20, 40, ?",
        options: ["60", "70", "80", "90"],
        correct: 2,
        explanation: "Jede Zahl wird verdoppelt"
    },
    {
        id: 6,
        sequence: "1, 4, 9, 16, 25, ?",
        options: ["30", "32", "36", "40"],
        correct: 2,
        explanation: "Quadratzahlen: 1², 2², 3², 4², 5², 6²"
    },
    {
        id: 7,
        sequence: "2, 6, 12, 20, 30, ?",
        options: ["38", "40", "42", "44"],
        correct: 2,
        explanation: "Differenzen: +4, +6, +8, +10, +12"
    },
    {
        id: 8,
        sequence: "81, 27, 9, 3, ?",
        options: ["0", "1", "2", "3"],
        correct: 1,
        explanation: "Jede Zahl wird durch 3 geteilt"
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
            <div class="question-text">${question.sequence}</div>
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
