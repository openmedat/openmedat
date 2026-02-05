const memoryContent = {
    text: `
        <h3 style="color: #60a5fa; margin-bottom: 1rem;">Beispielinhalt zum Merken</h3>
        <div style="line-height: 1.8; font-size: 1.1rem;">
            <p><strong>Kategorie:</strong> Städte und Zahlen</p>
            <p><strong>Stadt 1:</strong> Wien - 1897</p>
            <p><strong>Stadt 2:</strong> Berlin - 1652</p>
            <p><strong>Stadt 3:</strong> Paris - 1243</p>
            <p><strong>Stadt 4:</strong> London - 1586</p>
            <p><strong>Stadt 5:</strong> Rom - 1974</p>
            <br>
            <p><strong>Farben:</strong></p>
            <ul style="margin-left: 2rem;">
                <li>Wien: Blau</li>
                <li>Berlin: Grün</li>
                <li>Paris: Rot</li>
                <li>London: Gelb</li>
                <li>Rom: Orange</li>
            </ul>
            <br>
            <p><strong>Symbole:</strong> Wien (★), Berlin (●), Paris (■), London (▲), Rom (◆)</p>
            <br>
            <p><strong>Hinweis:</strong> Dies ist ein Beispiel für die Gedächtnis- und Merkfähigkeitsaufgaben. 
            Im echten MEDAT werden Informationen zu merken sein, die später abgefragt werden.</p>
        </div>
    `
};

const questions = [
    {
        id: 1,
        question: "Welche Zahl ist Wien zugeordnet?",
        options: ["1652", "1897", "1243", "1586"],
        correct: 1
    },
    {
        id: 2,
        question: "Welche Farbe hat Berlin?",
        options: ["Blau", "Rot", "Grün", "Gelb"],
        correct: 2
    },
    {
        id: 3,
        question: "Welches Symbol gehört zu Paris?",
        options: ["★", "●", "■", "▲"],
        correct: 2
    },
    {
        id: 4,
        question: "Welche Stadt hat die Zahl 1586?",
        options: ["Wien", "Berlin", "Paris", "London"],
        correct: 3
    },
    {
        id: 5,
        question: "Welche Farbe hat Rom?",
        options: ["Gelb", "Orange", "Blau", "Rot"],
        correct: 1
    },
    {
        id: 6,
        question: "Welche Stadt hat das Symbol ●?",
        options: ["Wien", "Berlin", "Paris", "Rom"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;
let timerInterval;

document.getElementById('start-btn').addEventListener('click', () => {
    // Show memory content
    document.getElementById('memory-content').innerHTML = memoryContent.text;
    document.getElementById('start-btn').style.display = 'none';
    
    // Start timer
    let timeLeft = 60;
    const timerDisplay = document.getElementById('timer');
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('memory-content').innerHTML = '<p style="text-align: center; font-size: 1.2rem; color: #94a3b8;">Die Lernzeit ist abgelaufen. Klicke auf "Weiter", um mit den Fragen zu beginnen.</p>';
            document.getElementById('timer').style.display = 'none';
            document.getElementById('continue-btn').style.display = 'inline-block';
        }
    }, 1000);
});

document.getElementById('continue-btn').addEventListener('click', () => {
    document.getElementById('memorize-phase').style.display = 'none';
    document.getElementById('question-phase').style.display = 'block';
    displayQuestion();
});

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
    document.getElementById('question-phase').style.display = 'none';
}
