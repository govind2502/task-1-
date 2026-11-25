// Shows filled and empty stars, e.g. rating 4 -> 4 gold stars + 1 grey star
function StarRating({ rating }) {
  return (
    <span className="stars" role="img" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}
      <span className="stars-empty">{"★".repeat(5 - rating)}</span>
    </span>
  );
}

export default StarRating;
