require("dotenv").config();

const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

async function reviewCode(language, code) {
  const prompt = `
You are an expert software engineer and technical interviewer.

Review the following ${language} code thoroughly.

Return your answer in Markdown format.

Include the following sections:

# Overall Summary
Give a short summary of the code.

# Errors
Mention syntax or compilation errors.

# Bugs
Mention logical bugs and runtime issues.

# Code Quality
Comment on readability, naming, formatting and maintainability.

# Time Complexity
Analyze the time complexity.

# Space Complexity
Analyze the space complexity.

# Optimization Suggestions
Suggest better approaches if possible.

# Corrected Code
Provide the corrected and optimized version inside a markdown code block.

Code:

${code}
`;

  const completion = await client.chat.completions.create({
    model: "poolside/laguna-xs-2.1:free",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return completion.choices[0].message.content;
}

module.exports = { reviewCode };