const memoryContent = {
    text: `
        <h3 style="color: #2563eb; margin-bottom: 1rem;">Patienteninformation</h3>
        <div style="line-height: 1.8; font-size: 1.1rem;">
            <p><strong>Name:</strong> Dr. Anna Müller</p>
            <p><strong>Geburtsdatum:</strong> 15. März 1985</p>
            <p><strong>Fachgebiet:</strong> Kardiologie</p>
            <p><strong>Krankenhaus:</strong> Universitätsklinik Wien</p>
            <p><strong>Telefon:</strong> +43 1 234 5678</p>
            <p><strong>Sprechzeiten:</strong> Montag bis Freitag, 9:00 - 17:00 Uhr</p>
            <br>
            <p><strong>Behandlungsschwerpunkte:</strong></p>
            <ul style="margin-left: 2rem;">
                <li>Herzrhythmusstörungen</li>
                <li>Koronare Herzkrankheit</li>
                <li>Herzinsuffizienz</li>
                <li>Präventive Kardiologie</li>
            </ul>
            <br>
            <p><strong>Ausbildung:</strong> Medizinstudium an der Medizinischen Universität Wien (2003-2009), 
            Facharztausbildung Innere Medizin und Kardiologie (2010-2016)</p>
            <br>
            <p><strong>Zusatzqualifikationen:</strong> Notarzt, Intensivmedizin, Echokardiographie</p>
        </div>
    `
};

const questions = [
    {
        id: 1,
        question: "Wie lautet der Nachname der Ärztin?",
        options: ["Meyer", "Müller", "Schmidt", "Wagner"],
        correct: 1
    },
    {
        id: 2,
        question: "In welchem Fachgebiet ist Dr. Müller tätig?",
        options: ["Neurologie", "Orthopädie", "Kardiologie", "Dermatologie"],
        correct: 2
    },
    {
        id: 3,
        question: "In welchem Jahr hat Dr. Müller ihr Medizinstudium begonnen?",
        options: ["2001", "2003", "2005", "2007"],
        correct: 1
    },
    {
        id: 4,
        question: "An welcher Klinik arbeitet Dr. Müller?",
        options: ["AKH Wien", "Universitätsklinik Wien", "Krankenhaus Nord", "Klinik Favoriten"],
        correct: 1
    },
    {
        id: 5,
        question: "Welcher Behandlungsschwerpunkt wird NICHT genannt?",
        options: ["Herzrhythmusstörungen", "Herzklappenfehler", "Herzinsuffizienz", "Koronare Herzkrankheit"],
        correct: 1
    },
    {
        id: 6,
        question: "Bis wann dauern die Sprechzeiten an Werktagen?",
        options: ["16:00 Uhr", "17:00 Uhr", "18:00 Uhr", "19:00 Uhr"],
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
            document.getElementById('memory-content').innerHTML = '<p style="text-align: center; font-size: 1.2rem; color: #6b7280;">Die Lernzeit ist abgelaufen. Klicke auf "Weiter", um mit den Fragen zu beginnen.</p>';
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
            <button class="btn btn-primary" onclick="location.reload()" style="margin-top: 1.5rem; background: white; color: #10b981;">
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
