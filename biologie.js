const questions = [
    {
        id: 1,
        question: "Welche Struktur ist direkt an der Proteinbiosynthese beteiligt?",
        options: ["Lysosom", "Ribosom", "Golgi-Apparat", "Zentriol", "Peroxisom"],
        correct: 1,
        explanation: "Ribosomen sind die Orte der Proteinbiosynthese in der Zelle"
    },
    {
        id: 2,
        question: "Welche Base kommt nur in RNA vor?",
        options: ["Adenin", "Guanin", "Thymin", "Cytosin", "Uracil"],
        correct: 4,
        explanation: "Uracil kommt nur in RNA vor, während Thymin nur in DNA vorkommt"
    },
    {
        id: 3,
        question: "Welche Eigenschaft ist typisch für Enzyme?",
        options: ["Sie erhöhen die Aktivierungsenergie", "Sie werden verbraucht", "Sie wirken substratspezifisch", "Sie funktionieren nur bei 0 °C", "Sie verändern das Reaktionsgleichgewicht"],
        correct: 2,
        explanation: "Enzyme sind substratspezifisch und katalysieren spezifische Reaktionen"
    },
    {
        id: 4,
        question: "Welche Zellstruktur kommt nicht in Prokaryoten vor?",
        options: ["Zellmembran", "Ribosomen", "Zellwand", "Zellkern", "Cytoplasma"],
        correct: 3,
        explanation: "Prokaryoten haben keinen membranumschlossenen Zellkern"
    },
    {
        id: 5,
        question: "Welche Funktion haben Mitochondrien hauptsächlich?",
        options: ["Proteinsynthese", "Lipidabbau", "ATP-Produktion", "Speicherung von Calcium", "Photosynthese"],
        correct: 2,
        explanation: "Mitochondrien sind die Kraftwerke der Zelle und produzieren ATP"
    },
    {
        id: 6,
        question: "Was beschreibt die Diffusion korrekt?",
        options: ["Transport gegen den Konzentrationsgradienten", "Energieabhängiger Transport", "Zufällige Bewegung von Teilchen", "Transport über Membranproteine", "Vesikeltransport"],
        correct: 2,
        explanation: "Diffusion ist die zufällige Bewegung von Teilchen entlang des Konzentrationsgradienten"
    },
    {
        id: 7,
        question: "Welche Phase der Mitose ist korrekt zugeordnet?",
        options: ["Prophase – Chromatiden trennen sich", "Metaphase – Chromosomen ordnen sich in der Äquatorialebene an", "Anaphase – Kernhülle bildet sich", "Telophase – Spindelapparat entsteht", "Interphase – Zellteilung"],
        correct: 1,
        explanation: "In der Metaphase ordnen sich die Chromosomen in der Äquatorialebene an"
    },
    {
        id: 8,
        question: "Welche Moleküle sind Hauptbestandteil biologischer Membranen?",
        options: ["Polysaccharide", "Nukleotide", "Phospholipide", "Aminosäuren", "Steroide"],
        correct: 2,
        explanation: "Phospholipide bilden die Doppelschicht biologischer Membranen"
    },
    {
        id: 9,
        question: "Welche Funktion hat die mRNA?",
        options: ["Transport von Aminosäuren", "Bestandteil des Ribosoms", "Vorlage für die Proteinsynthese", "Speicherung genetischer Information", "Enzymatische Aktivität"],
        correct: 2,
        explanation: "mRNA dient als Vorlage für die Proteinsynthese (Translation)"
    },
    {
        id: 10,
        question: "Welche Aussage zur Osmose ist richtig?",
        options: ["Sie betrifft nur Ionen", "Sie benötigt Energie", "Wasser diffundiert entlang seines Konzentrationsgradienten", "Sie findet nur in tierischen Zellen statt", "Sie ist unabhängig von Membranen"],
        correct: 2,
        explanation: "Osmose ist die Diffusion von Wasser entlang des Konzentrationsgradienten"
    },
    {
        id: 11,
        question: "Welche Struktur ist für die Photosynthese notwendig?",
        options: ["Ribosom", "Chloroplast", "Mitochondrium", "Lysosom", "Vakuole"],
        correct: 1,
        explanation: "Chloroplasten sind die Orte der Photosynthese in Pflanzenzellen"
    },
    {
        id: 12,
        question: "Welche Bindung stabilisiert die DNA-Doppelhelix hauptsächlich?",
        options: ["Peptidbindungen", "Ionenbindungen", "Wasserstoffbrücken", "Disulfidbrücken", "Phosphatbindungen"],
        correct: 2,
        explanation: "Wasserstoffbrücken zwischen den Basenpaaren stabilisieren die DNA-Doppelhelix"
    },
    {
        id: 13,
        question: "Welche Funktion hat der Golgi-Apparat?",
        options: ["DNA-Replikation", "Proteinmodifikation und -transport", "Energiegewinnung", "Abbau von Fettsäuren", "Zellbewegung"],
        correct: 1,
        explanation: "Der Golgi-Apparat modifiziert Proteine und transportiert sie"
    },
    {
        id: 14,
        question: "Welche Aminosäureeigenschaft beeinflusst die Proteinstruktur am stärksten?",
        options: ["Anzahl der Stickstoffatome", "Ladung der Seitenkette", "Anzahl der Wasserstoffatome", "Molekülmasse", "Schmelzpunkt"],
        correct: 1,
        explanation: "Die Ladung der Seitenkette beeinflusst die Faltung und Struktur von Proteinen"
    },
    {
        id: 15,
        question: "Welche Aussage zu Enzymen ist korrekt?",
        options: ["Sie verändern das Endprodukt", "Sie sind immer Proteine", "Sie sind temperaturunabhängig", "Sie beschleunigen Reaktionen", "Sie wirken unspezifisch"],
        correct: 3,
        explanation: "Enzyme beschleunigen biochemische Reaktionen als Katalysatoren"
    },
    {
        id: 16,
        question: "Welche Zellteilung führt zu haploiden Zellen?",
        options: ["Mitose", "Endomitose", "Meiose", "Cytokinese", "Apoptose"],
        correct: 2,
        explanation: "Meiose führt zur Bildung haploider Geschlechtszellen"
    },
    {
        id: 17,
        question: "Welche Funktion haben Lysosomen?",
        options: ["ATP-Synthese", "Speicherung von DNA", "Abbau zellfremder Stoffe", "Proteinbiosynthese", "Photosynthese"],
        correct: 2,
        explanation: "Lysosomen sind die Verdauungsorganellen der Zelle"
    },
    {
        id: 18,
        question: "Welche Base paart sich mit Guanin?",
        options: ["Adenin", "Uracil", "Cytosin", "Thymin", "Inosin"],
        correct: 2,
        explanation: "Guanin paart sich immer mit Cytosin (G-C)"
    },
    {
        id: 19,
        question: "Welche Aussage zum aktiven Transport ist korrekt?",
        options: ["Er erfolgt immer passiv", "Er benötigt ATP", "Er folgt dem Konzentrationsgradienten", "Er ist temperaturunabhängig", "Er erfolgt ohne Membranproteine"],
        correct: 1,
        explanation: "Aktiver Transport benötigt Energie in Form von ATP"
    },
    {
        id: 20,
        question: "Welche Struktur ist typisch für Pflanzenzellen?",
        options: ["Zentriol", "Lysosom", "Chloroplast", "Flagellum", "Peroxisom"],
        correct: 2,
        explanation: "Chloroplasten kommen nur in Pflanzenzellen vor"
    },
    {
        id: 21,
        question: "Welche Moleküle bestehen aus Aminosäuren?",
        options: ["Lipide", "Proteine", "Nukleinsäuren", "Kohlenhydrate", "Steroide"],
        correct: 1,
        explanation: "Proteine sind Polymere aus Aminosäuren"
    },
    {
        id: 22,
        question: "Welche Phase gehört nicht zur Mitose?",
        options: ["Prophase", "Metaphase", "Anaphase", "Telophase", "Interphase"],
        correct: 4,
        explanation: "Die Interphase ist die Phase zwischen zwei Zellteilungen"
    },
    {
        id: 23,
        question: "Welche Funktion haben Ribosomen?",
        options: ["ATP-Bildung", "Proteinbiosynthese", "Lipidabbau", "DNA-Replikation", "Zellbewegung"],
        correct: 1,
        explanation: "Ribosomen sind die Orte der Proteinbiosynthese"
    },
    {
        id: 24,
        question: "Welche Aussage zu Zellmembranen ist richtig?",
        options: ["Sie sind starr", "Sie bestehen nur aus Lipiden", "Sie sind selektiv permeabel", "Sie lassen alle Stoffe durch", "Sie kommen nur in Eukaryoten vor"],
        correct: 2,
        explanation: "Zellmembranen sind selektiv permeabel und kontrollieren den Stoffaustausch"
    },
    {
        id: 25,
        question: "Welche Funktion hat die tRNA?",
        options: ["Speicherung genetischer Information", "Transport von Aminosäuren", "Bildung von Ribosomen", "Enzymatische Aktivität", "Regulation der Transkription"],
        correct: 1,
        explanation: "tRNA transportiert Aminosäuren zu den Ribosomen während der Translation"
    },
    {
        id: 26,
        question: "Welche Struktur enthält die genetische Information eukaryotischer Zellen?",
        options: ["Mitochondrium", "Ribosom", "Zellkern", "Golgi-Apparat", "Lysosom"],
        correct: 2,
        explanation: "Der Zellkern enthält die DNA mit der genetischen Information"
    },
    {
        id: 27,
        question: "Welche Aussage zur Photosynthese ist korrekt?",
        options: ["Sie findet in Mitochondrien statt", "Sie benötigt kein Licht", "Sie produziert Glukose", "Sie verbraucht Sauerstoff", "Sie ist nur nachts aktiv"],
        correct: 2,
        explanation: "Photosynthese produziert Glukose aus CO₂ und Wasser unter Lichteinwirkung"
    },
    {
        id: 28,
        question: "Welche Zellstruktur reguliert den Stoffaustausch?",
        options: ["Zellwand", "Zellmembran", "Cytoskelett", "Kernhülle", "Vakuole"],
        correct: 1,
        explanation: "Die Zellmembran reguliert den Stoffaustausch zwischen Zelle und Umgebung"
    },
    {
        id: 29,
        question: "Welche Bindung verbindet Aminosäuren?",
        options: ["Wasserstoffbindung", "Peptidbindung", "Ionenbindung", "Disulfidbindung", "Phosphatbindung"],
        correct: 1,
        explanation: "Aminosäuren werden durch Peptidbindungen zu Proteinen verknüpft"
    },
    {
        id: 30,
        question: "Welche Aussage zur Denaturierung ist korrekt?",
        options: ["Die Primärstruktur wird zerstört", "Das Protein wird immer funktionslos", "Sie betrifft nur DNA", "Sie ist immer reversibel", "Sie verändert nur die Nukleotide"],
        correct: 1,
        explanation: "Denaturierung führt zum Verlust der Proteinstruktur und damit der Funktion"
    },
    {
        id: 31,
        question: "Welche Organelle enthalten eigene DNA?",
        options: ["Lysosomen", "Ribosomen", "Mitochondrien", "Golgi-Apparat", "Zentriolen"],
        correct: 2,
        explanation: "Mitochondrien und Chloroplasten besitzen eigene DNA"
    },
    {
        id: 32,
        question: "Welche Aussage zu Wasser ist korrekt?",
        options: ["Es ist unpolar", "Es bildet Wasserstoffbrücken", "Es löst keine Ionen", "Es ist kein Lösungsmittel", "Es ist biologisch inert"],
        correct: 1,
        explanation: "Wasser bildet Wasserstoffbrücken aufgrund seiner Polarität"
    },
    {
        id: 33,
        question: "Welche Struktur ist für die Zellbewegung zuständig?",
        options: ["Ribosom", "Cytoskelett", "Lysosom", "Golgi-Apparat", "Kernkörperchen"],
        correct: 1,
        explanation: "Das Cytoskelett ermöglicht Zellbewegung und Formstabilität"
    },
    {
        id: 34,
        question: "Welche Phase der Meiose trennt homologe Chromosomen?",
        options: ["Meiose II", "Prophase II", "Metaphase II", "Anaphase I", "Telophase II"],
        correct: 3,
        explanation: "In der Anaphase I werden homologe Chromosomen getrennt"
    },
    {
        id: 35,
        question: "Welche Moleküle speichern kurzfristig Energie in Zellen?",
        options: ["DNA", "ATP", "Proteine", "Lipide", "RNA"],
        correct: 1,
        explanation: "ATP ist der universelle Energieträger für kurzfristige Energiespeicherung"
    },
    {
        id: 36,
        question: "Welche Struktur ist keine Membranstruktur?",
        options: ["Zellkern", "Mitochondrium", "Ribosom", "Golgi-Apparat", "Lysosom"],
        correct: 2,
        explanation: "Ribosomen besitzen keine Membran"
    },
    {
        id: 37,
        question: "Welche Aussage zur Enzymhemmung ist korrekt?",
        options: ["Kompetitive Hemmung verändert das Enzym irreversibel", "Inhibitoren erhöhen die Reaktionsgeschwindigkeit", "Kompetitive Hemmung konkurriert mit dem Substrat", "Hemmung ist temperaturunabhängig", "Hemmung tritt nur bei DNA auf"],
        correct: 2,
        explanation: "Bei kompetitiver Hemmung konkurriert der Inhibitor mit dem Substrat um das aktive Zentrum"
    },
    {
        id: 38,
        question: "Welche Struktur bildet Spindelfasern?",
        options: ["Lysosom", "Zentriol", "Ribosom", "Golgi-Apparat", "Vakuole"],
        correct: 1,
        explanation: "Zentriolen organisieren die Bildung der Spindelfasern während der Zellteilung"
    },
    {
        id: 39,
        question: "Welche Aussage zur Zellwand ist korrekt?",
        options: ["Sie kommt nur in Tierzellen vor", "Sie besteht aus Cellulose (bei Pflanzen)", "Sie ist semipermeabel", "Sie enthält DNA", "Sie ist energieproduzierend"],
        correct: 1,
        explanation: "Pflanzenzellwände bestehen hauptsächlich aus Cellulose"
    },
    {
        id: 40,
        question: "Welche Funktion hat das Cytoplasma?",
        options: ["Speicherung genetischer Information", "Ort vieler Stoffwechselreaktionen", "ATP-Synthese", "Proteinfaltung", "Photosynthese"],
        correct: 1,
        explanation: "Das Cytoplasma ist der Ort vieler Stoffwechselreaktionen"
    },
    {
        id: 41,
        question: "Welche Moleküle bestehen aus Zucker, Base und Phosphat?",
        options: ["Aminosäuren", "Nukleotide", "Fettsäuren", "Steroide", "Vitamine"],
        correct: 1,
        explanation: "Nukleotide sind aus Zucker, Base und Phosphatgruppe aufgebaut"
    },
    {
        id: 42,
        question: "Welche Struktur ist an der Transkription beteiligt?",
        options: ["Ribosom", "RNA-Polymerase", "tRNA", "Golgi-Apparat", "Lysosom"],
        correct: 1,
        explanation: "RNA-Polymerase katalysiert die Transkription von DNA zu RNA"
    },
    {
        id: 43,
        question: "Welche Aussage zur Temperaturabhängigkeit von Enzymen ist korrekt?",
        options: ["Aktivität steigt unbegrenzt", "Enzyme funktionieren nur bei 0 °C", "Zu hohe Temperaturen können Enzyme denaturieren", "Temperatur beeinflusst Enzyme nicht", "Enzyme arbeiten nur bei Körpertemperatur"],
        correct: 2,
        explanation: "Zu hohe Temperaturen führen zur Denaturierung und Funktionsverlust von Enzymen"
    },
    {
        id: 44,
        question: "Welche Funktion haben Peroxisomen?",
        options: ["ATP-Synthese", "Abbau von Fettsäuren und Peroxiden", "Proteinsynthese", "DNA-Replikation", "Zellteilung"],
        correct: 1,
        explanation: "Peroxisomen bauen Fettsäuren ab und entgiften Peroxide"
    },
    {
        id: 45,
        question: "Welche Aussage zur DNA-Replikation ist korrekt?",
        options: ["Sie ist konservativ", "Sie ist semikonservativ", "Sie ist zufällig", "Sie findet im Cytoplasma statt", "Sie benötigt keine Enzyme"],
        correct: 1,
        explanation: "DNA-Replikation erfolgt semikonservativ - jeder Strang dient als Matrize"
    },
    {
        id: 46,
        question: "Welche Struktur trennt Zellinneres und -äußeres?",
        options: ["Zellwand", "Cytoskelett", "Zellmembran", "Kernhülle", "Vakuole"],
        correct: 2,
        explanation: "Die Zellmembran trennt das Zellinnere vom Außenraum"
    },
    {
        id: 47,
        question: "Welche Moleküle dienen langfristig als Energiespeicher?",
        options: ["ATP", "Glukose", "Lipide", "RNA", "Proteine"],
        correct: 2,
        explanation: "Lipide dienen als langfristige Energiespeicher in Organismen"
    },
    {
        id: 48,
        question: "Welche Phase der Zellteilung folgt auf die Metaphase?",
        options: ["Prophase", "Interphase", "Anaphase", "Telophase", "Cytokinese"],
        correct: 2,
        explanation: "Nach der Metaphase folgt die Anaphase, in der die Chromatiden getrennt werden"
    },
    {
        id: 49,
        question: "Welche Aussage zu Ribosomen ist korrekt?",
        options: ["Sie besitzen eine Membran", "Sie kommen nur in Eukaryoten vor", "Sie bestehen aus rRNA und Proteinen", "Sie speichern DNA", "Sie produzieren ATP"],
        correct: 2,
        explanation: "Ribosomen bestehen aus ribosomaler RNA (rRNA) und Proteinen"
    },
    {
        id: 50,
        question: "Welche Struktur ist nicht Teil des Endomembransystems?",
        options: ["ER", "Golgi-Apparat", "Lysosom", "Mitochondrium", "Vesikel"],
        correct: 3,
        explanation: "Mitochondrien gehören nicht zum Endomembransystem, da sie eine eigene Entstehungsgeschichte haben"
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
            <div class="question-text">${question.question}</div>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option" data-index="${index}">
                        ${String.fromCharCode(65 + index)}) ${option}
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
