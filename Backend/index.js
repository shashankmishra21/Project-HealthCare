const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("API running smoothly!");
});


app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
