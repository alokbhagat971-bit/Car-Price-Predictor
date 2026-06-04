import { useLocation, useNavigate } from "react-router-dom";
import {
  CheckCircle,
  Shield,
  TrendingUp,
  Clock3,
  Building2,
  Car,
  Calendar,
  Fuel,
  Gauge,
  Download,
  RefreshCw,
} from "lucide-react";

import car2 from "../images/car2.png";

function OutputPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const predictedPrice = location.state?.predictedPrice || 0;
  const company = location.state?.company || "";
  const name = location.state?.name || "";
  const year = location.state?.year || "";
  const fuelType = location.state?.fuel_type || "";
  const kmsDriven = location.state?.kms_driven || 0;

  const currentYear = new Date().getFullYear();
const vehicleAge = currentYear - Number(year);

let mileageCategory = "";
if (kmsDriven < 30000) {
  mileageCategory = "Low Mileage";
} else if (kmsDriven < 100000) {
  mileageCategory = "Average Mileage";
} else {
  mileageCategory = "High Mileage";
}

let condition = "";
if (vehicleAge <= 5 && kmsDriven < 50000) {
  condition = "Excellent";
} else if (vehicleAge <= 10 && kmsDriven < 100000) {
  condition = "Good";
} else if (vehicleAge <= 15) {
  condition = "Fair";
} else {
  condition = "Poor";
}

let depreciation = "";
if (vehicleAge <= 5) {
  depreciation = "Low";
} else if (vehicleAge <= 10) {
  depreciation = "Medium";
} else if (vehicleAge <= 15) {
  depreciation = "High";
} else {
  depreciation = "Very High";
}

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      {/* Navbar */}
      <div className="bg-white rounded-xl shadow-sm border px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white p-2 rounded-lg">
            <Car size={18} />
          </div>

          <h1 className="font-bold text-slate-800 text-lg">
            Car Price Predictor
          </h1>
        </div>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2"
        >
          <RefreshCw size={16} />
          Predict Another
        </button>

      </div>

      {/* Success Message */}
      <div className="mt-6 bg-white border rounded-xl p-4 shadow-sm">

        <div className="flex items-center gap-3">

          <CheckCircle className="text-green-500" />

          <div>
            <h3 className="font-semibold text-green-600">
              Prediction Completed Successfully!
            </h3>

            <p className="text-sm text-gray-500">
              Here is the estimated selling price of your car.
            </p>
          </div>

        </div>

      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6 mt-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* Price Card */}
          <div className="bg-white rounded-2xl shadow-sm border p-6">

            <p className="text-gray-500 text-sm">
              Estimated Selling Price
            </p>

            <h1 className="text-6xl font-bold text-blue-700 mt-2">
              ₹ {Number(predictedPrice).toLocaleString()}
            </h1>


            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">

  <div className="border rounded-xl p-4">
    <Calendar className="text-blue-500 mb-2" />
    <h3 className="font-bold text-xl">{year}</h3>
    <p className="text-gray-500 text-sm">
      Manufacturing Year
    </p>
  </div>

  <div className="border rounded-xl p-4">
    <Fuel className="text-green-500 mb-2" />
    <h3 className="font-bold text-xl">{fuelType}</h3>
    <p className="text-gray-500 text-sm">
      Fuel Type
    </p>
  </div>

  <div className="border rounded-xl p-4">
    <Gauge className="text-purple-500 mb-2" />
    <h3 className="font-bold text-xl">
      {Number(kmsDriven).toLocaleString()}
    </h3>
    <p className="text-gray-500 text-sm">
      Kilometers Driven
    </p>
  </div>

