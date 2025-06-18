const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctor");

exports.SignUpDoctor = async (req, res) => {
  const { name, email, password, phone, clinicName, clinicAddress, specialization, experience, qualifications } = req.body;



  try {
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ message: "Doctor already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newDoctor = new Doctor({
      name,
      email,
      phone,
      clinicName,
      clinicAddress,
      specialization,
      experience,
      qualifications,
      password: hashedPassword,
      role: "doctor"
    });


    await newDoctor.save();

    res.status(201).json({ message: "Doctor registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


exports.SignInDoctor = async (req, res) => {
  const { email, password } = req.body;

  try {
    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: doctor._id, role: doctor.role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ token, doctorId: doctor._id });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
