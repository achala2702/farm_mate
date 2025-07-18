# FarmMate

## Overview

This project consists of multiple components:

- A **Flask backend** serving Machine Learning models.
- A **Next.js frontend** for the user interface.
- A **Spring Boot backend** handling core API functionality.

---

## 🚧 Project Status

This is an ongoing project. Currently:

- ✅ The **Machine Learning backend (Flask)** is fully functional.
- ✅ The **frontend (Next.js)** and **backend (Spring Boot)** are set up and integrated with the ML module.
- ⚠️ Other features like **community forum**, **user profiles**, **user authentication**, and additional routes are still under development.

---

## Machine Learning Backend (Flask)

### Setup

> ⚠️ **Python 3.10 is required** to ensure compatibility with TensorFlow and other dependencies.

1. **Install Python dependencies:**

```bash
pip install xgboost==3.0.2 \
tensorflow==2.10.0 \
scikit-learn==1.3.0 \
numpy==1.24.3 \
matplotlib==3.7.2 \
seaborn==0.13.0 \
pandas==2.1.0 \
librosa==0.10.1 \
flask==3.1.1 \
onnxruntime==1.22.1 \
pillow==11.3.0 \
rembg==2.0.67
```

2. **Run the Flask ML server:**

```bash
cd machine_learning
python app.py
```
## Core Backend (Spring Boot)

### Setup
✅ Ensure you have **Java 21+** and **Maven** installed.

1. **Navigate to the Spring Boot project directory:**
   ```bash
   cd backend
   ```

2. **Run the backend server:**
   ```bash
   ./mvnw spring-boot:run
   ```

By default, the server runs at: `http://localhost:8080/api`

## Frontend (Next.js)

### Setup
✅ Ensure you have **Node.js 22+** and **Yarn** or **npm** installed.

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Create a `.env.local` file:**
   ```bash
   touch .env.local
   ```

3. **Add the following line to `.env.local`:**
   ```bash
   BACKEND_URL=http://localhost:8080/api
   ```

4. **Install dependencies:**
   ```bash
   yarn install # or npm install
   ```

5. **Run the development server:**
   ```bash
   yarn dev # or npm run dev
   ```

The frontend will be available at: `http://localhost:3000/forum`