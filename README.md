# 🧠 MindTrace — Knowledge Decay Tracker

MindTrace is a full-stack web application that helps users **track, visualize, and manage knowledge over time** by modeling how human memory naturally decays if not revised.

Instead of treating learning as a static checklist, MindTrace introduces **memory strength**, **decay curves**, and **revision-based recovery**.

---

## 🚀 Live Demo
👉 Frontend: https://mern-knowledge-decay-tracker.vercel.app  
👉 Backend API: https://mern-knowledge-decay-tracker.onrender.com

---

## 📌 Problem Statement

People forget what they learn over time — a phenomenon known as **knowledge decay**.  
Most note-taking or productivity apps do not account for *when* information should be revised.

As a result:
- Knowledge fades silently
- Revision is unstructured
- Learning becomes inefficient

---

## 💡 Solution

MindTrace models learning as a **dynamic system**:

- Every knowledge item has a **strength score**
- Strength decays over time based on **difficulty**
- Revising knowledge restores its strength
- Users can **visualize decay using charts**

This allows users to:
- See what they’re about to forget
- Revise at the right time
- Build long-term retention habits

---

## ✨ Key Features

- 🔐 Secure authentication (JWT + HTTP-only cookies)
- 📉 Exponential knowledge decay modeling
- 🔁 Revision system to restore memory strength
- 📊 Interactive decay line charts
- 🧠 Difficulty-based decay rates
- 🎨 Modern animated UI (Tailwind + Framer Motion)
- 📱 Fully responsive design

---

## 🧰 Tech Stack

### Frontend
- React
- Tailwind CSS
- Framer Motion
- Recharts
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Mongoose

---

## 🏗️ Architecture Overview

- **Backend** is the single source of truth
  - Calculates decay
  - Handles revision logic
  - Manages authentication

- **Frontend**
  - Fetches computed data
  - Renders charts and animations

- **Authentication**
  - JWT stored in HTTP-only cookies
  - Secure across refreshes and sessions

---

## 📊 Knowledge Decay Logic

Memory strength decays using an exponential decay formula:


- `decayRate` depends on difficulty
- Revision resets the decay curve
- Strength is clamped between 0–100

---

## 📦 Environment Setup (Local)

### Backend

- npm install
- npm run server

### Frontend

- npm install
- npm run dev

### Test user login info

- Email: test@test.com
- Password: testpass
