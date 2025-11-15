// Quiz Application State
let currentCourse = null;
let currentCourseName = '';
let currentQuestionIndex = 0;
let userAnswers = [];
let quizResults = {
    correct: 0,
    total: 0
};

// DOM Elements
const homePage = document.getElementById('home-page');
const courseSelection = document.getElementById('course-selection');
const introWeekDetail = document.getElementById('intro-week-detail');
const programSelection = document.getElementById('program-selection');
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
    showPage('program-selection');
});

// Program Dropdown Change Handler
const programDropdown = document.getElementById('program-dropdown');
const startQuizBtn = document.getElementById('start-quiz-btn');

programDropdown.addEventListener('change', (e) => {
    const selectedProgram = e.target.value;
    if (selectedProgram) {
        startQuizBtn.disabled = false;
        currentCourse = selectedProgram;
        currentCourseName = quizData[selectedProgram].courseName;
    } else {
        startQuizBtn.disabled = true;
        currentCourse = null;
        currentCourseName = '';
    }
});

// Start Quiz Button Click
startQuizBtn.addEventListener('click', () => {
    if (currentCourse) {
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
});
