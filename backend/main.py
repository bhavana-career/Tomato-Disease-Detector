from fastapi import FastAPI, UploadFile, File
import tensorflow as tf
import numpy as np
from PIL import Image
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
model = tf.keras.models.load_model(
    "../ml/models/tomato_model.h5"
)

DISEASE_INFO = {
    "Early Blight": {
        "cause": "Fungal disease caused by Alternaria solani.",
        "symptoms": "Dark concentric spots on older leaves.",
        "treatment": "Remove infected leaves and apply fungicide.",
        "prevention": "Avoid overhead watering and rotate crops."
    },

    "Late Blight": {
        "cause": "Caused by Phytophthora infestans.",
        "symptoms": "Large dark lesions with rapid spread.",
        "treatment": "Remove affected plants and apply fungicide immediately.",
        "prevention": "Improve airflow and avoid excessive moisture."
    },

    "Leaf Mold": {
        "cause": "High humidity fungal infection.",
        "symptoms": "Yellow spots on upper leaf surfaces.",
        "treatment": "Improve airflow and reduce humidity.",
        "prevention": "Maintain proper spacing between plants."
    },

    "Septoria Leaf Spot": {
        "cause": "Septoria lycopersici fungus.",
        "symptoms": "Small circular spots with dark borders.",
        "treatment": "Prune infected leaves and apply fungicide.",
        "prevention": "Avoid wet foliage and rotate crops."
    },

    "Healthy": {
        "cause": "No disease detected.",
        "symptoms": "Leaf appears healthy.",
        "treatment": "Continue regular care.",
        "prevention": "Maintain proper watering and nutrition."
    }
}
CLASS_NAMES = [
    "Early Blight",
    "Late Blight",
    "Leaf Mold",
    "Septoria Leaf Spot",
    "Healthy"
]


@app.get("/")
def home():
    return {"message": "TomaAI Backend Running 🚀"}


@app.get("/health")
def health():
    return {
        "status": "ok",
        "model_loaded": True
    }


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    
    image = Image.open(file.file).convert("RGB")
    image = image.resize((224, 224))

    image_array = np.array(image) / 255.0
    image_array = np.expand_dims(image_array, axis=0)

    prediction = model.predict(image_array)

    predicted_index = np.argmax(prediction)

    disease = CLASS_NAMES[predicted_index]

    confidence = float(np.max(prediction)) * 100

    return {
    "disease": disease,
    "confidence": round(confidence, 2),
    **DISEASE_INFO[disease]
}