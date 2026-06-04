import { useState } from "react";
import axios from "axios";
import { ShieldCheck,
        TrendingUp, 
        Lock,
        Calculator,
        Building2,
        Car,
        Calendar,
        Fuel,
        Gauge,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import car from "../images/car.png";

function HomePage() {
  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    name:"",
    company:"",
    year:0,
    fuel_type:"",
    kms_driven:0
  });

  const companies = [
    "Audi",
  "BMW",
  "Chevrolet",
  "Datsun",
  "Fiat",
  "Force",
  "Ford",
  "Hindustan",
  "Honda",
  "Hyundai",
  "Jaguar",
  "Jeep",
  "Land",
  "Mahindra",
  "Maruti",
  "Mercedes",
  "Mini",
  "Mitsubishi",
  "Nissan",
  "Renault",
  "Skoda",
  "Tata",
  "Toyota",
  "Volkswagen",
  "Volvo"
  ];

  const fuelTypes = ["Petrol", "Diesel", "LPG"];

  const years = [
  2019, 2018, 2017, 2016, 2015,
  2014, 2013, 2012, 2011, 2010,
  2009, 2008, 2007, 2006, 2005,
  2004, 2003, 2002, 2001, 2000,
  1999, 1998, 1997, 1996, 1995
];

const names = [
  "Audi A3 Cabriolet",
  "Audi A4 1.8",
  "Audi A4 2.0",
  "Audi A6 2.0",
  "Audi A8",
  "Audi Q3 2.0",
  "Audi Q5 2.0",
  "Audi Q7",
  "BMW 3 Series",
  "BMW 5 Series",
  "BMW 7 Series",
  "BMW X1",
  "BMW X1 sDrive20d",
  "BMW X1 xDrive20d",
  "Chevrolet Beat",
  "Chevrolet Beat Diesel",
  "Chevrolet Beat LS",
  "Chevrolet Beat LT",
  "Chevrolet Beat PS",
  "Chevrolet Cruze LTZ",
  "Chevrolet Enjoy",
  "Chevrolet Enjoy 1.4",
  "Chevrolet Sail 1.2",
  "Chevrolet Sail UVA",
  "Chevrolet Spark",
  "Chevrolet Spark 1.0",
  "Chevrolet Spark LS",
  "Chevrolet Spark LT",
  "Chevrolet Tavera LS",
  "Chevrolet Tavera Neo",
  "Datsun GO T",
  "Datsun Go Plus",
  "Datsun Redi GO",
  "Fiat Linea Emotion",
  "Fiat Petra ELX",
  "Fiat Punto Emotion",
  "Force Motors Force",
  "Force Motors One",
  "Ford EcoSport",
  "Ford EcoSport Ambiente",
  "Ford EcoSport Titanium",
  "Ford EcoSport Trend",
  "Ford Endeavor 4x4",
  "Ford Fiesta",
  "Ford Fiesta SXi",
  "Ford Figo",
  "Ford Figo Diesel",
  "Ford Figo Duratorq",
  "Ford Figo Petrol",
  "Ford Fusion 1.4",
  "Ford Ikon 1.3",
  "Ford Ikon 1.6",
  "Honda Accord",
  "Honda Amaze",
  "Honda Amaze 1.2",
  "Honda Amaze 1.5",
  "Honda Brio",
  "Honda Brio V",
  "Honda Brio VX",
  "Honda City",
  "Honda City 1.5",
  "Honda City SV",
  "Honda City VX",
  "Honda City ZX",
  "Honda Jazz S",
  "Honda Jazz VX",
  "Honda Mobilio",
  "Honda Mobilio S",
  "Honda WR V",
  "Hindustan Motors Ambassador",
  "Hyundai Accent",
  "Hyundai Accent Executive",
  "Hyundai Accent GLE",
  "Hyundai Accent GLX",
  "Hyundai Creta",
  "Hyundai Creta 1.6",
  "Hyundai Elantra 1.8",
  "Hyundai Elantra SX",
  "Hyundai Elite i20",
  "Hyundai Eon",
  "Hyundai Eon D",
  "Hyundai Eon Era",
  "Hyundai Eon Magna",
  "Hyundai Eon Sportz",
  "Hyundai Fluidic Verna",
  "Hyundai Getz",
  "Hyundai Getz GLE",
  "Hyundai Getz Prime",
  "Hyundai Grand i10",
  "Hyundai i10",
  "Hyundai i10 Era",
  "Hyundai i10 Magna",
  "Hyundai i10 Sportz",
  "Hyundai i20",
  "Hyundai i20 Active",
  "Hyundai i20 Asta",
  "Hyundai i20 Magna",
  "Hyundai i20 Select",
  "Hyundai i20 Sportz",
  "Hyundai Santro",
  "Hyundai Santro AE",
  "Hyundai Santro Xing",
  "Hyundai Sonata Transform",
  "Hyundai Verna",
  "Hyundai Verna 1.4",
  "Hyundai Verna 1.6",
  "Hyundai Verna Fluidic",
  "Hyundai Verna Transform",
  "Hyundai Verna VGT",
  "Hyundai Xcent Base",
  "Hyundai Xcent SX",
  "Jaguar XE XE",
  "Jaguar XF 2.2",
  "Jeep Wrangler Unlimited",
  "Land Rover Freelander",
  "Mahindra Bolero DI",
  "Mahindra Bolero Power",
  "Mahindra Bolero SLE",
  "Mahindra Jeep CL550",
  "Mahindra Jeep MM",
  "Mahindra KUV100",
  "Mahindra KUV100 K8",
  "Mahindra Logan",
  "Mahindra Logan Diesel",
  "Mahindra Quanto C4",
  "Mahindra Quanto C8",
  "Mahindra Scorpio",
  "Mahindra Scorpio 2.6",
  "Mahindra Scorpio LX",
  "Mahindra Scorpio S10",
  "Mahindra Scorpio S4",
  "Mahindra Scorpio SLE",
  "Mahindra Scorpio SLX",
  "Mahindra Scorpio VLX",
  "Mahindra Scorpio Vlx",
  "Mahindra Scorpio W",
  "Mahindra Thar CRDe",
  "Mahindra TUV300 T4",
  "Mahindra TUV300 T8",
  "Mahindra XUV500",
  "Mahindra XUV500 W10",
  "Mahindra XUV500 W6",
  "Mahindra XUV500 W8",
  "Mahindra Xylo D2",
  "Mahindra Xylo E4",
  "Mahindra Xylo E8",
  "Maruti Suzuki 800",
  "Maruti Suzuki A",
  "Maruti Suzuki Alto",
  "Maruti Suzuki Baleno",
  "Maruti Suzuki Celerio",
  "Maruti Suzuki Ciaz",
  "Maruti Suzuki Dzire",
  "Maruti Suzuki Eeco",
  "Maruti Suzuki Ertiga",
  "Maruti Suzuki Esteem",
  "Maruti Suzuki Estilo",
  "Maruti Suzuki Maruti",
  "Maruti Suzuki Omni",
  "Maruti Suzuki Ritz",
  "Maruti Suzuki S",
  "Maruti Suzuki Stingray",
  "Maruti Suzuki Swift",
  "Maruti Suzuki SX4",
  "Maruti Suzuki Versa",
  "Maruti Suzuki Vitara",
  "Maruti Suzuki Wagon",
  "Maruti Suzuki Zen",
  "Mercedes Benz A",
  "Mercedes Benz B",
  "Mercedes Benz C",
  "Mercedes Benz GLA",
  "Mini Cooper S",
  "Mitsubishi Lancer 1.8",
  "Mitsubishi Pajero Sport",
  "Nissan Micra XL",
  "Nissan Micra XV",
  "Nissan Sunny",
  "Nissan Sunny XL",
  "Nissan Terrano XL",
  "Nissan X Trail",
  "Renault Duster",
  "Renault Duster 110",
  "Renault Duster 110PS",
  "Renault Duster 85",
  "Renault Duster 85PS",
  "Renault Duster RxL",
  "Renault Kwid",
  "Renault Kwid 1.0",
  "Renault Kwid RXT",
  "Renault Lodgy 85",
  "Renault Scala RxL",
  "Skoda Fabia",
  "Skoda Fabia 1.2L",
  "Skoda Fabia Classic",
  "Skoda Laura",
  "Skoda Octavia Classic",
  "Skoda Rapid Elegance",
  "Skoda Superb 1.8",
  "Skoda Yeti Ambition",
  "Tata Aria Pleasure",
  "Tata Bolt XM",
  "Tata Indigo CS",
  "Tata Indigo eCS",
  "Tata Indigo LS",
  "Tata Indigo LX",
  "Tata Indigo Marina",
  "Tata Indica",
  "Tata Indica eV2",
  "Tata Indica V2",
  "Tata Manza",
  "Tata Manza Aqua",
  "Tata Manza Aura",
  "Tata Manza ELAN",
  "Tata Nano",
  "Tata Nano Cx",
  "Tata Nano GenX",
  "Tata Nano LX",
  "Tata Nano Lx",
  "Tata Sumo Gold",
  "Tata Sumo Grande",
  "Tata Sumo Victa",
  "Tata Tiago Revotron",
  "Tata Tiago Revotorq",
  "Tata Tigor Revotron",
  "Tata Venture EX",
  "Tata Vista Quadrajet",
  "Tata Zest Quadrajet",
  "Tata Zest XE",
  "Tata Zest XM",
  "Toyota Corolla",
  "Toyota Corolla Altis",
  "Toyota Corolla H2",
  "Toyota Etios",
  "Toyota Etios G",
  "Toyota Etios GD",
  "Toyota Etios Liva",
  "Toyota Fortuner",
  "Toyota Fortuner 3.0",
  "Toyota Innova 2.0",
  "Toyota Innova 2.5",
  "Toyota Qualis",
  "Volkswagen Jetta Comfortline",
  "Volkswagen Jetta Highline",
  "Volkswagen Passat Diesel",
  "Volkswagen Polo",
  "Volkswagen Polo Comfortline",
  "Volkswagen Polo Highline",
  "Volkswagen Polo Highline1.2L",
  "Volkswagen Polo Trendline",
  "Volkswagen Vento Comfortline",
  "Volkswagen Vento Highline",
  "Volkswagen Vento Konekt",
  "Volvo S80 Summum"
  ];

  const handlePredict = async () => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:5000/predict",
      formData
    );

    console.log(response.data);

    navigate("/result", {
      state: {
        predictedPrice: response.data.predicted_price,
        company: formData.company,
        name: formData.name,
        year: formData.year,
        fuel_type: formData.fuel_type,
        kms_driven: formData.kms_driven,
      }
    });
  } catch (error) {
    console.error(error);
  }
};
  return (
  <div className="min-h-screen bg-slate-50 p-6">

    {/* Navbar */}
    <div className="flex justify-between items-center px-6 py-4 bg-white rounded-xl shadow-sm border">
      <h1 className="text-xl font-bold text-slate-800">
        🚘 Car Price Predictor
      </h1>

      <p className="text-sm text-gray-500">
        Smart Pricing, Better Decisions
      </p>
    </div>

    {/* Main Content */}
    <div className="grid lg:grid-cols-2 gap-8 mt-8">

      {/* LEFT PANEL */}
      <div className="bg-white rounded-2xl p-8 shadow-sm">

        <h2 className="text-5xl font-bold leading-tight">
          Find the Best Price
          <br />
          <span className="text-blue-600">
            for Your Car ✨
          </span>
        </h2>

        <p className="mt-5 text-gray-500">
          Get an accurate estimate of your car's market price
          in seconds. Fill in the details and let our AI do the rest.
        </p>

        <div className="space-y-6 mt-8">

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <ShieldCheck className="text-blue-600" />
            </div>

            <div>
              <h4 className="font-semibold">
                Accurate Predictions
              </h4>

              <p className="text-sm text-gray-500">
                AI-powered model trained on real market data.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <TrendingUp className="text-green-600" />
            </div>

            <div>
              <h4 className="font-semibold">
                Fast & Easy
              </h4>

              <p className="text-sm text-gray-500">
                Get results in seconds.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Lock className="text-purple-600" />
            </div>

            <div>
              <h4 className="font-semibold">
                Privacy Focused
              </h4>

              <p className="text-sm text-gray-500">
                Your data is safe and never shared.
              </p>
            </div>
          </div>

        </div>

        <img
          src={car}
          alt="Car"
          className="w-[420px] mx-auto mt-12"
        />
      </div>

      {/* RIGHT PANEL */}
      <div className="bg-white rounded-2xl p-8 shadow-sm">

        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <Calculator className="w-6 h-6 text-blue-600" />
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              Get Your Car Price{" "}
              <span className="text-blue-600">
                Estimate
              </span>
            </h2>

            <p className="text-gray-500">
              Fill in the details below.
            </p>
          </div>
        </div>

        <div className="space-y-6">

          {/* Company */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mt-7 shrink-0">
              <Building2 className="w-5 h-5 text-blue-600" />
            </div>

            <div className="flex-1">
              <label className="text-sm font-semibold">
                Select the Company
              </label>

              <select
                className="w-full border border-gray-200 rounded-xl p-3 mt-2"
                value={formData.company}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    company: e.target.value,
                  })
                }
              >
                <option value="">Select Company</option>

                {companies.map((company) => (
                  <option key={company} value={company}>
                    {company}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Model */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mt-7 shrink-0">
              <Car className="w-5 h-5 text-blue-600" />
            </div>

            <div className="flex-1">
              <label className="text-sm font-semibold">
                Select the Model
              </label>

              <select
                className="w-full border border-gray-200 rounded-xl p-3 mt-2"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              >
                <option value="">Select Model</option>

                {names.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Year */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mt-7 shrink-0">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>

            <div className="flex-1">
              <label className="text-sm font-semibold">
                Select Year of Purchase
              </label>

              <select
                className="w-full border border-gray-200 rounded-xl p-3 mt-2"
                value={formData.year}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    year: e.target.value,
                  })
                }
              >
                <option value="">Select Year</option>

                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Fuel */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mt-7 shrink-0">
              <Fuel className="w-5 h-5 text-blue-600" />
            </div>

            <div className="flex-1">
              <label className="text-sm font-semibold">
                Select Fuel Type
              </label>

              <select
                className="w-full border border-gray-200 rounded-xl p-3 mt-2"
                value={formData.fuel_type}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fuel_type: e.target.value,
                  })
                }
              >
                <option value="">Select Fuel Type</option>

                {fuelTypes.map((fuel) => (
                  <option key={fuel} value={fuel}>
                    {fuel}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* KMS */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mt-7 shrink-0">
              <Gauge className="w-5 h-5 text-blue-600" />
            </div>

            <div className="flex-1">
              <label className="text-sm font-semibold">
                Enter Kilometers Driven
              </label>

              <input
                type="number"
                placeholder="Enter kilometers driven"
                className="w-full border border-gray-200 rounded-xl p-3 mt-2"
                value={formData.kms_driven}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    kms_driven: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <button
            onClick={handlePredict}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
          >
            Predict Price
          </button>

        </div>
      </div>

    </div>
  </div>
);
}

export default HomePage;