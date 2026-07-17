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

      <div className="max-w-6xl mx-auto mt-10 px-6">

        <h2 className="text-4xl font-bold mb-6">
          Welcome to AI Code Reviewer
        </h2>

        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
        />

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
    </>
  );
  
}

export default Home;