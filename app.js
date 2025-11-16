// ⚠️ IMPORTANT: Add your Google Sheets Web App URL here after setup
// Follow instructions in GOOGLE_SHEETS_SETUP.md to get your URL
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxZbrbabfm96ZYCWJI0-OAGN0f6be_r9F_u9f8Kn0PFakpS1NiMsGuHNiAPeNln2jYf/exec';

// ⚠️ ADMIN PASSWORD: Change this to your desired password
const ADMIN_PASSWORD = 'admin123';

// Quiz Application State
let currentCourse = null;
let currentCourseName = '';
let currentQuestionIndex = 0;
let userAnswers = [];
let quizResults = {
    correct: 0,
    total: 0
};

// Student Information
let studentInfo = {
    name: '',
    matriculationNumber: '',
    program: ''
};

// DOM Elements
const homePage = document.getElementById('home-page');
const courseSelection = document.getElementById('course-selection');
const introWeekDetail = document.getElementById('intro-week-detail');
const studentLogin = document.getElementById('student-login');
const adminResults = document.getElementById('admin-results');
const quizPage = document.getElementById('quiz-page');
const resultsPage = document.getElementById('results-page');

// Navigation: Home -> My Courses
document.getElementById('go-to-courses').addEventListener('click', () => {
    showPage('course-selection');
});

// Navigation: Breadcrumb -> Home
document.querySelectorAll('.breadcrumb-home-link, #breadcrumb-home').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('home-page');
    });
});

// Navigation: Breadcrumb -> My Courses
document.querySelectorAll('.breadcrumb-mycourses-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('course-selection');
    });
});

// Navigation: Introductory Week Card Click
document.getElementById('intro-week-card').addEventListener('click', () => {
    showPage('intro-week-detail');
});

// Navigation: Breadcrumb -> Introductory Week
document.getElementById('breadcrumb-introweek-link').addEventListener('click', (e) => {
    e.preventDefault();
    showPage('intro-week-detail');
});

// Navigation: Select Your Master Program Button
document.getElementById('select-program-btn').addEventListener('click', () => {
    showPage('student-login');
});

// Admin Access: Press Ctrl+Shift+R to access Results page (password protected)
document.addEventListener('keydown', (e) => {
    // Ctrl+Shift+R opens admin results page
    if (e.ctrlKey && e.shiftKey && e.key === 'R') {
        e.preventDefault();
        accessAdminResults();
    }
});

// Function to access admin results with password protection
function accessAdminResults() {
    const password = prompt('Enter admin password to view results:');

    if (password === null) {
        // User clicked cancel
        return;
    }

    if (password === ADMIN_PASSWORD) {
        showPage('admin-results');
        loadResultsTable();
    } else {
        alert('❌ Incorrect password! Access denied.');
    }
}

// Student Login Form Validation
const studentNameInput = document.getElementById('student-name');
const matriculationInput = document.getElementById('matriculation-number');
const studentProgramSelect = document.getElementById('student-program');
const startQuizBtn = document.getElementById('start-quiz-btn');

function validateLoginForm() {
    const name = studentNameInput.value.trim();
    const matriculation = matriculationInput.value.trim();
    const program = studentProgramSelect.value;

    if (name && matriculation && program) {
        startQuizBtn.disabled = false;
    } else {
        startQuizBtn.disabled = true;
    }
}

studentNameInput.addEventListener('input', validateLoginForm);
matriculationInput.addEventListener('input', validateLoginForm);
studentProgramSelect.addEventListener('change', validateLoginForm);

// Start Quiz Button Click
startQuizBtn.addEventListener('click', () => {
    studentInfo.name = studentNameInput.value.trim();
    studentInfo.matriculationNumber = matriculationInput.value.trim();
    studentInfo.program = studentProgramSelect.value;

    if (studentInfo.name && studentInfo.matriculationNumber && studentInfo.program) {
        currentCourse = studentInfo.program;
        currentCourseName = quizData[studentInfo.program].courseName;

        // Update user name in header
        document.querySelector('.user-name').textContent = studentInfo.name;

        startQuiz(currentCourse);
    }
});

// Helper function to show pages
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Start Quiz Function
function startQuiz(course) {
    currentQuestionIndex = 0;
    userAnswers = [];
    quizResults = { correct: 0, total: 0 };

    // Show quiz page
    showPage('quiz-page');

    // Update quiz info
    document.getElementById('course-name').textContent = quizData[course].courseName;
    document.getElementById('total-questions').textContent = quizData[course].questions.length;

    // Load first question
    loadQuestion();
}

