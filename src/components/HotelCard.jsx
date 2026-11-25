import { useState } from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import "../styles/HotelCard.css";

// Receives one hotel object as a "prop" from HotelList and displays it.
function HotelCard({ hotel }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="hotel-card">
      <div className="hotel-card-image">
        {imageFailed ? (
          <div className="image-placeholder">Image not available</div>
        ) : (
          <img
            src={hotel.image}
            alt={`${hotel.name} in ${hotel.city}`}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>

      <div className="hotel-card-body">
        <h2>{hotel.name}</h2>
        <StarRating rating={hotel.rating} />
        <p className="hotel-location">{hotel.city}</p>
        <p className="hotel-description">{hotel.shortDescription}</p>
      </div>

      <div className="hotel-card-price">
        <p className="price">₹{hotel.price.toLocaleString("en-IN")}</p>
        <p className="per-night">per night</p>
        <Link to={`/hotel/${hotel.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </article>
  );
}

export default HotelCard;
