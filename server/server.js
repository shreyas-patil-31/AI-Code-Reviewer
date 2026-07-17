require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

console.log(
  "OpenRouter API Key:",
  process.env.OPENROUTER_API_KEY ? "Loaded ✅" : "Not Found ✅"
);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});