</div>



          </div>

          {/* Market Insights */}
          <div className="bg-white rounded-2xl shadow-sm border p-6">

  <h3 className="font-bold text-2xl mb-6">
    Vehicle Analysis
  </h3>

  <div className="grid md:grid-cols-4 gap-4">

    {/* Vehicle Age */}

    <div className="border rounded-2xl p-5 text-center">
      <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
        <Calendar className="text-blue-600" />
      </div>

      <h4 className="font-semibold">
        Vehicle Age
      </h4>

      <p className="text-3xl font-bold text-blue-600 mt-2">
        {vehicleAge}
      </p>

      <p className="text-gray-500 text-sm">
        Years Old
      </p>
    </div>

    {/* Mileage */}

    <div className="border rounded-2xl p-5 text-center">
      <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
        <Gauge className="text-green-600" />
      </div>

      <h4 className="font-semibold">
        Mileage Category
      </h4>

      <p className="text-xl font-bold text-green-600 mt-2">
        {mileageCategory}
      </p>

      <p className="text-gray-500 text-sm">
        {kmsDriven.toLocaleString()} km driven
      </p>
    </div>

    {/* Condition */}

    <div className="border rounded-2xl p-5 text-center">
      <div className="w-14 h-14 mx-auto rounded-full bg-yellow-100 flex items-center justify-center mb-4">
        <Shield className="text-yellow-600" />
      </div>

      <h4 className="font-semibold">
        Condition
      </h4>

      <p className="text-xl font-bold text-yellow-600 mt-2">
        {condition}
      </p>

      <p className="text-gray-500 text-sm">
        Based on age & mileage
      </p>
    </div>

    {/* Depreciation */}

    <div className="border rounded-2xl p-5 text-center">
      <div className="w-14 h-14 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-4">
        <TrendingUp className="text-red-600 rotate-180" />
      </div>

      <h4 className="font-semibold">
        Depreciation
      </h4>

      <p className="text-xl font-bold text-red-600 mt-2">
        {depreciation}
      </p>

      <p className="text-gray-500 text-sm">
        Value reduction over time
      </p>
    </div>

  </div>

  {/* Explanation */}

  <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-5">

    <h4 className="font-semibold text-blue-700 mb-2">
      Prediction Explanation
    </h4>

    <p className="text-gray-700 leading-relaxed">
      This vehicle is approximately{" "}
      <strong>{vehicleAge} years old</strong> and has{" "}
      <strong>{kmsDriven.toLocaleString()} km</strong> recorded usage.
      Based on the vehicle age, fuel type, model, and mileage, the
      machine learning model estimates a selling price of{" "}
      <strong>
        ₹ {Number(predictedPrice).toLocaleString()}
      </strong>.
    </p>

  </div>

</div>



        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">

  <h2 className="font-bold text-lg mb-4">
    Your Vehicle Summary
  </h2>

  <img
    src={car2}
    alt="Car"
    className="w-full max-w-xs mx-auto"
  />

  <div className="space-y-4 mt-6">

    <div className="flex justify-between border-b pb-3">
      <div className="flex items-center gap-2">
        <Building2 size={18} />
        Company
      </div>
      <span>{company}</span>
    </div>

    <div className="flex justify-between border-b pb-3">
      <div className="flex items-center gap-2">
        <Car size={18} />
        Model
      </div>
      <span>{name}</span>
    </div>

    <div className="flex justify-between border-b pb-3">
      <div className="flex items-center gap-2">
        <Calendar size={18} />
        Year
      </div>
      <span>{year}</span>
    </div>

    <div className="flex justify-between border-b pb-3">
      <div className="flex items-center gap-2">
        <Fuel size={18} />
        Fuel
      </div>
      <span>{fuelType}</span>
    </div>

    <div className="flex justify-between border-b pb-3">
      <div className="flex items-center gap-2">
        <Gauge size={18} />
        Kilometers
      </div>
      <span>{Number(kmsDriven).toLocaleString()} km</span>
    </div>

  </div>

  <div className="grid grid-cols-2 gap-3 mt-8">

    <button className="border rounded-xl py-3 flex justify-center items-center gap-2 hover:bg-gray-50">
      <Download size={18} />
      Report
    </button>

    <button
      onClick={() => navigate("/")}
      className="bg-blue-600 text-white rounded-xl py-3 flex justify-center items-center gap-2 hover:bg-blue-700"
    >
      <RefreshCw size={18} />
      Predict Again
    </button>

  </div>

</div>

      </div>

    </div>
  );
}

export default OutputPage;