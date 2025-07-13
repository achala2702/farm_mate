from flask import Flask, request, jsonify
import io

#libraries for models to run
import tensorflow as tf
import numpy as np
import xgboost as xgb
import pickle

from datetime import datetime

#bg remove
from rembg import remove
from PIL import Image

app = Flask(__name__)

# Load the encoders for yield prediction model
with open("yield_prediction/label_encoders.pkl", "rb") as f:
    label_encoders = pickle.load(f)

# loading the yield prediction model
loaded_model = xgb.XGBRegressor() 
loaded_model.load_model("yield_prediction/xgboost_model.json")

#loading the disease detection model
cnn_model = tf.keras.models.load_model('disease_detection/plant_disease_detection_model.keras')

# Load class names from the file for disease detection model
with open('disease_detection/class_names.txt', 'r') as file:
    loaded_class_names = [line.strip() for line in file]

#preprocessing the image according to the models needs
def preprocess_image(image: Image.Image) -> np.ndarray:

    image = remove(image)

    image = image.convert("RGB")

    image = image.resize((128, 128))

    image_np = tf.keras.preprocessing.image.img_to_array(image)
    image_np = np.array([image_np])

    return image_np

# Function to predict yield for a given input
def predict_yield(crop, year, season, district, area_hectares):
    """Predicts total production for a given crop, season, district, and area in hectares."""
    crop_encoded = label_encoders['Crop'].transform([crop])[0]
    season_encoded = label_encoders['Season'].transform([season])[0]
    district_encoded = label_encoders['District'].transform([district])[0]
    
    # Predict yield per hectare
    yield_per_hectare = loaded_model.predict(np.array([[crop_encoded, year, season_encoded, district_encoded, area_hectares]]))[0]
    
    # Calculate total production
    total_production = yield_per_hectare * area_hectares
    return total_production

# disease ditection route
@app.route('/disease-detection', methods=['POST'])
def disease_detect():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file = request.files['image']
    image_bytes = file.read()

    try:
        image = Image.open(io.BytesIO(image_bytes))
        #processing image
        processed_image = preprocess_image(image)

        #making prediction
        predictions = cnn_model.predict(processed_image)
        result_index = np.argmax(predictions)
        model_prediction = loaded_class_names[result_index]

        return jsonify({
            "prediction": model_prediction,
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# yeiled preidction route
@app.route('/yield-prediction', methods=['POST'])
def yield_predict():

    try:
        data = request.get_json()

        crop = data.get("cropType")
        year = datetime.now().year
        season = data.get("season")
        district = data.get("district")
        area = data.get("area")

        # making prediction
        yield_prediction = predict_yield(crop, year, season, district, area)

        return jsonify({
            "prediction": yield_prediction,
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)


