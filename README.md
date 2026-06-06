# 🏫 Springfield Academy - School Management System

A modern and responsive **School Management System** designed to streamline academic administration and improve communication between administrators, teachers, and students.

The system provides role-based access control with dedicated dashboards for **Admin**, **Teacher**, and **Student** users.

---

 📖 Overview

Springfield Academy School Management System is a web-based platform that helps educational institutions manage:

* Student Records
* Teacher Management
* Course Management
* Attendance Tracking
* Marks & Grading
* Course Enrollment
* Academic Statistics

The application is built using **HTML, CSS, JavaScript, and Firebase**, providing a fast, secure, and scalable solution.

---

 ✨ Features

# 👑 Admin Panel

The Admin has full control over the system.

 Key Features

* 📊 Dashboard with real-time statistics
* 👨‍🎓 Add new students
* 👨‍🎓 Delete students
* 👩‍🏫 Add new teachers
* 👩‍🏫 Delete teachers
* 📚 Create and manage courses
* ❌ Delete courses
* 🔗 Assign teachers to courses
* 📝 Enroll students into courses
* 🔍 Search students instantly
* 🔍 Search teachers instantly
* 📱 Fully responsive interface

 Auto Generated IDs

| Type       | Example |
| ---------- | ------- |
| Student ID | STU001  |
| Student ID | STU002  |
| Teacher ID | TCH001  |
| Teacher ID | TCH002  |

---

# 👩‍🏫 Teacher Panel

Teachers can manage their assigned courses and student performance.

 Key Features

* 📚 View assigned courses
* 👥 View enrolled students
* ✅ Mark attendance
* ❌ Record absences
* 📝 Enter student marks
* ✏️ Update marks anytime
* 🎯 Filter students by course
* 📊 Monitor attendance percentage
* 📈 Track student performance

---

# 👨‍🎓 Student Panel

Students can access their academic information and enroll in courses.

 Key Features

* 📚 View enrolled courses
* 🎓 View marks and grades
* 📅 View attendance percentage
* 👤 View personal profile
* ➕ Enroll in available courses
* 📊 Personal dashboard
* 📈 Academic progress tracking

---

 🎓 Grading System

| Marks    | Grade |
| -------- | ----- |
| 90 - 100 | A+    |
| 80 - 89  | A     |
| 70 - 79  | B     |
| 60 - 69  | C     |
| 50 - 59  | D     |
| Below 50 | F     |

---

 🚀 Live Demo
```text
https://lucky-beignet-b364b3.netlify.app/index.html
```

---

 🔐 Demo Credentials

# 👑 Administrator

| Field    | Value                                                 |
| -------- | ----------------------------------------------------- |
| Email    | [admin@springfield.com](mailto:admin@springfield.com) |
| Password | admin123                                              |

# 👩‍🏫 Teacher

| Field      | Value      |
| ---------- | ---------- |
| Teacher ID | TCH001     |
| Password   | teacher123 |

# 👨‍🎓 Student

| Field      | Value      |
| ---------- | ---------- |
| Student ID | STU001     |
| Password   | student123 |

---

 🛠️ Technology Stack

| Technology              | Purpose             |
| ----------------------- | ------------------- |
| HTML5                   | Structure           |
| CSS3                    | Styling             |
| JavaScript ES6+         | Application Logic   |
| Firebase Authentication | User Authentication |
| Firebase Firestore      | Database            |
| Chart.js                | Analytics & Charts  |
| Font Awesome 6          | Icons               |
| Google Fonts (Inter)    | Typography          |

---

 📁 Project Structure

```bash
springfield-academy/
│
├── index.html
├── login.html
│
├── css/
│   ├── style.css
│   ├── admin.css
│   ├── teacher.css
│   └── student.css
│
├── js/
│   ├── firebase-config.js
│   ├── auth.js
│   ├── admin.js
│   ├── teacher.js
│   ├── student.js
│   └── app.js
│
├── pages/
│   ├── admin-dashboard.html
│   ├── teacher-dashboard.html
│   └── student-dashboard.html
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── logo.png
│
├── README.md
│
└── firebase.json
```

---

 🔥 Firebase Configuration

Create a Firebase project and enable:

# Authentication

Enable:

* Email/Password Authentication

# Firestore Database

Create the following collections:

```text
students
teachers
courses
enrollments
attendance
marks
```

Add your Firebase configuration inside:

```javascript
firebase-config.js
```

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXXXXXXXX",
  appId: "YOUR_APP_ID"
};
```

---

 ⚙️ Installation

# Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/springfield-academy.git
```

# Navigate to Project

```bash
cd springfield-academy
```

# Open Project

Simply open:

```text
index.html
```

or deploy using:

* GitHub Pages
* Firebase Hosting
* Netlify
* Vercel

---

 📊 System Modules

# Student Management

* Add Students
* Delete Students
* Search Students
* Student Profiles

# Teacher Management

* Add Teachers
* Delete Teachers
* Assign Courses

# Course Management

* Create Courses
* Assign Teachers
* Student Enrollment

# Attendance Management

* Mark Attendance
* Attendance Reports
* Attendance Percentage

# Marks Management

* Add Marks
* Update Marks
* Grade Calculation

---

 🔒 Security Features

* Firebase Authentication
* Role-Based Access Control
* Protected Dashboards
* Secure Firestore Rules
* Session Management

---

 📱 Responsive Design

The application is optimized for:

* 💻 Desktop
* 📱 Mobile
* 📟 Tablet
* 🖥️ Large Screens

---

 🎯 Future Enhancements

* Online Exams
* Assignment Submission
* Student Messaging
* Parent Portal
* Fee Management
* Notifications System
* PDF Report Cards
* Attendance Analytics
* Email Alerts
* AI-Powered Student Insights

---

 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Create a Pull Request


 📄 License

This project is licensed under the MIT License.

---

 👨‍💻 Developed By
RAO ABDULLAH , SAAD MUNIR , HASSAN ABID

Building modern educational solutions for schools and institutions.

---

⭐ If you like this project, don't forget to star the repository.
