# FarmMate

## Overview

This project consists of multiple components:

- A **Flask backend** serving Machine Learning models.
- A **Next.js frontend** (coming soon).
- A **Spring Boot backend** (coming soon).

---

## Machine Learning Backend (Flask)

### Setup

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
pillow==11.3.0 \
rembg==2.0.67
```

2. **Run the Flask ML server:**

```bash
cd machine_learning
python app.py
```