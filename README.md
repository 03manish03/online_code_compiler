# 🚀 MERN + Docker Online Code Compiler

<p align="center">
  <img src="https://img.shields.io/badge/MERN-Stack-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Docker-Containerized-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Frontend-ReactJS-61dafb?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Backend-NodeJS-success?style=for-the-badge" />
</p>

---

# 🌐 Project Overview

An advanced **Online Code Compiler** built using the **MERN Stack** and **Docker Containerization** that allows users to write, compile, and execute code securely in multiple programming languages directly from the browser.

This project demonstrates real-world implementation of:

* Full-Stack Web Development
* REST APIs
* Docker Containerization
* Secure Code Execution
* Backend Architecture
* DevOps Fundamentals
* Multi-language Runtime Systems

Inspired by platforms like:

* LeetCode
* HackerRank
* CodeChef

---

# 📸 Project Preview

<img width="1919" height="1015" alt="image" src="https://github.com/user-attachments/assets/42944b34-ab3a-41a3-9e26-f5fcfe51214b" />


<img width="100%" alt="Online Compiler UI" src="https://raw.githubusercontent.com/github/explore/main/topics/react/react.png">

---

# ✨ Features

## ✅ Currently Implemented Languages

| Language   | Status |
| ---------- | ------ |
| Python     | ✅      |
| JavaScript | ✅      |
| C++        | ✅      |

---

## 🚀 Planned Future Language Support (10+ Languages)

| Language   | Planned |
| ---------- | ------- |
| Java       | ✅       |
| C          | ✅       |
| Go         | ✅       |
| Rust       | ✅       |
| PHP        | ✅       |
| TypeScript | ✅       |
| Kotlin     | ✅       |
| Swift      | ✅       |
| Ruby       | ✅       |
| R          | ✅       |
| Bash       | ✅       |
| Perl       | ✅       |

---

# ⚡ Key Features

* 🔥 Real-time code execution
* 🐳 Docker-based isolated execution
* 💻 Monaco Editor integration (VS Code-like editor)
* 🌐 MERN Stack architecture
* ⚙️ REST API communication
* 📂 Temporary file execution system
* 🛡️ Secure containerized runtime
* 🎯 Beginner-friendly project structure
* 🚀 Responsive frontend UI

---

# 🛠️ Tech Stack

# Frontend

* React.js
* Vite
* Axios
* Monaco Editor

# Backend

* Node.js
* Express.js

# DevOps / Runtime

* Docker
* Docker Containers

# Version Control

* Git
* GitHub

---

# 🏗️ System Architecture

```bash
Frontend (React)
        ↓
Axios API Requests
        ↓
Express Backend
        ↓
Docker Service
        ↓
Container Execution
        ↓
Program Output
        ↓
Frontend Display
```

---

# 📂 Folder Structure

```bash
online-code-compiler/
│
├── backend/
│   ├── controllers/
│   │   └── executeController.js
│   │
│   ├── routes/
│   │   └── executeRoutes.js
│   │
│   ├── services/
│   │   └── dockerService.js
│   │
│   ├── temp/
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CodeEditor.jsx
│   │   │   ├── LanguageSelector.jsx
│   │   │   └── OutputBox.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── docker-images/
│   ├── python/
│   ├── javascript/
│   └── cpp/
│
└── README.md
```

---

# 🐳 Docker Implementation

This project uses Docker containers to securely execute user code.

Each language has:

* Separate Docker Image
* Isolated Runtime Environment
* Temporary Execution Container

Example Execution:

```bash
docker run --rm python-runner python main.py
```

## Why Docker?

Docker ensures:

* Secure execution
* Sandboxed environments
* Automatic cleanup
* Language isolation
* Better scalability

---

# 🚀 Installation & Setup

# Clone Repository

```bash
git clone YOUR_REPOSITORY_URL
```

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

# Backend Setup

```bash
cd backend
npm install
npm run dev
```

# Docker Image Build

```bash
docker build -t python-runner ./docker-images/python
docker build -t js-runner ./docker-images/javascript
docker build -t cpp-runner ./docker-images/cpp
```

---

# 💡 Learning Outcomes

Through this project, I learned:

* Full-stack MERN integration
* Backend API development
* Docker containerization
* Code execution architecture
* DevOps fundamentals
* Error debugging & troubleshooting
* Frontend-backend communication
* Real-world project structuring

---

# 🔮 Future Improvements

* 🌙 Dark / Light themes
* 🔐 Authentication System
* 💾 Save Code Feature
* 🧠 AI Code Suggestions
* 📥 Custom Input Support
* ⚡ Execution Timeout
* 📊 Memory & CPU Limits
* ☁️ AWS Deployment
* 👥 Collaborative Coding
* 🧪 Multiple Test Cases
* 🏆 Judge0 Integration
* 📱 Mobile Responsive Design

---

# 👨‍💻 About the Developer

# Manish Charpe

Passionate Full-Stack Developer focused on building scalable and practical web applications using modern technologies.

## 🚀 Skills

* MERN Stack
* React.js
* Node.js
* Express.js
* MongoDB
* Docker
* REST APIs
* JavaScript
* Git & GitHub
* Frontend Development
* Backend Architecture

---

## 🎯 Interests

* Full-Stack Development
* Backend Systems
* DevOps
* System Design
* Scalable Applications
* Real-World Engineering Projects

---

# 🌐 Connect With Me

## GitHub

https://github.com/03manish03

## LinkedIn

https://www.linkedin.com/in/manish-charpe-880716277/

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub.

---

# 📌 Project Status

🚧 Active Development Ongoing

New features and language support are continuously being added.

---
