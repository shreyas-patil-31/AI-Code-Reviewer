const { reviewCode: reviewWithAI } = require("../services/geminiService");

const reviewCode = async (req, res) => {
  try {
    const { language, code } = req.body;

    const result = await reviewWithAI(language, code);

    res.json({
      success: true,
      review: result,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { reviewCode };