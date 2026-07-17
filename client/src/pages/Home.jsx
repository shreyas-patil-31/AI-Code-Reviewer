import ReviewResult from "../components/ReviewResult";
import ReviewButton from "../components/ReviewButton";
import { reviewCode } from "../services/api";
import { useState } from "react";
import Navbar from "../components/Navbar";
import LanguageSelector from "../components/LanguageSelector";
import CodeEditor from "../components/CodeEditor";

function Home() {

  const [language, setLanguage] = useState("cpp");

  const [code, setCode] = useState("");

  const [review, setReview] = useState("");
const [loading, setLoading] = useState(false);

const handleReview = async () => {
  if (!code.trim()) {
    alert("Please enter some code first.");
    return;
  }

  try {
    setLoading(true);

    const data = await reviewCode(language, code);

    setReview(data.review);
  } catch (error) {
    console.error(error);

    if (error.response) {
      if (error.response.status === 429) {
        alert("Rate limit exceeded. Please try again in a few seconds.");
      } else if (error.response.status >= 500) {
        alert("Server error. Please try again later.");
      } else {
        alert(error.response.data?.message || "Something went wrong.");
      }
    } else {
      alert("Unable to connect to the server.");
    }
  } finally {
    setLoading(false);
  }
};  


return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100">
  <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="mb-10 text-center">
  <h2 className="text-5xl font-extrabold text-slate-800">
    AI Code Reviewer
  </h2>

  <p className="text-slate-600 mt-3 text-lg">
    Paste your code, get AI-powered feedback instantly.
  </p>
</div>

        <div className="flex justify-between items-end mt-6">
  <LanguageSelector
    language={language}
    setLanguage={setLanguage}
  />

  <button
    onClick={() => {
      setCode("");
      setReview("");
    }}
    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200"
  >
    🗑 Clear Code
  </button>
</div>

<CodeEditor
  language={language}
  code={code}
  setCode={setCode}
/>

        <ReviewButton
  handleReview={handleReview}
  loading={loading}
/>

<ReviewResult review={review} />

      </div>
      </div>
    </>
  );
  
}

export default Home;