const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const reviewRoutes = require("./routes/reviewRoutes");

app.use("/api", reviewRoutes);

app.get("/", (req, res) => {
    res.send("AI Code Reviewer Backend Running 🚀");
});

module.exports = app;