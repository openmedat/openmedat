const textContent = `
Die Genetik spielt eine zentrale Rolle in der modernen Medizin. Die DNA, 
die Desoxyribonukleinsäure, ist der Träger der Erbinformation in allen lebenden 
Organismen. Sie besteht aus vier Basen: Adenin (A), Thymin (T), Guanin (G) und 
Cytosin (C). Diese Basen paaren sich nach einem festen Schema: Adenin mit Thymin 
und Guanin mit Cytosin.

Die Entdeckung der DNA-Struktur durch Watson und Crick im Jahr 1953 revolutionierte 
die Biologie und Medizin. Heute ermöglicht die Gentechnik nicht nur die Diagnose 
erblicher Krankheiten, sondern auch deren potenzielle Behandlung durch Gentherapie. 
Ein wichtiges Beispiel ist die Sichelzellenanämie, eine Erbkrankheit, die durch eine 
Mutation im Gen für Hämoglobin verursacht wird.

In der personalisierten Medizin werden genetische Informationen genutzt, um Behandlungen 
individuell anzupassen. Pharmakogenetik untersucht, wie genetische Variationen die 
Wirkung von Medikamenten beeinflussen. Dies kann erklären, warum manche Patienten 
auf bestimmte Medikamente gut ansprechen, während andere Nebenwirkungen erleiden.

Die ethischen Fragen rund um die Gentechnik sind komplex. Während die Möglichkeit, 
Krankheiten zu heilen, verlockend ist, gibt es Bedenken bezüglich des Datenschutzes 
und der möglichen Diskriminierung aufgrund genetischer Informationen. Die Gesellschaft 
muss einen verantwortungsvollen Umgang mit diesen neuen Technologien finden.
`;

const questions = [
    {
        id: 1,
        question: "In welchem Jahr wurde die DNA-Struktur von Watson und Crick entdeckt?",
        options: ["1943", "1953", "1963", "1973"],
        correct: 1,
        explanation: "Die DNA-Struktur wurde 1953 entdeckt, wie im Text erwähnt"
    },
    {
        id: 2,
        question: "Welche Base paart sich mit Adenin?",
        options: ["Guanin", "Cytosin", "Thymin", "Uracil"],
        correct: 2,
        explanation: "Laut Text paart sich Adenin mit Thymin"
    },
    {
        id: 3,
        question: "Was ist Sichelzellenanämie?",
        options: [
            "Eine virale Infektion",
            "Eine Erbkrankheit durch Hämoglobin-Mutation",
            "Eine bakterielle Erkrankung",
            "Eine Autoimmunerkrankung"
        ],
        correct: 1,
        explanation: "Der Text beschreibt Sichelzellenanämie als Erbkrankheit durch Mutation im Hämoglobin-Gen"
    },
    {
        id: 4,
        question: "Was untersucht die Pharmakogenetik?",
        options: [
            "Die Herstellung von Medikamenten",
            "Die Entwicklung neuer Therapien",
            "Wie Gene die Medikamentenwirkung beeinflussen",
            "Die Geschichte der Pharmazie"
        ],
        correct: 2,
        explanation: "Pharmakogenetik untersucht laut Text, wie genetische Variationen die Medikamentenwirkung beeinflussen"
    },
    {
        id: 5,
        question: "Welche ethische Sorge wird im Text erwähnt?",
        options: [
            "Kosten der Behandlung",
            "Datenschutz und genetische Diskriminierung",
            "Verfügbarkeit von Medikamenten",
            "Ausbildung von Ärzten"
        ],
        correct: 1,
        explanation: "Der Text nennt Bedenken bezüglich Datenschutz und möglicher Diskriminierung"
    },
    {
        id: 6,
        question: "Wofür steht 'DNA'?",
        options: [
            "Deoxyribose Nucleic Acid",
            "Desoxyribonukleinsäure",
            "Dynamic Nuclear Analysis",
            "Digital Network Access"
        ],
        correct: 1,
        explanation: "Im Text wird DNA als Desoxyribonukleinsäure bezeichnet"
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
