import CopyButton from "./CopyButton";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ReviewResult({ review }) {
  if (!review) return null;

  return (
    <div className="mt-8 rounded-xl border bg-white shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
  <h2 className="text-2xl font-bold">🤖 AI Review</h2>
  <CopyButton review={review} />
</div>

      <ReactMarkdown
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");

            return !inline && match ? (
              <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className="bg-gray-200 px-1 rounded">
                {children}
              </code>
            );
          },
        }}
      >
        {review}
      </ReactMarkdown>
    </div>
  );
}

export default ReviewResult;