// Load Question Function
function loadQuestion() {
    const question = quizData[currentCourse].questions[currentQuestionIndex];

    // Update progress
    updateProgress();

    // Update question number
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;

    // Display question
    document.getElementById('question-text').textContent = question.question;

    // Display image if exists
    const imageContainer = document.getElementById('question-image');
    if (question.image) {
        imageContainer.innerHTML = `<img src="${question.image}" alt="Question image">`;
    } else {
        imageContainer.innerHTML = '';
    }

    // Display answer options
    const answersSection = document.getElementById('answers-section');
    answersSection.innerHTML = '';

    question.options.forEach((option, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.setAttribute('data-index', index);

        answerDiv.innerHTML = `
            <div class="answer-radio"></div>
            <div class="answer-text">${option}</div>
        `;

        // Check if this question was already answered
        const existingAnswer = userAnswers[currentQuestionIndex];
        if (existingAnswer !== undefined) {
            if (existingAnswer === index) {
                answerDiv.classList.add('selected');
            }
            answerDiv.classList.add('disabled');
        } else {
            // Add click event only for unanswered questions
            answerDiv.addEventListener('click', () => selectAnswer(index));
        }

        answersSection.appendChild(answerDiv);
    });

    // Hide feedback initially
    const feedbackSection = document.getElementById('feedback-section');
    feedbackSection.classList.remove('show', 'correct', 'incorrect');

    // Show feedback if already answered
    if (existingAnswer !== undefined) {
        showFeedback(existingAnswer);
    }

    // Update navigation buttons
    updateNavigationButtons();
}

// Select Answer Function
function selectAnswer(selectedIndex) {
    const question = quizData[currentCourse].questions[currentQuestionIndex];

    // Remove previous selection
    document.querySelectorAll('.answer-option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Mark selected answer
    const selectedOption = document.querySelector(`.answer-option[data-index="${selectedIndex}"]`);
    selectedOption.classList.add('selected');

    // Store answer
    userAnswers[currentQuestionIndex] = selectedIndex;

    // Check if answer is correct
    const isCorrect = selectedIndex === question.correctAnswer;

    // Update results
    if (isCorrect) {
        quizResults.correct++;
    }
    quizResults.total++;

    // Disable all options
    document.querySelectorAll('.answer-option').forEach(opt => {
        opt.classList.add('disabled');
        opt.style.cursor = 'not-allowed';
    });

    // Show feedback
    showFeedback(selectedIndex);

    // Update navigation
    updateNavigationButtons();
}

// Show Feedback Function
function showFeedback(selectedIndex) {
    const question = quizData[currentCourse].questions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correctAnswer;

    // Mark correct and incorrect answers
    document.querySelectorAll('.answer-option').forEach((opt, index) => {
        if (index === question.correctAnswer) {
            opt.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });

    // Show feedback section
    const feedbackSection = document.getElementById('feedback-section');
    feedbackSection.className = 'feedback-section show ' + (isCorrect ? 'correct' : 'incorrect');

    feedbackSection.innerHTML = `
        <div class="feedback-header ${isCorrect ? 'correct' : 'incorrect'}">
            <span class="feedback-icon">${isCorrect ? '✓' : '✗'}</span>
            <span>${isCorrect ? 'Correct!' : 'Incorrect'}</span>
        </div>
        <div class="feedback-explanation">${question.explanation}</div>
    `;
}

// Update Progress Bar
function updateProgress() {
    const totalQuestions = quizData[currentCourse].questions.length;
    const progress = ((currentQuestionIndex) / totalQuestions) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
}

// Update Navigation Buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const totalQuestions = quizData[currentCourse].questions.length;

    // Previous button
    prevBtn.disabled = currentQuestionIndex === 0;

    // Next button
    const isAnswered = userAnswers[currentQuestionIndex] !== undefined;
    nextBtn.disabled = !isAnswered;

    // Change next button text on last question
    if (currentQuestionIndex === totalQuestions - 1) {
        nextBtn.textContent = 'View Results';
    } else {
        nextBtn.textContent = 'Next Question';
    }
}

// Navigation Event Listeners
document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    const totalQuestions = quizData[currentCourse].questions.length;

    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        // Show results
        showResults();
    }
});

// Show Results Function
function showResults() {
    showPage('results-page');

    const percentage = Math.round((quizResults.correct / quizResults.total) * 100);

    document.getElementById('score-percentage').textContent = percentage;
    document.getElementById('correct-answers').textContent = quizResults.correct;
    document.getElementById('total-answers').textContent = quizResults.total;

    // Update icon color based on performance
    const resultsIcon = document.querySelector('.results-icon');
    if (percentage >= 70) {
        resultsIcon.style.color = 'var(--success-color)';
    } else if (percentage >= 50) {
        resultsIcon.style.color = 'var(--warning-color)';
    } else {
        resultsIcon.style.color = 'var(--danger-color)';
    }

    // Save result to localStorage
    saveQuizResult(percentage);
}

