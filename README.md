#  TomaAI – Tomato Disease Detection System

TomaAI is an AI-powered web application that detects diseases in tomato leaves from uploaded images. The system uses a trained TensorFlow deep learning model served through a FastAPI backend and a modern React frontend.

Users can upload an image of a tomato leaf and instantly receive:

* Disease prediction
* Confidence score
* Treatment recommendation

The goal of this project is to assist farmers, gardeners, and agricultural researchers in identifying tomato plant diseases quickly and accurately.

---

#  Features

### AI Disease Detection

Upload a tomato leaf image and receive:

* Predicted disease class
* Confidence percentage
* Treatment recommendation

### Modern User Interface

* Responsive design
* Light and dark mode support
* Drag-and-drop image upload
* Real-time prediction display

### FastAPI Backend

* REST API architecture
* Fast image processing
* TensorFlow model integration
* Swagger API documentation

### Extensible Architecture

Designed to support future features such as:

* User authentication
* Prediction history
* Cloud image storage
* Multiple crop support
* Mobile application integration

---

#  Supported Disease Classes

Current model supports:

1. Healthy
2. Early Blight
3. Late Blight
4. Leaf Mold
5. Septoria Leaf Spot

Additional disease classes can be added by retraining the model.

---

#  System Architecture

```text
User
 │
 ▼
React Frontend
 │
 ▼
FastAPI Backend
 │
 ▼
TensorFlow Model
 │
 ▼
Prediction Result
```

### Workflow

1. User uploads a tomato leaf image.
2. Frontend sends image to FastAPI API.
3. Backend preprocesses image.
4. TensorFlow model performs inference.
5. Prediction result is returned.
6. Frontend displays diagnosis and recommendation.

---

#  Technology Stack

## Frontend

* React
* TypeScript
* Vite
* TanStack Router
* Tailwind CSS
* ShadCN UI

## Backend

* FastAPI
* Uvicorn
* TensorFlow
* NumPy
* Pillow

## Machine Learning

* TensorFlow / Keras
* Convolutional Neural Network (CNN)

## Development Tools

* Git
* GitHub
* VS Code
* Lovable

---

# 📂 Project Structure

```text
tomato_ml/
│
├── backend/
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
│
├── ml/
│   ├── models/
│   └── requirements.txt
│
├── .gitignore
└── README.md
```

---

#  Installation

## 1. Clone Repository

```bash
git clone https://github.com/bhavana-career/Tomato-Disease-Detector.git

cd Tomato-Disease-Detector
```

---

## 2. Backend Setup

Navigate to backend directory:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate virtual environment:

### Windows

```bash
venv\Scripts\activate
```

### Linux / Mac

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## 3. Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend will be available at:

```text
http://localhost:3000
```

or

```text
http://localhost:5173
```

depending on Vite configuration.

---

## 4. Run Backend Server

Navigate to backend directory:

```bash
cd backend
```

Start FastAPI server:

```bash
python -m uvicorn main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

Swagger Documentation:

```text
http://127.0.0.1:8000/docs
```

---

#  API Endpoints

## Home

```http
GET /
```

Response:

```json
{
  "message": "TomaAI Backend Running "
}
```

---

## Health Check

```http
GET /health
```

Response:

```json
{
  "status": "ok",
  "model_loaded": true
}
```

---

## Disease Prediction

```http
POST /predict
```

### Request

Multipart form-data containing image file.

### Response

```json
{
  "disease": "Late Blight",
  "confidence": 77.5,
  "recommendation": "Remove affected plants and apply fungicide immediately."
}
```

---

#  Example Prediction

Input:

* Tomato leaf image

Output:

```json
{
  "disease": "Late Blight",
  "confidence": 77.5,
  "recommendation": "Remove affected plants and apply fungicide immediately."
}
```

---

# Machine Learning Model

The application uses a TensorFlow CNN model trained on tomato leaf disease images.

### Image Processing Pipeline

1. Image upload
2. RGB conversion
3. Resize to 224 × 224
4. Normalization
5. Model prediction
6. Confidence calculation
7. Result generation

---

#  Model File

The trained model file is intentionally excluded from GitHub.

Expected location:

```text
ml/models/tomato_model.h5
```

If cloning this repository, place the trained model in the above directory before running the backend.

---

#  Future Improvements

## Authentication

* Google Sign-In
* User profiles

## Cloud Integration

* Cloud image storage
* Prediction history

## AI Enhancements

* Additional crop disease detection
* Improved model accuracy
* Explainable AI visualizations

## Mobile Support

* Progressive Web App (PWA)
* Android application
* iOS application

---

#  Current Project Status

 TensorFlow Model Integrated

 FastAPI Backend Completed

 React Frontend Completed

 Image Upload and Prediction Working

 Disease Recommendation System Implemented

 Authentication (Planned)

 Cloud Storage (Planned)

 Prediction History (Planned)

---

#  Author

**Bhavana Shivakumar**

AI & Machine Learning Enthusiast

Built as a full-stack machine learning project combining deep learning, backend engineering, and modern frontend development.

---

#  Acknowledgements

* TensorFlow
* FastAPI
* React
* TanStack Router
* Tailwind CSS
* Lovable
* Open Source Community

# Demo 

https://tomaai.lovable.app/
