import { useState } from "react";

function CopyButton({ review }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(review);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
    >
      {copied ? "✅ Copied!" : "📋 Copy Review"}
    </button>
  );
}

export default CopyButton;