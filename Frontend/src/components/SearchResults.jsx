import React from "react";
import { Star, Clock, MapPin } from "lucide-react";

const SearchResults = ({ searchParams }) => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      qualifications: ["MD", "FACC"],
      experience: "15 years",
      rating: "4.9 (234 reviews)",
      location: "Manhattan Medical Center",
      slots: ["9:00 AM", "10:30 AM", "2:30 PM", "4:00 PM"],
      fee: "$150",
      availability: "Available Today",
      nextAvailable: "2:30 PM",
    },
    {
      name: "Dr. Michael Chen",
      
      specialty: "Neurologist",
      qualifications: ["MD", "PhD"],
      experience: "12 years",
      rating: "4.8 (189 reviews)",
      location: "Brooklyn Neurology Clinic",
      slots: ["10:00 AM", "11:30 AM", "3:00 PM", "5:30 PM"],
      fee: "$200",
      availability: "Available Tomorrow",
      nextAvailable: "10:00 AM",
    },
    {
      name: "Dr. Emily Davis",
      specialty: "Orthopedic Surgeon",
      qualifications: ["MD", "FAADS"],
      experience: "18 years",
      rating: "4.9 (312 reviews)",
      location: "Queens Orthopedic Center",
      slots: ["9:30 AM", "1:00 PM", "4:15 PM", "6:00 PM"],
      fee: "$180",
      availability: "Available Today",
      nextAvailable: "4:15 PM",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Search Results</h1>
      <p className="text-gray-600 mb-8">
        {searchParams.type === "doctors"
          ? `Doctors near ${searchParams.location}`
          : `${searchParams.specialty} specialists in ${searchParams.location}`}{" "}
        • {doctors.length} results found
      </p>

      <div className="space-y-8">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-800 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                    {doctor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {doctor.name}
                    </h2>
                    <p className="text-gray-600">{doctor.specialty}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {doctor.qualifications.map((qual, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs"
                        >
                          {qual}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-sm text-gray-600">
                        {doctor.experience}
                      </span>
                      <span className="flex items-center text-sm text-yellow-600">
                        <Star className="w-4 h-4 fill-yellow-400 mr-1" />
                        {doctor.rating}
                      </span>
                    </div>
                    <div className="flex items-center mt-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {doctor.location}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-medium text-gray-800 mb-2">
                    Available Time Slots:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {doctor.slots.map((slot, i) => (
                      <button
                        key={i}
                        className="bg-green-50 hover:bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm transition-colors"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:w-64 flex flex-col border border-gray-200 rounded-lg p-4">
                <div className="text-center mb-4">
                  <p className="text-2xl font-bold text-gray-800">
                    {doctor.fee}
                  </p>
                  <p className="text-sm text-gray-600">Consultation Fee</p>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">
                    {doctor.availability}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Next available:{" "}
                  <span className="font-medium">{doctor.nextAvailable}</span>
                </p>
                <button className="mt-auto bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
