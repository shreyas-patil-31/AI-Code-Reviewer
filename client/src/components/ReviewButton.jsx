function ReviewButton({ handleReview, loading }) {
  return (
    <button
      onClick={handleReview}
      disabled={loading}
      className="mt-8 w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-4 rounded-xl text-lg font-bold shadow-lg transition-all duration-200"
    >
      {loading && (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      )}

      {loading ? "Reviewing..." : "Review Code"}
    </button>
  );
}

export default ReviewButton;