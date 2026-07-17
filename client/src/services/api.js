import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-code-reviewer-74ec.onrender.com/api",
});

export const reviewCode = async (language, code) => {
  const response = await API.post("/review", {
    language,
    code,
  });

  return response.data;
};