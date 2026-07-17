function ReviewButton({ handleReview, loading }) {
  return (
    <button
      onClick={handleReview}
      disabled={loading}
      className="mt-6 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold transition"
    >
      {loading && (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      )}

      {loading ? "Reviewing..." : "Review Code"}
    </button>
  );
}

export default ReviewButton;