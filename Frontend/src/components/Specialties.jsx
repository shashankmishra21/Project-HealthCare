import React from "react";
import {
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaEye,
  FaStethoscope,
  FaBaby,
  FaAllergies,
  FaHeadSideVirus,
} from "react-icons/fa";

// Define specialties array outside the component
const specialtiesData = [
  {
    name: "Cardiology",
    icon: <FaHeartbeat />,
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Neurology",
    icon: <FaBrain />,
    color: "bg-purple-100 text-purple-600",
  },
  { name: "Orthopedics", icon: <FaBone />, color: "bg-blue-100 text-blue-600" },
  {
    name: "Ophthalmology",
    icon: <FaEye />,
    color: "bg-green-100 text-green-600",
  },
  {
    name: "General Medicine",
    icon: <FaStethoscope />,
    color: "bg-yellow-100 text-yellow-600",
  },
  { name: "Pediatrics", icon: <FaBaby />, color: "bg-pink-100 text-pink-600" },
  {
    name: "Dermatology",
    icon: <FaAllergies />,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    name: "Psychiatry",
    icon: <FaHeadSideVirus />,
    color: "bg-teal-100 text-teal-600",
  },
];

const Specialties = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Popular Specialties
          </h2>
          <p className="mt-3 text-xl text-gray-500">
            Browse our most sought-after medical specialties
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialtiesData.map((specialty, index) => (
            <div
              key={index}
              className={`${specialty.color} rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300`}
            >
              <div className="px-6 py-8 flex flex-col items-center">
                <div className="text-4xl mb-4">{specialty.icon}</div>
                <h3 className="text-lg font-medium text-center">
                  {specialty.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
