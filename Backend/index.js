const express = require("express");
const app = express();
const connectDB = require("./config/db");
require("dotenv").config();
const PORT = 3000;
const cors = require("cors");
const patientRoutes = require("./routes/patientRoutes");
const doctorRoutes = require("./routes/doctorRoutes");

app.use(express.json());
app.use(cors());

app.use("/api/patient", patientRoutes);
app.use("/api/doctor", doctorRoutes);

// Connect to MongoDB
connectDB();

// Test Route
app.get("/", (req, res) => {
    res.send("API running smoothly!");
});


app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
    
});