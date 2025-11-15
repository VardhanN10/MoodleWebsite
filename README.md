# University Quiz System - Mandatory Test

A Moodle-inspired quiz application for university master course fundamentals assessment with integrated German student life and waste separation rules.

## 📋 Features

- **4 Master Courses** (10 questions each):
  1. **Computer Engineering for IoT System** - MQTT, Arduino, ESP32, sensors, protocols
  2. **Environmental and Recycling Technology** - Circular economy, LCA, waste-to-energy, Pfand system
  3. **Renewable Energy System** - Solar, wind, geothermal, energy storage, LCOE
  4. **Mechatronics** - Control systems, actuators, sensors, PID, robotics

- **German Integration** (3-4 questions per course):
  - **Waste Separation Rules**: Gelber Sack, Papiertonne, Biotonne, Restmüll, glass recycling
  - **Student Life**: Anmeldung, health insurance, semester ticket, Ruhezeiten, Pfand system

- **Moodle-like Interface**: Clean, professional UI matching college Moodle design
- **Multi-page Navigation**: Home → My Courses → Introductory Week → Select Program → Quiz
- **Instant Feedback**: Shows correct/incorrect with detailed explanations
- **Image Support**: 4-5 image-based questions per course (23 images total)
- **Progress Tracking**: Visual progress bar and question counter
- **Results Page**: Score display with review option

## 🚀 Getting Started

### Option 1: Simple Start
1. Open `index.html` in any modern web browser
2. That's it! No server or installation needed.

### Option 2: Local Server (Recommended for images)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Then open: http://localhost:8000
```

## 📝 Navigation Flow

```
Home Page (Welcome)
    ↓
My Courses (Select a course)
    ↓
Course Detail (Mandatory Test section)
    ↓
Quiz (Answer questions)
    ↓
Results (View score & review)
```

## 🖼️ Adding Images to Questions

### Step 1: Create an images folder
```
Prashanth Anna/
├── index.html
├── styles.css
├── app.js
├── quizData.js
├── images/          ← Create this folder
│   ├── iot/         ← Course-specific folders
│   ├── ert/
│   ├── res/
│   └── mecha/
```

### Step 2: Add your images
Place images in course-specific folders:
- `images/iot/question1.png`
- `images/ert/question2.jpg`
- etc.

### Step 3: Update quizData.js
Open `quizData.js` and change the `image` field from `null` to your image path:

**Before:**
```javascript
{
    id: 1,
    question: "What is the time complexity...",
    image: null,  // ← Currently no image
    options: [...],
}
```

**After:**
```javascript
{
    id: 1,
    question: "What is the time complexity...",
    image: "images/iot/binary-search.png",  // ← Add image path
    options: [...],
}
```

## 📚 Adding/Editing Questions

### Edit questions in `quizData.js`

```javascript
{
    id: 1,
    question: "Your question text here?",
    image: null,  // or "images/course/image.png"
    options: [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
    ],
    correctAnswer: 1,  // Index of correct answer (0-3)
    explanation: "Detailed explanation of the correct answer."
}
```

### Course IDs:
- `iot` - Computer Engineering for IoT System
- `ert` - Environmental and Recycling Technology
- `res` - Renewable Energy System
- `mecha` - Mechatronics

## 🎨 Customization

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0f6cbf;     /* Main blue color */
    --primary-hover: #0a5294;     /* Darker blue on hover */
    --success-color: #5cb85c;     /* Green for correct */
    --danger-color: #d9534f;      /* Red for incorrect */
}
```

### Update Course Names
Edit both:
1. `quizData.js` - Change `courseName` values
2. `index.html` - Update course card titles

### Add More Questions
Simply add more question objects to the `questions` array in `quizData.js`:
```javascript
iot: {
    courseName: "Computer Engineering for IoT System",
    questions: [
        { /* question 1 */ },
        { /* question 2 */ },
        { /* question 3 */ },
        { /* Add more here */ }
    ]
}
```

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🔧 Technical Details

- **No dependencies**: Pure HTML, CSS, and JavaScript
- **No build process**: Works directly in browser
- **Modern browsers**: Chrome, Firefox, Safari, Edge
- **Local storage ready**: Can be extended to save progress

## 📂 File Structure

```
Prashanth Anna/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling (Moodle-like design)
├── app.js              # Application logic
├── quizData.js         # All quiz questions and answers
├── README.md           # This file
│
└── images/             # (Optional) For question images
    ├── iot/
    ├── ert/
    ├── res/
    └── mecha/
```

## 💡 Tips

1. **Testing**: Use the "Review Answers" button to see all questions with feedback
2. **Navigation**: Use breadcrumbs to go back to previous pages
3. **Images**: Keep image files under 500KB for faster loading
4. **Questions**: Aim for 5-10 questions per course for best user experience

## 🎯 Future Enhancements (Optional)

- Timer for each quiz
- Save progress to localStorage
- Export results as PDF
- Admin panel to add questions
- Database integration
- Multi-language support

## 📞 Support

If you need help customizing the quiz:
1. Check the comments in `quizData.js`
2. Review the examples in this README
3. Test changes by refreshing the browser

## ✅ Checklist for Deployment

- [ ] Add all course-specific questions
- [ ] Add images (if needed)
- [ ] Test all navigation flows
- [ ] Test on mobile devices
- [ ] Update welcome message
- [ ] Customize colors (if needed)
- [ ] Add university logo (optional)

---

**Version**: 1.0
**Last Updated**: 2025
**Compatible**: All modern browsers
