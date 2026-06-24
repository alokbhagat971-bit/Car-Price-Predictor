from flask import Flask,request, jsonify
from flask_cors import CORS
import pandas as pd
import pickle

app = Flask(__name__)
CORS(app)

model = pickle.load(open("LinearRegressionModel.pkl", "rb"))

print('Model Loaded')

@app.route("/")
def home():
    return "Backend is running"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    input_df=pd.DataFrame([{
        "name":data["name"],
        "company":data["company"],
        "year":data["year"],
        "kms_driven":data["kms_driven"],
        "fuel_type":data["fuel_type"],
    }])

    prediction = model.predict(input_df)

    return jsonify({
        "predicted_price": round(float(prediction[0]), 2)
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)