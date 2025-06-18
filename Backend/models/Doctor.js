const mongoose = require("mongoose");

// Define time slot availability for  single day
const availabilitySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  timeSlots: [
    {
      slot: { type: String, required: true }, // "10:00 AM", "2:00 PM", etc.
      isAvailable: { type: Boolean, default: true },
    },
  ],
});

// Appointment schema
const appointmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  clinicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Clinic",
  },
  date: {
    type: Date,
    required: true,
  },
  timeSlot: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["upcoming", "completed", "cancelled"],
    default: "upcoming",
  },
  diagnosis: String,
  prescription: String,
  fee: {
    type: Number,
    required: true,
  },
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    experience: {
      type: Number, // in years
      required: true,
    },
    qualifications: {
      type: String,
      required: true,
    },
    clinicName: {
      type: String,
      required: true,
    },
    clinicAddress: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "doctor", "admin"],
      default: "doctor",
    },
    profileImage: {
      type: String, // Cloudinary image URL
    },

    availability: [availabilitySchema], // Calendar based availability
    appointments: [appointmentSchema], // All appointment details

    isAvailable: {
      type: Boolean,
      default: true,
    },

    earnings: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);