// Save Quiz Result to LocalStorage and Google Sheets
function saveQuizResult(percentage) {
    const result = {
        timestamp: new Date().toISOString(),
        name: studentInfo.name,
        matriculationNumber: studentInfo.matriculationNumber,
        program: studentInfo.program,
        programName: currentCourseName,
        score: quizResults.correct,
        total: quizResults.total,
        percentage: percentage,
        passed: percentage >= 50
    };

    // Save to localStorage (for student to view their own results)
    let allResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    allResults.push(result);
    localStorage.setItem('quizResults', JSON.stringify(allResults));

    // Send to Google Sheets (for admin to view all results)
    sendToGoogleSheets(result);
}

// Send Quiz Result to Google Sheets
function sendToGoogleSheets(result) {
    // Check if Google Sheets URL is configured
    if (!GOOGLE_SHEETS_URL || GOOGLE_SHEETS_URL === 'YOUR_GOOGLE_SHEETS_URL_HERE') {
        console.log('Google Sheets URL not configured. Results saved locally only.');
        return;
    }

    // Send data to Google Sheets
    fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(result)
    })
    .then(() => {
        console.log('✅ Result sent to Google Sheets successfully!');
    })
    .catch(error => {
        console.error('❌ Error sending to Google Sheets:', error);
        // Results are still saved in localStorage even if Google Sheets fails
    });
}

// Review Answers Button
document.getElementById('review-btn').addEventListener('click', () => {
    showPage('quiz-page');
    currentQuestionIndex = 0;
    loadQuestion();
});

// Restart Button
document.getElementById('restart-btn').addEventListener('click', () => {
    showPage('course-selection');

    // Reset state
    currentCourse = null;
    currentCourseName = '';
    currentQuestionIndex = 0;
    userAnswers = [];
    quizResults = { correct: 0, total: 0 };

    // Clear student login form
    studentNameInput.value = '';
    matriculationInput.value = '';
    studentProgramSelect.value = '';
    startQuizBtn.disabled = true;
});

// ========== ADMIN RESULTS PAGE ==========

// Load Results Table
function loadResultsTable(filterProgram = '') {
    const allResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    const tableBody = document.getElementById('results-table-body');
    const noResultsMessage = document.getElementById('no-results-message');

    // Filter results if program is selected
    const filteredResults = filterProgram
        ? allResults.filter(r => r.program === filterProgram)
        : allResults;

    if (filteredResults.length === 0) {
        tableBody.innerHTML = '';
        noResultsMessage.style.display = 'block';
        document.querySelector('.results-table-container').style.display = 'none';
        return;
    }

    noResultsMessage.style.display = 'none';
    document.querySelector('.results-table-container').style.display = 'block';

    // Sort by timestamp (newest first)
    filteredResults.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    // Generate table rows
    tableBody.innerHTML = filteredResults.map(result => {
        const date = new Date(result.timestamp);
        const formattedDate = date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        const formattedTime = date.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit'
        });

        const statusClass = result.passed ? 'status-pass' : 'status-fail';
        const statusText = result.passed ? 'Passed' : 'Failed';

        return `
            <tr>
                <td>${formattedDate} ${formattedTime}</td>
                <td>${result.name}</td>
                <td>${result.matriculationNumber}</td>
                <td>${result.programName}</td>
                <td>${result.score}/${result.total}</td>
                <td>${result.percentage}%</td>
                <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            </tr>
        `;
    }).join('');
}

// Filter Results by Program
document.getElementById('filter-program').addEventListener('change', (e) => {
    loadResultsTable(e.target.value);
});

// Export Results to CSV
document.getElementById('export-results-btn').addEventListener('click', () => {
    const allResults = JSON.parse(localStorage.getItem('quizResults') || '[]');

    if (allResults.length === 0) {
        alert('No results to export!');
        return;
    }

    // Create CSV content
    const headers = ['Date', 'Time', 'Name', 'Matriculation Number', 'Program', 'Score', 'Total', 'Percentage', 'Status'];
    const csvRows = [headers.join(',')];

    allResults.forEach(result => {
        const date = new Date(result.timestamp);
        const formattedDate = date.toLocaleDateString('en-GB');
        const formattedTime = date.toLocaleTimeString('en-GB');
        const status = result.passed ? 'Passed' : 'Failed';

        const row = [
            formattedDate,
            formattedTime,
            `"${result.name}"`,
            result.matriculationNumber,
            `"${result.programName}"`,
            result.score,
            result.total,
            result.percentage + '%',
            status
        ];

        csvRows.push(row.join(','));
    });

    const csvContent = csvRows.join('\n');

    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', `quiz-results-${new Date().toISOString().split('T')[0]}.csv`);
    a.click();
    window.URL.revokeObjectURL(url);
});

// Clear All Results
document.getElementById('clear-results-btn').addEventListener('click', () => {
    if (confirm('Are you sure you want to delete all quiz results? This action cannot be undone.')) {
        localStorage.removeItem('quizResults');
        loadResultsTable();
        alert('All results have been cleared.');
    }
});
