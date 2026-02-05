// Fisher-Yates Shuffle
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

const questionsPool = [
    {
        id: 1,
        scrambled: "LBREE",
        question: "Welches Wort ergibt sich aus den Buchstaben: LBREE?",
        options: ["A) Das Wort beginnt mit L", "B) Das Wort beginnt mit B", "C) Das Wort beginnt mit E", "D) Das Wort beginnt mit R", "E) Keiner der Angaben stimmt"],
        correct: 0,
        explanation: "LEBER - Das Wort beginnt mit L"
    },
    {
        id: 2,
        scrambled: "EIRNEN",
        question: "Welches Wort ergibt sich aus den Buchstaben: EIRNEN?",
        options: ["A) Das Wort beginnt mit E", "B) Das Wort beginnt mit I", "C) Das Wort beginnt mit N", "D) Das Wort beginnt mit R", "E) Keiner der Angaben stimmt"],
        correct: 2,
        explanation: "NIEREN - Das Wort beginnt mit N"
    },
    {
        id: 3,
        scrambled: "ENGLU",
        question: "Welches Wort ergibt sich aus den Buchstaben: ENGLU?",
        options: ["A) Das Wort beginnt mit E", "B) Das Wort beginnt mit L", "C) Das Wort beginnt mit G", "D) Das Wort beginnt mit U", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "LUNGE - Das Wort beginnt mit L"
    },
    {
        id: 4,
        scrambled: "LEZEL",
        question: "Welches Wort ergibt sich aus den Buchstaben: LEZEL?",
        options: ["A) Das Wort beginnt mit L", "B) Das Wort beginnt mit Z", "C) Das Wort beginnt mit E", "D) Das Wort beginnt mit ZE", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "ZELLE - Das Wort beginnt mit Z"
    },
    {
        id: 5,
        scrambled: "MYNZE",
        question: "Welches Wort ergibt sich aus den Buchstaben: MYNZE?",
        options: ["A) Das Wort beginnt mit M", "B) Das Wort beginnt mit E", "C) Das Wort beginnt mit Z", "D) Das Wort beginnt mit N", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "ENZYM - Das Wort beginnt mit E"
    },
    {
        id: 6,
        scrambled: "ROONMH",
        question: "Welches Wort ergibt sich aus den Buchstaben: ROONMH?",
        options: ["A) Das Wort beginnt mit R", "B) Das Wort beginnt mit H", "C) Das Wort beginnt mit M", "D) Das Wort beginnt mit N", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "HORMON - Das Wort beginnt mit H"
    },
    {
        id: 7,
        scrambled: "NTIOPER",
        question: "Welches Wort ergibt sich aus den Buchstaben: NTIOPER?",
        options: ["A) Das Wort beginnt mit N", "B) Das Wort beginnt mit P", "C) Das Wort beginnt mit T", "D) Das Wort beginnt mit I", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "PROTEIN - Das Wort beginnt mit P"
    },
    {
        id: 8,
        scrambled: "LUNNISI",
        question: "Welches Wort ergibt sich aus den Buchstaben: LUNNISI?",
        options: ["A) Das Wort beginnt mit L", "B) Das Wort beginnt mit I", "C) Das Wort beginnt mit N", "D) Das Wort beginnt mit S", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "INSULIN - Das Wort beginnt mit I"
    },
    {
        id: 9,
        scrambled: "NRUENO",
        question: "Welches Wort ergibt sich aus den Buchstaben: NRUENO?",
        options: ["A) Das Wort beginnt mit R", "B) Das Wort beginnt mit N", "C) Das Wort beginnt mit E", "D) Das Wort beginnt mit U", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "NEURON - Das Wort beginnt mit N"
    },
    {
        id: 10,
        scrambled: "YAENSSP",
        question: "Welches Wort ergibt sich aus den Buchstaben: YAENSSP?",
        options: ["A) Das Wort beginnt mit Y", "B) Das Wort beginnt mit S", "C) Das Wort beginnt mit E", "D) Das Wort beginnt mit P", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "SYNAPSE - Das Wort beginnt mit S"
    },
    {
        id: 11,
        scrambled: "RIETRAE",
        question: "Welches Wort ergibt sich aus den Buchstaben: RIETRAE?",
        options: ["A) Das Wort beginnt mit R", "B) Das Wort beginnt mit A", "C) Das Wort beginnt mit I", "D) Das Wort beginnt mit T", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "ARTERIE - Das Wort beginnt mit A"
    },
    {
        id: 12,
        scrambled: "NIHGRE",
        question: "Welches Wort ergibt sich aus den Buchstaben: NIHGRE?",
        options: ["A) Das Wort beginnt mit N", "B) Das Wort beginnt mit G", "C) Das Wort beginnt mit H", "D) Das Wort beginnt mit I", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "GEHIRN - Das Wort beginnt mit G"
    },
    {
        id: 13,
        scrambled: "CNOKENH",
        question: "Welches Wort ergibt sich aus den Buchstaben: CNOKENH?",
        options: ["A) Das Wort beginnt mit C", "B) Das Wort beginnt mit K", "C) Das Wort beginnt mit N", "D) Das Wort beginnt mit O", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "KNOCHEN - Das Wort beginnt mit K"
    },
    {
        id: 14,
        scrambled: "LUKEMS",
        question: "Welches Wort ergibt sich aus den Buchstaben: LUKEMS?",
        options: ["A) Das Wort beginnt mit L", "B) Das Wort beginnt mit M", "C) Das Wort beginnt mit K", "D) Das Wort beginnt mit U", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "MUSKEL - Das Wort beginnt mit M"
    },
    {
        id: 15,
        scrambled: "EWGEEB",
        question: "Welches Wort ergibt sich aus den Buchstaben: EWGEEB?",
        options: ["A) Das Wort beginnt mit E", "B) Das Wort beginnt mit G", "C) Das Wort beginnt mit W", "D) Das Wort beginnt mit B", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "GEWEBE - Das Wort beginnt mit G"
    },
    {
        id: 16,
        scrambled: "NBMREAN",
        question: "Welches Wort ergibt sich aus den Buchstaben: NBMREAN?",
        options: ["A) Das Wort beginnt mit N", "B) Das Wort beginnt mit M", "C) Das Wort beginnt mit B", "D) Das Wort beginnt mit R", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "MEMBRAN - Das Wort beginnt mit M"
    },
    {
        id: 17,
        scrambled: "MOOSIRB",
        question: "Welches Wort ergibt sich aus den Buchstaben: MOOSIRB?",
        options: ["A) Das Wort beginnt mit M", "B) Das Wort beginnt mit R", "C) Das Wort beginnt mit O", "D) Das Wort beginnt mit I", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "RIBOSOM - Das Wort beginnt mit R"
    },
    {
        id: 18,
        scrambled: "RNELLZKE",
        question: "Welches Wort ergibt sich aus den Buchstaben: RNELLZKE?",
        options: ["A) Das Wort beginnt mit R", "B) Das Wort beginnt mit Z", "C) Das Wort beginnt mit L", "D) Das Wort beginnt mit N", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "ZELLKERN - Das Wort beginnt mit Z"
    },
    {
        id: 19,
        scrambled: "TOEMIS",
        question: "Welches Wort ergibt sich aus den Buchstaben: TOEMIS?",
        options: ["A) Das Wort beginnt mit T", "B) Das Wort beginnt mit M", "C) Das Wort beginnt mit O", "D) Das Wort beginnt mit S", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "MITOSE - Das Wort beginnt mit M"
    },
    {
        id: 20,
        scrambled: "ESOEIM",
        question: "Welches Wort ergibt sich aus den Buchstaben: ESOEIM?",
        options: ["A) Das Wort beginnt mit E", "B) Das Wort beginnt mit M", "C) Das Wort beginnt mit S", "D) Das Wort beginnt mit O", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "MEIOSE - Das Wort beginnt mit M"
    },
    {
        id: 21,
        scrambled: "OMESSO",
        question: "Welches Wort ergibt sich aus den Buchstaben: OMESSO?",
        options: ["A) Das Wort beginnt mit M", "B) Das Wort beginnt mit O", "C) Das Wort beginnt mit E", "D) Das Wort beginnt mit S", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "OSMOSE - Das Wort beginnt mit O"
    },
    {
        id: 22,
        scrambled: "NTGAINE",
        question: "Welches Wort ergibt sich aus den Buchstaben: NTGAINE?",
        options: ["A) Das Wort beginnt mit N", "B) Das Wort beginnt mit A", "C) Das Wort beginnt mit T", "D) Das Wort beginnt mit G", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "ANTIGEN - Das Wort beginnt mit A"
    },
    {
        id: 23,
        scrambled: "TAOMUNTI",
        question: "Welches Wort ergibt sich aus den Buchstaben: TAOMUNTI?",
        options: ["A) Das Wort beginnt mit T", "B) Das Wort beginnt mit M", "C) Das Wort beginnt mit A", "D) Das Wort beginnt mit U", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "MUTATION - Das Wort beginnt mit M"
    },
    {
        id: 24,
        scrambled: "OUVNOTEIL",
        question: "Welches Wort ergibt sich aus den Buchstaben: OUVNOTEIL?",
        options: ["A) Das Wort beginnt mit O", "B) Das Wort beginnt mit E", "C) Das Wort beginnt mit V", "D) Das Wort beginnt mit U", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "EVOLUTION - Das Wort beginnt mit E"
    },
    {
        id: 25,
        scrambled: "LKEETTS",
        question: "Welches Wort ergibt sich aus den Buchstaben: LKEETTS?",
        options: ["A) Das Wort beginnt mit L", "B) Das Wort beginnt mit S", "C) Das Wort beginnt mit K", "D) Das Wort beginnt mit T", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "SKELETT - Das Wort beginnt mit S"
    },
    {
        id: 26,
        scrambled: "IEASBDET",
        question: "Welches Wort ergibt sich aus den Buchstaben: IEASBDET?",
        options: ["A) Das Wort beginnt mit I", "B) Das Wort beginnt mit D", "C) Das Wort beginnt mit E", "D) Das Wort beginnt mit A", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "DIABETES - Das Wort beginnt mit D"
    },
    {
        id: 27,
        scrambled: "UTIERBAUK",
        question: "Welches Wort ergibt sich aus den Buchstaben: UTIERBAUK?",
        options: ["A) Das Wort beginnt mit U", "B) Das Wort beginnt mit B", "C) Das Wort beginnt mit T", "D) Das Wort beginnt mit I", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "BAKTERIUM - Das Wort beginnt mit B"
    },
    {
        id: 28,
        scrambled: "RTYEZORHTY",
        question: "Welches Wort ergibt sich aus den Buchstaben: RTYEZORHTY?",
        options: ["A) Das Wort beginnt mit R", "B) Das Wort beginnt mit E", "C) Das Wort beginnt mit T", "D) Das Wort beginnt mit Y", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "ERYTHROZYT - Das Wort beginnt mit E"
    },
    {
        id: 29,
        scrambled: "TKEUOZLY",
        question: "Welches Wort ergibt sich aus den Buchstaben: TKEUOZLY?",
        options: ["A) Das Wort beginnt mit T", "B) Das Wort beginnt mit L", "C) Das Wort beginnt mit K", "D) Das Wort beginnt mit E", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "LEUKOZYT - Das Wort beginnt mit L"
    },
    {
        id: 30,
        scrambled: "ZTOTHYBROM",
        question: "Welches Wort ergibt sich aus den Buchstaben: ZTOTHYBROM?",
        options: ["A) Das Wort beginnt mit Z", "B) Das Wort beginnt mit T", "C) Das Wort beginnt mit O", "D) Das Wort beginnt mit H", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "THROMBOZYT - Das Wort beginnt mit T"
    },
    {
        id: 31,
        scrambled: "MGIOLOÄBNH",
        question: "Welches Wort ergibt sich aus den Buchstaben: MGIOLOÄBNH?",
        options: ["A) Das Wort beginnt mit M", "B) Das Wort beginnt mit H", "C) Das Wort beginnt mit G", "D) Das Wort beginnt mit I", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "HÄMOGLOBIN - Das Wort beginnt mit H"
    },
    {
        id: 32,
        scrambled: "TICHS",
        question: "Welches Wort ergibt sich aus den Buchstaben: TICHS?",
        options: ["A) Das Wort beginnt mit I", "B) Das Wort beginnt mit T", "C) Das Wort beginnt mit C", "D) Das Wort beginnt mit S", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "TISCH - Das Wort beginnt mit T"
    },
    {
        id: 33,
        scrambled: "LSHUT",
        question: "Welches Wort ergibt sich aus den Buchstaben: LSHUT?",
        options: ["A) Das Wort beginnt mit L", "B) Das Wort beginnt mit S", "C) Das Wort beginnt mit H", "D) Das Wort beginnt mit U", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "STUHL - Das Wort beginnt mit S"
    },
    {
        id: 34,
        scrambled: "LMBUE",
        question: "Welches Wort ergibt sich aus den Buchstaben: LMBUE?",
        options: ["A) Das Wort beginnt mit L", "B) Das Wort beginnt mit B", "C) Das Wort beginnt mit M", "D) Das Wort beginnt mit E", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "BLUME - Das Wort beginnt mit B"
    },
    {
        id: 35,
        scrambled: "GVEOL",
        question: "Welches Wort ergibt sich aus den Buchstaben: GVEOL?",
        options: ["A) Das Wort beginnt mit G", "B) Das Wort beginnt mit V", "C) Das Wort beginnt mit E", "D) Das Wort beginnt mit L", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "VOGEL - Das Wort beginnt mit V"
    },
    {
        id: 36,
        scrambled: "RDFEP",
        question: "Welches Wort ergibt sich aus den Buchstaben: RDFEP?",
        options: ["A) Das Wort beginnt mit R", "B) Das Wort beginnt mit P", "C) Das Wort beginnt mit D", "D) Das Wort beginnt mit F", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "PFERD - Das Wort beginnt mit P"
    },
    {
        id: 37,
        scrambled: "SRSAWE",
        question: "Welches Wort ergibt sich aus den Buchstaben: SRSAWE?",
        options: ["A) Das Wort beginnt mit S", "B) Das Wort beginnt mit W", "C) Das Wort beginnt mit R", "D) Das Wort beginnt mit A", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "WASSER - Das Wort beginnt mit W"
    },
    {
        id: 38,
        scrambled: "RTNOZIOH",
        question: "Welches Wort ergibt sich aus den Buchstaben: RTNOZIOH?",
        options: ["A) Das Wort beginnt mit R", "B) Das Wort beginnt mit H", "C) Das Wort beginnt mit T", "D) Das Wort beginnt mit N", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "HORIZONT - Das Wort beginnt mit H"
    },
    {
        id: 39,
        scrambled: "HATPONM",
        question: "Welches Wort ergibt sich aus den Buchstaben: HATPONM?",
        options: ["A) Das Wort beginnt mit H", "B) Das Wort beginnt mit P", "C) Das Wort beginnt mit A", "D) Das Wort beginnt mit T", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "PHANTOM - Das Wort beginnt mit P"
    },
    {
        id: 40,
        scrambled: "YNSEESHT",
        question: "Welches Wort ergibt sich aus den Buchstaben: YNSEESHT?",
        options: ["A) Das Wort beginnt mit Y", "B) Das Wort beginnt mit S", "C) Das Wort beginnt mit N", "D) Das Wort beginnt mit E", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "SYNTHESE - Das Wort beginnt mit S"
    },
    {
        id: 41,
        scrambled: "NALYSEA",
        question: "Welches Wort ergibt sich aus den Buchstaben: NALYSEA?",
        options: ["A) Das Wort beginnt mit N", "B) Das Wort beginnt mit A", "C) Das Wort beginnt mit L", "D) Das Wort beginnt mit Y", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "ANALYSE - Das Wort beginnt mit A"
    },
    {
        id: 42,
        scrambled: "PAOXDRA",
        question: "Welches Wort ergibt sich aus den Buchstaben: PAOXDRA?",
        options: ["A) Das Wort beginnt mit A", "B) Das Wort beginnt mit P", "C) Das Wort beginnt mit O", "D) Das Wort beginnt mit X", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "PARADOX - Das Wort beginnt mit P"
    },
    {
        id: 43,
        scrambled: "PYRMADIE",
        question: "Welches Wort ergibt sich aus den Buchstaben: PYRMADIE?",
        options: ["A) Das Wort beginnt mit Y", "B) Das Wort beginnt mit P", "C) Das Wort beginnt mit R", "D) Das Wort beginnt mit M", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "PYRAMIDE - Das Wort beginnt mit P"
    },
    {
        id: 44,
        scrambled: "ZENYDLIR",
        question: "Welches Wort ergibt sich aus den Buchstaben: ZENYDLIR?",
        options: ["A) Das Wort beginnt mit E", "B) Das Wort beginnt mit Z", "C) Das Wort beginnt mit N", "D) Das Wort beginnt mit Y", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "ZYLINDER - Das Wort beginnt mit Z"
    },
    {
        id: 45,
        scrambled: "PTSUMKER",
        question: "Welches Wort ergibt sich aus den Buchstaben: PTSUMKER?",
        options: ["A) Das Wort beginnt mit P", "B) Das Wort beginnt mit S", "C) Das Wort beginnt mit T", "D) Das Wort beginnt mit U", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "SPEKTRUM - Das Wort beginnt mit S"
    },
    {
        id: 46,
        scrambled: "QAUTMUN",
        question: "Welches Wort ergibt sich aus den Buchstaben: QAUTMUN?",
        options: ["A) Das Wort beginnt mit A", "B) Das Wort beginnt mit Q", "C) Das Wort beginnt mit U", "D) Das Wort beginnt mit T", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "QUANTUM - Das Wort beginnt mit Q"
    },
    {
        id: 47,
        scrambled: "LKSRLTIA",
        question: "Welches Wort ergibt sich aus den Buchstaben: LKSRLTIA?",
        options: ["A) Das Wort beginnt mit L", "B) Das Wort beginnt mit K", "C) Das Wort beginnt mit S", "D) Das Wort beginnt mit R", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "KRISTALL - Das Wort beginnt mit K"
    },
    {
        id: 48,
        scrambled: "FALMENM",
        question: "Welches Wort ergibt sich aus den Buchstaben: FALMENM?",
        options: ["A) Das Wort beginnt mit A", "B) Das Wort beginnt mit F", "C) Das Wort beginnt mit L", "D) Das Wort beginnt mit M", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "FLAMME - Das Wort beginnt mit F (zweites M ist doppelt)"
    },
    {
        id: 49,
        scrambled: "HRMYHTUS",
        question: "Welches Wort ergibt sich aus den Buchstaben: HRMYHTUS?",
        options: ["A) Das Wort beginnt mit H", "B) Das Wort beginnt mit R", "C) Das Wort beginnt mit M", "D) Das Wort beginnt mit Y", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "RHYTHMUS - Das Wort beginnt mit R"
    },
    {
        id: 50,
        scrambled: "FNEPLAZ",
        question: "Welches Wort ergibt sich aus den Buchstaben: FNEPLAZ?",
        options: ["A) Das Wort beginnt mit F", "B) Das Wort beginnt mit P", "C) Das Wort beginnt mit N", "D) Das Wort beginnt mit E", "E) Keiner der Angaben stimmt"],
        correct: 1,
        explanation: "PFLANZE - Das Wort beginnt mit P"
    }
];

// Shuffle questions at start
const questions = shuffleArray(questionsPool);

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
            
            <div style="display: flex; justify-content: center; margin: 2rem 0;">
                <div style="padding: 2rem 3rem; background: #1e293b; border: 2px solid #3b82f6; border-radius: 12px; font-size: 2.5rem; font-weight: 700; letter-spacing: 0.5rem; color: #3b82f6;">
                    ${question.scrambled}
                </div>
            </div>

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
